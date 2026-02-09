import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. CORS Configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 2. Validate Target URL
  // Handle URL from query string (for GET) or body (sometimes passed differently)
  const urlParam = Array.isArray(req.query.url) ? req.query.url[0] : req.query.url;
  
  if (!urlParam || typeof urlParam !== 'string') {
    return res.status(400).send('Missing "url" query parameter');
  }

  // Security: Whitelist specific domains
  const ALLOWED_DOMAINS = ['tipscbse.com', 'www.tipscbse.com'];
  try {
    const targetUrl = new URL(urlParam);
    if (!ALLOWED_DOMAINS.includes(targetUrl.hostname)) {
      return res.status(403).send('Domain not allowed');
    }
  } catch (e) {
    return res.status(400).send('Invalid URL');
  }

  try {
    // 3. Prepare Fetch Options
    const options: any = {
      method: req.method,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        // Forward Content-Type if present (crucial for forms)
        ...(req.headers['content-type'] && { 'Content-Type': req.headers['content-type'] }),
      },
      redirect: 'follow'
    };

    // 4. Handle Request Body (for Form Submissions)
    if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
      if (typeof req.body === 'object') {
        // Vercel parses body; we need to stringify it back for node-fetch
        if (req.headers['content-type']?.includes('application/x-www-form-urlencoded')) {
          options.body = new URLSearchParams(req.body as any).toString();
        } else if (req.headers['content-type']?.includes('application/json')) {
          options.body = JSON.stringify(req.body);
        } else {
          // Fallback for other types
          options.body = JSON.stringify(req.body); 
        }
      } else {
        options.body = req.body;
      }
    }

    // 5. Fetch External Content
    const response = await fetch(urlParam, options);
    const finalUrl = response.url; // Capture final URL after redirects
    const contentType = response.headers.get('content-type') || '';
    
    // --- CACHING STRATEGY ---
    if (contentType.match(/image|css|javascript|font/i)) {
      res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, immutable');
    } else {
      // Don't cache HTML forms aggressively to ensure fresh tokens/state
      res.setHeader('Cache-Control', 'no-store, max-age=0');
    }

    // 6. Handle Non-HTML Content (Images, CSS, JS)
    if (!contentType.includes('text/html')) {
      res.setHeader('Content-Type', contentType);
      const buffer = await response.buffer();
      return res.send(buffer);
    }

    // 7. Handle HTML Content (Rewrite Links & Forms)
    const html = await response.text();
    const $ = cheerio.load(html);
    
    const rewriteUrl = (link: string) => {
      if (!link) return link;
      if (link.startsWith('data:') || link.startsWith('#') || link.startsWith('mailto:')) return link;
      
      try {
        // Resolve relative paths against the final URL (handling redirects)
        const absoluteUrl = new URL(link, finalUrl).toString();
        
        // Construct proxy URL
        const proxyBase = `https://${req.headers.host}/api/proxy`;
        return `${proxyBase}?url=${encodeURIComponent(absoluteUrl)}`;
      } catch (e) {
        return link;
      }
    };

    // Rewrite standard attributes
    $('img, script, iframe').each((_, el) => {
      const src = $(el).attr('src');
      if (src) $(el).attr('src', rewriteUrl(src));
    });

    $('link, a').each((_, el) => {
      const href = $(el).attr('href');
      if (href) $(el).attr('href', rewriteUrl(href));
    });

    // Rewrite Form Actions (Crucial for KYC submission)
    $('form').each((_, el) => {
      const action = $(el).attr('action');
      if (action) $(el).attr('action', rewriteUrl(action));
    });

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send($.html());

  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).send('Error fetching external content');
  }
}