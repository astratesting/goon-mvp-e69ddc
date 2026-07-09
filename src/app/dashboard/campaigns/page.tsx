"use client"

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Plus, Search, Filter, MapPin, Mail, Smartphone, Globe } from 'lucide-react'

const typeIcons: Record<string, React.ReactNode> = {
  'Blog Post': <Globe className="w-4 h-4" />,
  'Social Campaign': <Smartphone className="w-4 h-4" />,
  'Email Sequence': <Mail className="w-4 h-4" />,
}

const mockCampaigns = [
  { id: '1', name: '123 Oak Street - New Listing', type: 'Blog Post', status: 'Published', address: '123 Oak St, Scottsdale, AZ', created: '2 hours ago', posts: 1 },
  { id: '2', name: 'Q1 Market Update - Phoenix', type: 'Social Campaign', status: 'Scheduled', address: 'Phoenix Metro Area', created: 'Yesterday', posts: 5 },
  { id: '3', name: 'Open House Invite - Sunset Blvd', type: 'Email Sequence', status: 'Draft', address: '456 Sunset Blvd, Irvine, CA', created: '3 hours ago', posts: 3 },
  { id: '4', name: 'Spring Market Report - Scottsdale', type: 'Blog Post', status: 'Review', address: 'Scottsdale, AZ', created: '2 days ago', posts: 1 },
  { id: '5', name: 'Luxury Listing - Beverly Hills', type: 'Blog Post', status: 'Published', address: '789 Rodeo Dr, Beverly Hills, CA', created: '3 days ago', posts: 1 },
  { id: '6', name: 'New Agent Welcome Series', type: 'Email Sequence', status: 'Published', address: 'All Locations', created: '1 week ago', posts: 7 },
]

const statusColors: Record<string, string> = {
  Published: 'bg-green-100 text-green-700',
  Scheduled: 'bg-blue-100 text-blue-700',
  Draft: 'bg-gray-100 text-gray-600',
  Review: 'bg-honey-100 text-honey-700',
}

const typeColors: Record<string, string> = {
  'Blog Post': 'bg-violet-100 text-violet-700',
  'Social Campaign': 'bg-coral-100 text-coral-700',
  'Email Sequence': 'bg-honey-100 text-honey-700',
}

export default function CampaignsPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = mockCampaigns.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.address.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'all' || c.status.toLowerCase() === filter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Campaigns</h1>
          <p className="text-gray-500 font-body">Create and manage your marketing content</p>
        </div>
        <Link href="/dashboard/campaigns/new" className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> New Campaign
        </Link>
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="input-warm pl-10" placeholder="Search campaigns or addresses..." />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          {['all', 'published', 'scheduled', 'draft', 'review'].map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors capitalize ${filter === f ? 'bg-violet-100 text-violet-700' : 'text-gray-500 hover:bg-gray-100'}`}>{f}</button>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        {filtered.map((campaign) => (
          <Link key={campaign.id} href={`/dashboard/campaigns/${campaign.id}`} className="card-warm hover:shadow-md transition-shadow duration-200 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${typeColors[campaign.type]}`}>{typeIcons[campaign.type]}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-0.5">{campaign.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500"><MapPin className="w-3 h-3" /> {campaign.address}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">{campaign.posts} post{campaign.posts !== 1 ? 's' : ''}</p>
                <p className="text-xs text-gray-400">{campaign.created}</p>
              </div>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[campaign.status]}`}>{campaign.status}</span>
            </div>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center py-12"><FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500 font-body">No campaigns found.</p></div>
      )}
    </div>
  )
}