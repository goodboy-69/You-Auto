import React from 'react';
import { 
  Zap, 
  ArrowRight, 
  Sparkles, 
  Code, 
  Globe, 
  Check, 
  TrendingUp,
  Play,
  Youtube,
  ChevronDown,
  Send,
  Clapperboard,
  FileText,
  RotateCcw,
  Copy,
  Type,
  Cpu,
  MoreVertical,
  Eye,
  Heart,
  Search,
  Radar,
  CheckCircle2,
  Users,
  DollarSign,
  Globe2,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface LandingProps {
  onGetStarted: () => void;
}

export default function LandingPageView({ onGetStarted }: LandingProps) {
  return (
    <div className="bg-[#F3F4F6] min-h-screen font-sans selection:bg-primary/20">
      {/* Local Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="text-2xl font-bold tracking-tight text-on-surface">AutoViral</div>
            <div className="hidden md:flex gap-8">
              {['Features', 'Marketplace', 'Case Studies', 'Pricing'].map((item) => (
                <a key={item} href="#" className="text-[12px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors">{item}</a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[12px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface px-4 py-2">Login</button>
            <button 
              onClick={onGetStarted}
              className="primary-btn px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-48 pb-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-block bg-white border border-line px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary mb-12 shadow-sm"
          >
             🚀 The Future of Content AI
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tight text-on-surface mb-10 leading-[0.95]"
          >
            Automate your <br />
            <span className="text-primary italic">YouTube</span> Domination.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-on-surface-variant font-medium mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            Real-time niche research, AI script generation, and single-click multi-channel distribution.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button 
              onClick={onGetStarted}
              className="primary-btn px-10 py-5 rounded-2xl text-lg font-bold shadow-xl"
            >
              Deploy First Workflow
            </button>
            <button className="bg-white border border-line text-on-surface px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all shadow-sm">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-primary font-bold text-[11px] uppercase tracking-[0.2em] mb-4">Core Technology</h2>
            <div className="text-4xl font-bold text-on-surface tracking-tight">System Capabilities</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Zap, title: 'Velocity Analysis', desc: 'Identify topics trending at 10x market baseline before they go mainstream.' },
              { icon: Code, title: 'Neural Scripts', desc: 'Generative AI trained on top-performing viral video psychological patterns.' },
              { icon: Globe, title: 'Auto Distribution', desc: 'Sync your content across YouTube, TikTok, and Reels with optimized metadata.' },
            ].map((f, i) => (
              <div 
                key={f.title}
                className="card p-10 bg-[#F3F4F6] border-transparent hover:border-line transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <f.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">{f.title}</h3>
                <p className="text-on-surface-variant font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Header */}
      <section className="py-32 px-6 lg:px-12 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
             <div className="max-w-2xl">
                <h2 className="text-6xl font-bold text-on-surface tracking-tight leading-none mb-8">Ready to Scale?</h2>
                <p className="text-xl text-on-surface-variant font-medium">Simple, high-impact pricing for serious content teams and automation experts.</p>
             </div>
             <div className="bg-white p-2 rounded-2xl border border-line flex gap-2">
                <button className="px-6 py-2 bg-primary text-white rounded-xl text-xs font-bold uppercase tracking-widest">Monthly</button>
                <button className="px-6 py-2 text-on-surface-variant font-bold text-xs uppercase tracking-widest">Yearly -20%</button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Starter', price: '$49', features: ['3 Channels', 'Velocity Scan', 'Daily Scripting'] },
              { title: 'Agency', price: '$149', features: ['15 Channels', 'Priority Neural', 'Custom Voicework'], popular: true },
              { title: 'Enterprise', price: 'Custom', features: ['Unlimited', 'Full API Access', 'Team Seats'] },
            ].map((plan) => (
              <div 
                key={plan.title}
                className={cn(
                  "card p-10 flex flex-col items-center text-center transition-all duration-500",
                  plan.popular ? "bg-white border-primary border-2 scale-105 shadow-2xl z-10" : "bg-white border-line shadow-sm"
                )}
              >
                {plan.popular && <span className="absolute -top-4 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">Most Popular</span>}
                <div className="text-[12px] font-bold text-on-surface-variant uppercase tracking-widest mb-8">{plan.title}</div>
                <div className="text-6xl font-black text-on-surface mb-10 tracking-tighter">{plan.price}</div>
                <div className="flex-1 w-full space-y-4 mb-12">
                  {plan.features.map(f => (
                    <div key={f} className="text-sm font-bold text-on-surface-variant border-b border-slate-50 pb-2">{f}</div>
                  ))}
                </div>
                <button className={cn(
                  "w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all",
                  plan.popular ? "primary-btn shadow-lg" : "bg-slate-100 text-on-surface hover:bg-slate-200"
                )}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-6 lg:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto py-32 rounded-[48px] bg-on-surface text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mr-48 -mt-48 transition-all group-hover:bg-primary/30" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 leading-none">The era of manual content <br /> is officially over.</h2>
            <button 
              onClick={onGetStarted}
              className="bg-white text-on-surface px-12 py-6 rounded-2xl text-xl font-bold hover:scale-105 transition-transform shadow-2xl"
            >
              Start Automated Growth
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
