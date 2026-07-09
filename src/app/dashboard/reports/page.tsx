import { BarChart3, TrendingUp, Users, FileText, Eye, Heart, Share2 } from 'lucide-react'

const reportCards = [
  { title: 'Total Impressions', value: '24.8K', change: '+18% vs last month', icon: Eye, color: 'bg-violet-100 text-violet-700' },
  { title: 'Total Engagement', value: '3.2K', change: '+12% vs last month', icon: Heart, color: 'bg-coral-100 text-coral-700' },
  { title: 'Total Shares', value: '847', change: '+24% vs last month', icon: Share2, color: 'bg-honey-100 text-honey-700' },
  { title: 'Content Published', value: '147', change: '+23 this week', icon: FileText, color: 'bg-green-100 text-green-700' },
]

const clientPerformance = [
  { name: 'Desert Luxury Homes', campaigns: 12, impressions: '8.4K', engagement: '1.2K', topPost: 'Luxury Pool Home - Paradise Valley' },
  { name: 'Sunrise Realty Group', campaigns: 8, impressions: '6.2K', engagement: '890', topPost: 'New Listing - Old Town Scottsdale' },
  { name: 'Pacific Coast Properties', campaigns: 5, impressions: '5.1K', engagement: '720', topPost: 'Beachfront Condo - Newport Beach' },
  { name: 'Beverly Hills Premier', campaigns: 3, impressions: '3.8K', engagement: '450', topPost: 'Estate Tour - Holmby Hills' },
  { name: 'Valley View Realty', campaigns: 0, impressions: '—', engagement: '—', topPost: '—' },
]

const weeklyData = [
  { day: 'Mon', posts: 12, impressions: 3200 },
  { day: 'Tue', posts: 15, impressions: 4100 },
  { day: 'Wed', posts: 18, impressions: 5200 },
  { day: 'Thu', posts: 14, impressions: 3800 },
  { day: 'Fri', posts: 22, impressions: 6100 },
  { day: 'Sat', posts: 8, impressions: 2400 },
  { day: 'Sun', posts: 5, impressions: 1500 },
]

const maxImpressions = Math.max(...weeklyData.map(d => d.impressions))

export default function ReportsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports</h1>
        <p className="text-gray-500 font-body">Performance metrics across all client campaigns</p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {reportCards.map((card) => {
          const Icon = card.icon
          return (
            <div key={card.title} className="card-warm">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.color}`}><Icon className="w-5 h-5" /></div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{card.value}</p>
              <p className="text-sm text-gray-500 mb-1">{card.title}</p>
              <p className="text-xs text-green-600 font-medium">{card.change}</p>
            </div>
          )
        })}
      </div>

      {/* Weekly Activity Chart */}
      <div className="card-warm mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Weekly Activity</h2>
        <div className="flex items-end justify-between h-48 gap-4">
          {weeklyData.map((day) => (
            <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
              <p className="text-xs text-gray-500">{day.impressions.toLocaleString()}</p>
              <div className="w-full rounded-xl bg-violet-100 relative overflow-hidden" style={{ height: `${(day.impressions / maxImpressions) * 120}px` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-violet-500 to-violet-400 rounded-xl" style={{ height: `${(day.posts / 22) * 100}%` }} />
              </div>
              <p className="text-sm font-medium text-gray-700">{day.day}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
          <span className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-violet-400" /> Impressions</span>
          <span className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-violet-100" /> Post Volume</span>
        </div>
      </div>

      {/* Client Performance */}
      <div className="card-warm">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Client Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Client</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Campaigns</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Impressions</th>
                <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Engagement</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Top Post</th>
              </tr>
            </thead>
            <tbody>
              {clientPerformance.map((client, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="py-3 px-4"><span className="font-medium text-gray-900">{client.name}</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-gray-700">{client.campaigns}</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-gray-700">{client.impressions}</span></td>
                  <td className="py-3 px-4 text-center"><span className="text-gray-700">{client.engagement}</span></td>
                  <td className="py-3 px-4"><span className="text-gray-500 text-sm">{client.topPost}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}