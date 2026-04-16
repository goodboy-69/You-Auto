import React from 'react';
import { Video, TrendingUp, Users, MoreVertical, Play, Heart, Eye, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const miniChartData = [
  { v: 10 }, { v: 25 }, { v: 15 }, { v: 40 }, { v: 30 }, { v: 50 }, { v: 45 }
];

export default function DashboardView() {
  return (
    <div className="p-10 lg:p-16 max-w-[1400px] mx-auto flex flex-col gap-12">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2 text-on-surface">
            Good morning, Zishan
          </h1>
          <p className="text-on-surface-variant text-lg font-medium">
            You have 2 workflows active today.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white border border-line px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface">System Online</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
             <img 
               src="https://picsum.photos/seed/user1/100/100" 
               alt="User Avatar" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </div>
        </div>
      </header>

      {/* Top Metrics Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Videos Posted', value: '1,248', trend: '↑ 12%', icon: Video, color: 'primary' },
          { label: 'Engagement Rate', value: '8.4%', trend: '↑ 2.1%', icon: TrendingUp, color: 'secondary' },
          { label: 'Subscriber Growth', value: '45.2k', trend: 'Viral', icon: Users, color: 'tertiary' },
        ].map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div 
              key={metric.label}
              className="card p-8 group transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-[12px] font-bold text-on-surface-variant uppercase tracking-widest">{metric.label}</h3>
                <Icon className={cn("w-5 h-5", `text-${metric.color}`)} />
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-light tracking-tight text-on-surface">{metric.value}</span>
                <span className={cn(
                  "text-[12px] font-bold px-2 py-1 rounded-md",
                  metric.color === 'primary' ? "text-primary bg-primary/10" : metric.color === 'secondary' ? "text-secondary bg-secondary/10" : "text-tertiary bg-tertiary/10"
                )}>{metric.trend}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-on-surface">Active Workflows</h2>
            <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1 group">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {[
            { tag: 'Rendering', title: 'Tech Gadget Review - Series A', desc: 'Generating voiceover and assembling clips.', progress: 78, color: 'primary' },
            { tag: 'Researching', title: 'Finance Hacks - Shorts', desc: 'Scraping trending topics and writing scripts.', progress: 34, color: 'secondary' },
          ].map((wf, i) => (
            <div 
              key={wf.title}
              className="card p-8 group hover:border-primary/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className={cn("status-pill", 
                      wf.color === 'primary' ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"
                    )}>{wf.tag}</span>
                    <h3 className="text-xl font-bold text-on-surface">{wf.title}</h3>
                  </div>
                  <p className="text-on-surface-variant font-medium">{wf.desc}</p>
                </div>
                <button className="p-2 rounded-full hover:bg-surface transition-colors text-on-surface-variant hover:text-on-surface">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">
                  <span>Progress</span>
                  <span className="text-on-surface">{wf.progress}%</span>
                </div>
                <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${wf.progress}%` }}
                    transition={{ delay: 0.1, duration: 1 }}
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      wf.color === 'primary' ? "bg-primary" : "bg-secondary"
                    )} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Deployments */}
        <div className="card p-8 flex flex-col h-full bg-white">
          <h2 className="text-xl font-bold tracking-tight text-on-surface mb-8">Recent Deployments</h2>
          <div className="flex-1 space-y-6">
            {[
              { time: '0:59', title: 'Top 5 Hidden AI Tools for Productivity', views: '12.4k', likes: '1.2k', img: 'ai1' },
              { time: '1:15', title: 'How to start coding in 2024 (Beginner)', views: '8.9k', likes: '850', img: 'code1' },
              { time: '0:45', title: 'Setup my minimal desk with me', views: '45.1k', likes: '4.3k', img: 'desk1' },
            ].map((video, i) => (
              <div key={video.title} className="flex gap-4 group cursor-pointer">
                <div className="w-20 h-20 rounded-2xl overflow-hidden relative flex-shrink-0 border border-line">
                  <img 
                    src={`https://picsum.photos/seed/${video.img}/200/200`} 
                    alt="Video Thumbnail" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/80 px-1 text-[8px] rounded text-white font-bold tracking-widest">{video.time}</div>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1">
                  <h4 className="font-bold text-sm text-on-surface line-clamp-2 leading-tight group-hover:text-primary transition-colors">{video.title}</h4>
                  <div className="flex items-center gap-3 text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {video.views}</span>
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {video.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 secondary-btn text-xs uppercase tracking-widest font-bold">
            Load More Logs
          </button>
        </div>
      </div>
    </div>
  );
}

import { cn } from '../lib/utils';
