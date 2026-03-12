import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'data', 'battery-status.json')
    const raw = readFileSync(filePath, 'utf-8')
    const data = JSON.parse(raw)

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (err) {
    console.error('Battery status read error:', err)
    return NextResponse.json(
      { ok: false, error: 'Failed to load battery status' },
      { status: 500 }
    )
  }
}
