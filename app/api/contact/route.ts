import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const company = typeof body.company === 'string' ? body.company.trim() : '';
  const source = typeof body.source === 'string' ? body.source.trim() : 'contact';

  if (!email || !email.includes('@')) {
    return NextResponse.json({ ok: false, error: 'Valid email is required' }, { status: 400 });
  }

  // Hook: connect Resend, SendGrid, Postmark, or your CRM here.
  console.info('[contact]', { source, name, email, company, messageLength: message.length });

  return NextResponse.json({ ok: true });
}
