import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getProducts() {
  const response = await contentfulClient.getEntries({
    content_type: 'product',
    include: 2, // resolve linked assets (images, MSDS) and category
  });
  return response.items;
}

export async function getProductBySlug(slug) {
  const response = await contentfulClient.getEntries({
    content_type: 'product',
    'fields.slug': slug,
    include: 2,
    limit: 1,
  });
  return response.items[0];
}

export async function getCategories() {
  const response = await contentfulClient.getEntries({
    content_type: 'category',
  });
  return response.items;
}