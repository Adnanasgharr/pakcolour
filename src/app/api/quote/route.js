import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { companyName, email, phone, productName, quantity, details } = await req.json();

    await resend.emails.send({
      from: 'PAK COLOUR Website <onboarding@resend.dev>',
      to: ['pakcolourchemical@outlook.com'],
      subject: `New Commercial RFQ: ${productName} (${quantity}) - ${companyName}`,
      html: `
        <h2>New Commercial Inquiry Received</h2>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Quantity Required:</strong> ${quantity}</p>
        <p><strong>Contact Email:</strong> ${email}</p>
        <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
        <p><strong>Additional Details:</strong> ${details}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit quote request' }, { status: 500 });
  }
}