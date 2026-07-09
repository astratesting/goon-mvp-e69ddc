"use client"

import { useState } from 'react'
import { User, Building2, Bell, Shield, Key } from 'lucide-react'

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'brokerage', label: 'Brokerage', icon: Building2 },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'compliance', label: 'Compliance', icon: Shield },
  { id: 'api', label: 'API Keys', icon: Key },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-500 font-body">Configure your account and platform preferences</p>
      </div>

      <div className="flex gap-8">
        {/* Tabs */}
        <div className="w-48 flex-shrink-0">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === tab.id ? 'bg-violet-100 text-violet-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'profile' && (
            <div className="card-warm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Profile Settings</h2>
              <div className="space-y-4 max-w-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input type="text" defaultValue="Jane Smith" className="input-warm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                  <input type="email" defaultValue="jane@brokerage.com" className="input-warm" disabled />
                  <p className="text-xs text-gray-400 mt-1">Contact support to change your email</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Role</label>
                  <input type="text" defaultValue="Marketing Director" className="input-warm" />
                </div>
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>
          )}

          {activeTab === 'brokerage' && (
            <div className="card-warm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Brokerage Settings</h2>
              <div className="space-y-4 max-w-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Brokerage Name</label>
                  <input type="text" defaultValue="Sunrise Realty Group" className="input-warm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Office Address</label>
                  <input type="text" defaultValue="123 Main St, Scottsdale, AZ 85251" className="input-warm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">License Number</label>
                    <input type="text" defaultValue="AZ-12345678" className="input-warm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Market</label>
                    <select defaultValue="AZ" className="input-warm">
                      <option value="AZ">Arizona</option>
                      <option value="CA">California</option>
                    </select>
                  </div>
                </div>
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="card-warm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Notification Preferences</h2>
              <div className="space-y-4 max-w-lg">
                {[
                  { label: 'Campaign published', description: 'When AI finishes generating and publishes content', checked: true },
                  { label: 'New client onboarded', description: 'When a new brokerage completes signup', checked: true },
                  { label: 'Weekly performance report', description: 'Summary of impressions, engagement, and content metrics', checked: true },
                  { label: 'Compliance alerts', description: 'When content may violate real estate advertising rules', checked: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={item.checked} className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600" />
                    </label>
                  </div>
                ))}
                <button className="btn-primary">Save Preferences</button>
              </div>
            </div>
          )}

          {activeTab === 'compliance' && (
            <div className="card-warm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Compliance Settings</h2>
              <div className="space-y-4 max-w-lg">
                <div className="bg-honey-50 rounded-xl p-4 mb-4">
                  <p className="text-sm text-honey-700 font-medium">Configure compliance rules to ensure all AI-generated content meets real estate advertising regulations.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Fair Housing Disclaimer</label>
                  <textarea defaultValue="Equal Housing Opportunity. All information deemed reliable but not guaranteed." className="input-warm min-h-[80px]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">MLS Attribution</label>
                  <input type="text" defaultValue="Information provided is for consumer's personal, non-commercial use." className="input-warm" />
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Auto-add disclaimers</p>
                    <p className="text-xs text-gray-500">Automatically append compliance text to all generated content</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:ring-2 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-violet-600" />
                  </label>
                </div>
                <button className="btn-primary">Save Compliance Rules</button>
              </div>
            </div>
          )}

          {activeTab === 'api' && (
            <div className="card-warm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">API Keys</h2>
              <div className="space-y-4 max-w-lg">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900 text-sm">Supabase Project</p>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">Connected</span>
                  </div>
                  <p className="text-xs text-gray-500 font-mono">Project URL configured via environment variables</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900 text-sm">AI Content Engine</p>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-honey-100 text-honey-700">Mock Mode</span>
                  </div>
                  <p className="text-xs text-gray-500">Using mock content generation. Connect OpenAI or Anthropic for real AI content.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-gray-900 text-sm">Zapier Integration</p>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">Not Connected</span>
                  </div>
                  <p className="text-xs text-gray-500">Connect to CRM tools like Dotloop, TransactionDesk, or Salesforce.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}