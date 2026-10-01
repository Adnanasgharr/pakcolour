// src/app/api/products/search/route.js
import { NextResponse } from 'next/server';
import { contentfulClient } from '@/lib/contentful';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';

  if (!q.trim()) {
    return NextResponse.json([]);
  }

  try {
    // Search Contentful products by matching query string
    const response = await contentfulClient.getEntries({
      content_type: 'product',
      query: q,
      limit: 6,
      include: 1,
    });

    const suggestions = response.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title || '',
      slug: item.fields.slug || '',
      casNumber: item.fields.casNumber || '',
      category: item.fields.category?.fields?.title || '',
    }));

    return NextResponse.json(suggestions);
  } catch (error) {
    console.error('Error fetching search suggestions:', error);
    return NextResponse.json([], { status: 500 });
  }
}