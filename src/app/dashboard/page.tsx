import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { FileText, Users, BarChart3, TrendingUp } from 'lucide-react'

const stats = [
  { label: 'Total Campaigns', value: '12', change: '+3 this month', icon: FileText, color: 'bg-violet-100 text-violet-700' },
  { label: 'Active Clients', value: '8', change: '+2 this month', icon: Users, color: 'bg-coral-100 text-coral-700' },
  { label: 'Posts Published', value: '147', change: '+23 this week', icon: BarChart3, color: 'bg-honey-100 text-honey-700' },
  { label: 'Engagement Rate', value: '4.2%', change: '+0.8% vs last month', icon: TrendingUp, color: 'bg-green-100 text-green-700' },
]

const recentCampaigns = [
  { name: '123 Oak Street - New Listing', type: 'Blog Post', status: 'Published', date: '2 hours ago' },
  { name: 'Q1 Market Update - Phoenix', type: 'Social Campaign', status: 'Scheduled', date: 'Tomorrow' },
  { name: 'Open House Invite - Sunset Blvd', type: 'Email Sequence', status: 'Draft', date: '3 hours ago' },
  { name: 'Spring Market Report - Scottsdale', type: 'Blog Post', status: 'Review', date: 'Yesterday' },
]

const statusColors: Record<string, string> = {
  Published: 'bg-green-100 text-green-700',
  Scheduled: 'bg-blue-100 text-blue-700',
  Draft: 'bg-gray-100 text-gray-600',
  Review: 'bg-honey-100 text-honey-700',
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-500 font-body">
          Welcome back! Here's how your marketing is performing.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="card-warm">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
              <p className="text-xs text-green-600 font-medium">{stat.change}</p>
            </div>
          )
        })}
      </div>

      {/* Recent Campaigns */}
      <div className="card-warm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Recent Campaigns</h2>
          <a href="/dashboard/campaigns" className="text-sm font-medium text-violet-600 hover:text-violet-700">
            View all →
          </a>
        </div>
        <div className="space-y-4">
          {recentCampaigns.map((campaign, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{campaign.name}</p>
                  <p className="text-sm text-gray-500">{campaign.type} · {campaign.date}</p>
                </div>
              </div>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[campaign.status]}`}>
                {campaign.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}