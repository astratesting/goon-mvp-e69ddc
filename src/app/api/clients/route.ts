import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const clients = [
    { id: '1', name: 'Sunrise Realty Group', contact: 'Jane Smith', email: 'jane@sunriserealty.com', location: 'Scottsdale, AZ', campaigns: 8, status: 'active' },
    { id: '2', name: 'Pacific Coast Properties', contact: 'Mike Chen', email: 'mike@pacificcoast.com', location: 'Irvine, CA', campaigns: 5, status: 'active' },
  ]

  return NextResponse.json({ clients })
}

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { name, contact, email, phone, location } = body

  const client = {
    id: Math.random().toString(36).slice(2, 9),
    name,
    contact,
    email,
    phone,
    location,
    campaigns: 0,
    status: 'onboarding',
    createdAt: new Date().toISOString(),
  }

  return NextResponse.json({ client }, { status: 201 })
}