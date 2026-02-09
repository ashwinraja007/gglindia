export default async function handler(req, res) {
  const { path } = req.query;
  
  // Reconstruct query parameters excluding 'path'
  const query = { ...req.query };
  delete query.path;
  
  const queryString = new URLSearchParams(query).toString();
  const targetPath = path || '';
  const targetUrl = `http://www.amassdubai.com/${targetPath}${queryString ? '?' + queryString : ''}`;

  try {
    const response = await fetch(targetUrl);
    
    // Forward headers, stripping security ones
    for (const [key, value] of response.headers) {
      if (!['content-security-policy', 'x-frame-options', 'content-encoding', 'transfer-encoding'].includes(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    }

    res.status(response.status);
    
    const arrayBuffer = await response.arrayBuffer();
    res.send(Buffer.from(arrayBuffer));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch content' });
  }
}