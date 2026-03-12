import { NextRequest, NextResponse } from 'next/server'

interface ApplicationPayload {
  name: string
  email: string
  phone?: string
  city?: string
  state?: string
  country?: string
  affiliation?: string
  domain: string
  challenge: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ApplicationPayload = await req.json()

    const required = ['name', 'email', 'domain', 'challenge']
    for (const field of required) {
      if (!body[field as keyof ApplicationPayload]?.trim()) {
        return NextResponse.json(
          { ok: false, error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Log to console — replace with your email/notification setup
    // See README for nodemailer or Resend integration
    console.log('=== PARTNER APPLICATION ===')
    console.log(JSON.stringify(body, null, 2))
    console.log('===========================')

    // Optional: send email notification via nodemailer
    // Uncomment and configure SMTP env vars to enable
    /*
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@teliminal.com',
      to: process.env.PARTNER_EMAIL || 'trey@rally.llc',
      subject: `Partner Application — ${body.name}`,
      text: [
        `Name: ${body.name}`,
        `Email: ${body.email}`,
        `Phone: ${body.phone || '—'}`,
        `Location: ${[body.city, body.state, body.country].filter(Boolean).join(', ')}`,
        `Affiliation: ${body.affiliation || '—'}`,
        `Domain: ${body.domain}`,
        ``,
        `Challenge:`,
        body.challenge,
      ].join('\n'),
    })
    */

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Partner application error:', err)
    return NextResponse.json(
      { ok: false, error: 'Submission failed. Please try again.' },
      { status: 500 }
    )
  }
}
