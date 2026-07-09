"use client"

import { useState } from 'react'
import { Users, Plus, Search, Filter, MapPin, Phone, Mail, Building2 } from 'lucide-react'

const mockClients = [
  { id: '1', name: 'Sunrise Realty Group', contact: 'Jane Smith', email: 'jane@sunriserealty.com', phone: '(480) 555-0101', location: 'Scottsdale, AZ', campaigns: 8, status: 'Active', since: 'Jan 2024' },
  { id: '2', name: 'Pacific Coast Properties', contact: 'Mike Chen', email: 'mike@pacificcoast.com', phone: '(949) 555-0202', location: 'Irvine, CA', campaigns: 5, status: 'Active', since: 'Mar 2024' },
  { id: '3', name: 'Desert Luxury Homes', contact: 'Sarah Johnson', email: 'sarah@desertluxury.com', phone: '(602) 555-0303', location: 'Phoenix, AZ', campaigns: 12, status: 'Active', since: 'Nov 2023' },
  { id: '4', name: 'Beverly Hills Premier', contact: 'David Lee', email: 'david@bhpremier.com', phone: '(310) 555-0404', location: 'Beverly Hills, CA', campaigns: 3, status: 'Onboarding', since: 'This week' },
  { id: '5', name: 'Valley View Realty', contact: 'Lisa Park', email: 'lisa@valleyview.com', phone: '(480) 555-0505', location: 'Mesa, AZ', campaigns: 0, status: 'Pending', since: 'Today' },
]

const statusColors: Record<string, string> = {
  Active: 'bg-green-100 text-green-700',
  Onboarding: 'bg-blue-100 text-blue-700',
  Pending: 'bg-honey-100 text-honey-700',
  Inactive: 'bg-gray-100 text-gray-600',
}

export default function ClientsPage() {
  const [search, setSearch] = useState('')
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [newClient, setNewClient] = useState({ name: '', contact: '', email: '', phone: '', location: '' })

  const filtered = mockClients.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.contact.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Clients</h1>
          <p className="text-gray-500 font-body">Manage your brokerage clients and onboarding</p>
        </div>
        <button onClick={() => setShowOnboarding(true)} className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add Client
        </button>
      </div>

      <div className="relative max-w-md mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="input-warm pl-10" placeholder="Search clients..." />
      </div>

      {/* Client Cards */}
      <div className="grid gap-4">
        {filtered.map((client) => (
          <div key={client.id} className="card-warm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{client.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {client.contact}</span>
                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {client.phone}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {client.location}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[client.status]}`}>{client.status}</span>
                <p className="text-sm text-gray-500 mt-2">{client.campaigns} campaigns</p>
                <p className="text-xs text-gray-400">Since {client.since}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Onboarding Modal */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Add New Client</h2>
            <p className="text-gray-500 font-body mb-6">Onboard a new brokerage to the platform</p>
            <div className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Brokerage Name</label><input type="text" value={newClient.name} onChange={(e) => setNewClient({ ...newClient, name: e.target.value })} className="input-warm" placeholder="Sunrise Realty Group" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Primary Contact</label><input type="text" value={newClient.contact} onChange={(e) => setNewClient({ ...newClient, contact: e.target.value })} className="input-warm" placeholder="Jane Smith" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label><input type="email" value={newClient.email} onChange={(e) => setNewClient({ ...newClient, email: e.target.value })} className="input-warm" placeholder="jane@brokerage.com" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label><input type="tel" value={newClient.phone} onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })} className="input-warm" placeholder="(480) 555-0101" /></div>
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Location</label><input type="text" value={newClient.location} onChange={(e) => setNewClient({ ...newClient, location: e.target.value })} className="input-warm" placeholder="Scottsdale, AZ" /></div>
            </div>
            <div className="flex gap-4 mt-8">
              <button onClick={() => setShowOnboarding(false)} className="btn-outline flex-1">Cancel</button>
              <button onClick={() => setShowOnboarding(false)} className="btn-primary flex-1">Add Client</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}