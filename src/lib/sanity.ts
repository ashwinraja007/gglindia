import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// You will find your projectId in your Sanity project's sanity.config.ts or sanity.cli.ts file
export const client = createClient({
  projectId: 'bu89qhbz', 
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-03-18', // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// New helper for highly optimized images
export function optimizedImageUrl(source: any, width: number = 1200) {
  return builder.image(source)
    .width(width)        // Resizes to specific width
    .auto('format')      // Automatically serves WebP or AVIF if supported
    .quality(80)         // Compresses slightly without noticeable quality loss
    .fit('max')          // Ensures it doesn't upscale small images
    .url();
}