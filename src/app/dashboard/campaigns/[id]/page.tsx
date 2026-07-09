import { ArrowLeft, MapPin, Edit3, Send, Clock } from 'lucide-react'
import Link from 'next/link'

export default function CampaignDetailPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link href="/dashboard/campaigns" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-violet-600 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Campaigns</Link>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">123 Oak Street - New Listing</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500"><span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> 123 Oak St, Scottsdale, AZ 85251</span><span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Created 2 hours ago</span></div>
        </div>
        <div className="flex gap-3">
          <button className="btn-outline flex items-center gap-2 text-sm"><Edit3 className="w-4 h-4" /> Edit</button>
          <button className="btn-primary flex items-center gap-2 text-sm"><Send className="w-4 h-4" /> Publish</button>
        </div>
      </div>
      <div className="space-y-6">
        <div className="card-warm">
          <div className="flex items-center justify-between mb-4"><h2 className="text-lg font-bold text-gray-900">Blog Post</h2><span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">Published</span></div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Charming 3-Bed Home in the Heart of Old Town Scottsdale</h3>
            <p className="text-gray-600 font-body leading-relaxed mb-4">Nestled on a quiet tree-lined street in the coveted Old Town Scottsdale neighborhood, this beautifully maintained 3-bedroom, 2-bathroom home offers the perfect blend of desert charm and modern living. Listed at $475,000, this property stands out in today's competitive market.</p>
            <h4 className="text-lg font-bold text-gray-900 mb-2 mt-6">Neighborhood Highlights</h4>
            <p className="text-gray-600 font-body leading-relaxed mb-4">Old Town Scottsdale is renowned for its vibrant arts district, world-class dining, and proximity to top-rated schools including Hopi Elementary and Cocopah Middle School. The neighborhood offers easy access to the Scottsdale Greenbelt trail system.</p>
            <h4 className="text-lg font-bold text-gray-900 mb-2 mt-6">Property Features</h4>
            <ul className="text-gray-600 font-body space-y-2"><li>• Recently updated kitchen with quartz countertops</li><li>• Spacious backyard with covered patio</li><li>• Energy-efficient HVAC system (2024)</li><li>• Walking distance to Scottsdale Fashion Square</li><li>• 2-car garage with built-in storage</li></ul>
            <h4 className="text-lg font-bold text-gray-900 mb-2 mt-6">Schedule Your Private Tour</h4>
            <p className="text-gray-600 font-body leading-relaxed">This home won't last long. Contact our team today to schedule a private showing or attend our upcoming open house this weekend.</p>
          </div>
        </div>
        <div className="card-warm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Social Media Posts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-violet-50 to-coral-50 rounded-xl p-4"><p className="text-xs font-medium text-violet-600 mb-2">Instagram</p><p className="text-sm text-gray-700 font-body">NEW LISTING! Charming 3BD/2BA in Old Town Scottsdale — $475K. Renovated kitchen, desert-view backyard & steps from the best dining & trails. DM for details! #ScottsdaleRealEstate #NewListing</p></div>
            <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-xl p-4"><p className="text-xs font-medium text-blue-600 mb-2">Facebook</p><p className="text-sm text-gray-700 font-body">Just listed in Scottsdale! This beautifully updated 3-bedroom home checks all the boxes — modern kitchen, huge backyard, unbeatable location. At $475,000, priced to move. Open house this Saturday 1-4pm!</p></div>
          </div>
        </div>
        <div className="card-warm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Email Sequence</h2>
          <div className="space-y-3">
            {[{n:1,title:'New Listing Announcement',sub:'Sent immediately to buyer list',status:'Sent',color:'green'},{n:2,title:'Open House Reminder',sub:'Scheduled for Saturday 9am',status:'Scheduled',color:'blue'},{n:3,title:'Follow-Up & Market Update',sub:'Sent 3 days after open house',status:'Pending',color:'gray'}].map(e => (
              <div key={e.n} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-sm font-bold text-violet-700">{e.n}</div><div><p className="font-medium text-gray-900 text-sm">{e.title}</p><p className="text-xs text-gray-500">{e.sub}</p></div></div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full bg-${e.color}-100 text-${e.color}-700`}>{e.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}