import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Mock data for MVP — will be replaced with Supabase queries
  const campaigns = [
    { id: '1', name: '123 Oak Street - New Listing', type: 'blog', status: 'published', address: '123 Oak St, Scottsdale, AZ', createdAt: new Date().toISOString() },
    { id: '2', name: 'Q1 Market Update - Phoenix', type: 'social', status: 'scheduled', address: 'Phoenix Metro Area', createdAt: new Date().toISOString() },
    { id: '3', name: 'Open House Invite - Sunset Blvd', type: 'email', status: 'draft', address: '456 Sunset Blvd, Irvine, CA', createdAt: new Date().toISOString() },
  ]

  return NextResponse.json({ campaigns })
}

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { type, address, city, state, propertyType, bedrooms, bathrooms, price, description } = body

  // Mock create — will be replaced with Supabase insert
  const campaign = {
    id: Math.random().toString(36).slice(2, 9),
    name: `${address || 'New Listing'} - ${city || 'Unknown'}`,
    type,
    status: 'draft',
    address: `${address}, ${city}, ${state}`,
    propertyDetails: { propertyType, bedrooms, bathrooms, price, description },
    createdAt: new Date().toISOString(),
  }

  return NextResponse.json({ campaign }, { status: 201 })
}