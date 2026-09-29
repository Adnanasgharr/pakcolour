import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const secret = req.headers.get('x-contentful-webhook-secret');
  
  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  revalidatePath('/products');
  revalidatePath('/products/[slug]', 'page');

  return NextResponse.json({ revalidated: true, now: Date.now() });
}