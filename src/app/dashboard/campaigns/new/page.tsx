"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, MapPin, Sparkles, FileText, Smartphone, Mail } from 'lucide-react'
import Link from 'next/link'

const campaignTypes = [
  { id: 'blog', label: 'Blog Post', description: 'SEO-optimized property listing article', icon: FileText, color: 'border-violet-300 bg-violet-50' },
  { id: 'social', label: 'Social Campaign', description: 'Multi-platform social media posts', icon: Smartphone, color: 'border-coral-300 bg-coral-50' },
  { id: 'email', label: 'Email Sequence', description: 'Automated drip email campaign', icon: Mail, color: 'border-honey-300 bg-honey-50' },
]

const propertyTypes = ['Single Family', 'Condo/Townhouse', 'Multi-Family', 'Land/Lots', 'Commercial']

export default function NewCampaignPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ type: '', address: '', city: '', state: 'AZ', propertyType: '', bedrooms: '', bathrooms: '', price: '', description: '' })
  const [generating, setGenerating] = useState(false)

  const handleGenerate = async () => {
    setGenerating(true)
    await new Promise(r => setTimeout(r, 2000))
    setGenerating(false)
    router.push('/dashboard/campaigns/1')
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Link href="/dashboard/campaigns" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-violet-600 mb-6"><ArrowLeft className="w-4 h-4" /> Back to Campaigns</Link>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">New Campaign</h1>
      <p className="text-gray-500 font-body mb-8">Create AI-powered marketing content for your listing</p>

      {step === 1 && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Choose Campaign Type</h2>
          <div className="grid gap-4">
            {campaignTypes.map((type) => {
              const Icon = type.icon
              return (
                <button key={type.id} onClick={() => { setForm({ ...form, type: type.id }); setStep(2) }} className={`p-6 rounded-2xl border-2 text-left transition-all duration-200 hover:shadow-md ${form.type === type.id ? type.color : 'border-gray-200 hover:border-violet-200'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center"><Icon className="w-6 h-6 text-violet-600" /></div>
                    <div><h3 className="font-bold text-gray-900">{type.label}</h3><p className="text-sm text-gray-500 font-body">{type.description}</p></div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Property Details</h2>
          <div className="card-warm space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Property Address</label>
              <div className="relative"><MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="input-warm pl-10" placeholder="123 Main Street" /></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">City</label><input type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="input-warm" placeholder="Scottsdale" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">State</label><select value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} className="input-warm"><option value="AZ">Arizona</option><option value="CA">California</option></select></div>
            </div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Property Type</label><select value={form.propertyType} onChange={(e) => setForm({ ...form, propertyType: e.target.value })} className="input-warm"><option value="">Select type...</option>{propertyTypes.map(t => <option key={t} value={t}>{t}</option>)}</select></div>
            <div className="grid grid-cols-3 gap-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Bedrooms</label><input type="number" value={form.bedrooms} onChange={(e) => setForm({ ...form, bedrooms: e.target.value })} className="input-warm" placeholder="3" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Bathrooms</label><input type="number" value={form.bathrooms} onChange={(e) => setForm({ ...form, bathrooms: e.target.value })} className="input-warm" placeholder="2" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1.5">List Price</label><input type="text" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="input-warm" placeholder="$475,000" /></div>
            </div>
            <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Details</label><textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="input-warm min-h-[100px]" placeholder="Key features: renovated kitchen, pool, near schools..." /></div>
            <div className="flex gap-4 pt-2"><button onClick={() => setStep(1)} className="btn-outline">Back</button><button onClick={() => setStep(3)} className="btn-primary flex-1">Continue</button></div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Generate Content</h2>
          <div className="card-warm">
            <div className="bg-violet-50 rounded-xl p-4 mb-6">
              <h3 className="font-bold text-gray-900 mb-2">Campaign Summary</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Type:</span> <span className="font-medium capitalize">{form.type === 'blog' ? 'Blog Post' : form.type === 'social' ? 'Social Campaign' : 'Email Sequence'}</span></div>
                <div><span className="text-gray-500">Address:</span> <span className="font-medium">{form.address || 'Not specified'}</span></div>
                <div><span className="text-gray-500">City:</span> <span className="font-medium">{form.city || 'Not specified'}</span></div>
                <div><span className="text-gray-500">Price:</span> <span className="font-medium">{form.price || 'Not specified'}</span></div>
              </div>
            </div>
            <div className="bg-honey-50 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-honey-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">AI Will Generate</h4>
                  <ul className="text-sm text-gray-600 font-body mt-1 space-y-1"><li>• Property-focused headline and intro</li><li>• Neighborhood context and local data</li><li>• Feature highlights with compliance copy</li><li>• SEO keywords for {form.city || 'your area'}</li><li>• Call-to-action for scheduling tours</li></ul>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setStep(2)} className="btn-outline">Back</button>
              <button onClick={handleGenerate} disabled={generating} className="btn-primary flex-1 flex items-center justify-center gap-2">
                {generating ? (<><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Generating...</>) : (<><Sparkles className="w-4 h-4" /> Generate with AI</>) }
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}