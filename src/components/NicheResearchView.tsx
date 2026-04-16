import React from 'react';
import { Search, Radar, TrendingUp, DollarSign, Globe2, Users, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';

const data = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 35 },
  { name: 'Thu', value: 65 },
  { name: 'Fri', value: 80 },
  { name: 'Sat', value: 75 },
  { name: 'Sun', value: 95 },
];

export default function NicheResearchView() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="pt-16 pb-12 px-10 lg:px-16 bg-white border-b border-line">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl font-bold text-on-surface mb-2 tracking-tight">
            Niche Research
          </h1>
          <p className="text-on-surface-variant text-lg font-medium mb-10 max-w-2xl">
            Discover high-velocity topics and analyze competitor saturation.
          </p>

          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="text-on-surface-variant w-5 h-5" />
            </div>
            <input 
              className="w-full bg-white border border-line rounded-2xl py-5 pl-12 pr-40 text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 text-lg transition-all shadow-sm"
              placeholder="Enter seed topic..."
              type="text"
            />
            <button className="absolute inset-y-2 right-2 primary-btn rounded-xl px-8 flex items-center gap-2">
              Scan
              <Radar className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 p-10 lg:p-16 max-w-[1400px] mx-auto w-full flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Main Trend Card */}
          <div 
            className="md:col-span-2 card p-8 group transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-10">
              <div>
                <div className="text-[12px] tracking-widest text-on-surface-variant font-bold uppercase mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" /> Velocity Trend
                </div>
                <h2 className="text-2xl font-bold text-on-surface">"AI Content Tools"</h2>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-700 text-[11px] font-bold uppercase tracking-wider">Viral Trajectory</span>
              </div>
            </div>

            <div className="h-72 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                  <XAxis dataKey="name" hide />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                    itemStyle={{ color: '#111827', fontSize: '12px', fontWeight: 'bold' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Metrics column */}
          <div className="flex flex-col gap-8">
            <div 
              className="card p-8 bg-white"
            >
              <div className="text-[12px] font-bold text-on-surface-variant uppercase tracking-widest mb-6 flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> Est. CPM
              </div>
              <div className="text-5xl font-light text-on-surface mb-3 tracking-tight">$18.45</div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                <ArrowUpRight className="w-4 h-4" /> +12% vs avg
              </div>
            </div>

            <div 
              className="card p-8 bg-white"
            >
              <div className="text-[12px] font-bold text-on-surface-variant uppercase tracking-widest mb-6 flex items-center gap-2">
                <Globe2 className="w-4 h-4" /> Market Size
              </div>
              <div className="text-4xl font-light text-on-surface mb-4 tracking-tight">2.4M</div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-6">
                <div className="h-full bg-primary" style={{ width: '85%' }} />
              </div>
              <div className="mt-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant flex justify-between px-1">
                <span>Niche</span>
                <span>Mass Appeal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Competitor Analysis Table */}
        <div 
          className="card overflow-hidden bg-white mt-4"
        >
          <div className="p-8 border-b border-line flex justify-between items-center bg-slate-50">
            <h3 className="font-bold text-xl text-on-surface flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" /> Competitor Saturation
            </h3>
            <button className="text-primary text-[11px] font-bold uppercase tracking-widest hover:underline transition-all">
              View All
            </button>
          </div>
          <div className="p-4 space-y-4">
            {[
              { id: 'A', name: 'AutoTech Daily', subs: '1.2M', freq: 'High Frequency', threat: 3, views: '145K' },
              { id: 'S', name: 'Synthetica', subs: '800K', freq: 'Viral Formats', threat: 5, views: '420K' },
            ].map((comp) => (
              <div key={comp.id} className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6 items-center border border-line rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4 md:col-span-2">
                  <div className={cn(
                    "w-12 h-12 rounded-xl bg-white border border-line flex items-center justify-center font-bold text-lg shadow-sm transition-all group-hover:border-primary",
                    comp.id === 'A' ? "text-primary" : "text-emerald-600"
                  )}>
                    {comp.id}
                  </div>
                  <div>
                    <div className="font-bold text-lg text-on-surface">{comp.name}</div>
                    <div className="text-sm text-on-surface-variant font-medium">{comp.subs} Subs • {comp.freq}</div>
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">Threat Level</div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className={cn(
                        "h-1.5 w-8 rounded-full transition-all duration-300",
                        i <= comp.threat / 2 ? "bg-emerald-500" : "bg-slate-100"
                      )} />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className={cn(
                    "text-2xl font-light tracking-tight text-on-surface",
                  )}>{comp.views}</div>
                  <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Avg Views</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
