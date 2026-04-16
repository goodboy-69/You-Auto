import React, { useState } from 'react';
import { 
  CheckCircle2, 
  RotateCcw, 
  Copy, 
  FileText, 
  Clapperboard, 
  Send, 
  Play, 
  Sparkles, 
  Type, 
  Cpu, 
  Youtube,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function ContentGenView() {
  const [activeStyle, setActiveStyle] = useState('bold');
  
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex-1 overflow-y-auto p-10 lg:p-16 scrollbar-none">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-primary font-bold text-[11px] tracking-widest uppercase mb-2">Workflow Active</h2>
              <h1 className="text-4xl font-bold tracking-tight text-on-surface">
                Generate: <span className="text-on-surface-variant">Tech Trends 2024</span>
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-wider rounded-full border border-blue-100 flex items-center gap-2">
                <Sparkles className="w-3 h-3" /> AI Assisted
              </span>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="bg-white border border-line rounded-2xl p-8 flex items-center justify-between relative overflow-hidden shadow-sm">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-slate-100 z-0" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-primary z-0 transition-all duration-1000" style={{ width: '75%' }} />
            
            {[
              { id: 'niche', label: 'Niche', icon: CheckCircle2, completed: true },
              { id: 'script', label: 'Script', icon: CheckCircle2, completed: true },
              { id: 'review', label: 'Review', icon: Clapperboard, active: true },
              { id: 'publish', label: 'Publish', icon: Send },
            ].map((step, i) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center gap-3">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                  step.completed ? "bg-blue-600 text-white shadow-lg" : 
                  step.active ? "bg-white border-2 border-primary text-primary shadow-md" :
                  "bg-white border border-line text-on-surface-variant"
                )}>
                  {step.completed ? <CheckCircle2 className="w-6 h-6" /> : 
                   step.active ? <Clapperboard className="w-6 h-6" /> : 
                   <Send className="w-6 h-6" />}
                </div>
                <span className={cn(
                  "text-[10px] font-bold uppercase tracking-widest",
                  step.active ? "text-primary" : "text-on-surface-variant"
                )}>{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Interface */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Side: Script & Options */}
          <div className="lg:col-span-7 space-y-10">
            {/* Script Box */}
            <div className="card p-8 bg-white overflow-hidden group">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-xl flex items-center gap-4">
                  <FileText className="text-primary w-6 h-6" />
                  Generated Script
                </h3>
                <div className="flex gap-2">
                  <button className="text-on-surface-variant hover:text-primary transition-colors p-2.5 hover:bg-slate-50 rounded-xl">
                    <RotateCcw className="w-5 h-5" />
                  </button>
                  <button className="text-on-surface-variant hover:text-primary transition-colors p-2.5 hover:bg-slate-50 rounded-xl">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="bg-slate-50 rounded-2xl border border-line p-6 font-medium text-on-surface-variant leading-relaxed h-[350px] overflow-y-auto scrollbar-none focus-within:border-primary/50 focus-within:bg-white transition-all">
                <p className="mb-4">Are we living in a simulation? In 2024, AI advancements are blurring the line between reality and digital constructs.</p>
                <p className="mb-4">Just last week, researchers unveiled a neural network capable of generating photorealistic environments in real-time, indistinguishable from actual footage.</p>
                <p className="mb-4">
                  <span className="bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-md font-bold mr-2 uppercase text-[10px]">Hook:</span> 
                  Notice how the reflections in this video aren't quite right? That's because none of this is real.
                </p>
                <p>If computing power continues to double, simulated universes aren't just science fiction—they're a statistical inevitability. Drop a 🧠 in the comments if you think we're already plugged in.</p>
              </div>
              <div className="flex justify-end mt-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40">112 Words • Est. 45s</span>
              </div>
            </div>

            {/* Style Selector */}
            <div className="card p-8">
              <h3 className="font-bold text-xl flex items-center gap-4 mb-8">
                <Type className="text-emerald-500 w-6 h-6" /> 
                Caption Style
              </h3>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { id: 'bold', label: 'BOLD', sub: 'Impact Style', class: 'font-black' },
                  { id: 'neon', label: 'Accent', sub: 'Tech Style', class: 'text-primary' },
                  { id: 'min', label: 'Minimal', sub: 'Aesthetic', class: 'italic font-serif' },
                ].map((style) => (
                  <button 
                    key={style.id}
                    onClick={() => setActiveStyle(style.id)}
                    className={cn(
                      "rounded-2xl p-6 flex flex-col items-center gap-2 transition-all duration-300 border shadow-sm",
                      activeStyle === style.id 
                        ? "bg-white border-primary text-primary ring-4 ring-primary/5" 
                        : "bg-slate-50 border-line text-on-surface-variant hover:border-primary/50"
                    )}
                  >
                    <div className={cn("text-xl tracking-tight uppercase", style.class)}>{style.label}</div>
                    <span className="text-[9px] font-bold uppercase tracking-widest">{style.sub}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-8 flex items-center justify-between bg-white rounded-2xl p-5 border border-line shadow-sm">
                <span className="font-bold text-[11px] text-on-surface-variant uppercase tracking-widest">Auto-Emoji Injection</span>
                <button className="w-12 h-6 bg-slate-100 rounded-full relative p-1 transition-all border border-line">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-primary rounded-full shadow-md" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Preview & Publish */}
          <div className="lg:col-span-5 space-y-10 flex flex-col">
            {/* Player */}
            <div className="card p-4 shadow-2xl flex-1 flex flex-col relative overflow-hidden min-h-[550px]">
              <div className="absolute top-8 right-8 z-20">
                <span className="bg-white/80 backdrop-blur-md text-on-surface font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full border border-line flex items-center gap-2 shadow-sm">
                  <Cpu className="w-3 h-3 text-primary" /> 60fps
                </span>
              </div>
              
              <div className="bg-slate-100 rounded-2xl flex-1 relative overflow-hidden flex items-center justify-center border border-line">
                <img 
                  src="https://picsum.photos/seed/viral1/600/1000" 
                  alt="Video Context" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Editor Overlay UI */}
                <div className="absolute inset-6 border-2 border-white/40 rounded-2xl pointer-events-none flex flex-col justify-end p-8">
                   <div className="text-center mb-12">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="font-black text-4xl uppercase text-white drop-shadow-2xl tracking-tight"
                      >
                        NONE OF THIS IS <span className="text-blue-400">REAL</span>
                      </motion.div>
                   </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute z-10 w-24 h-24 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-primary shadow-2xl border border-line group"
                >
                  <Play className="w-10 h-10 ml-2 fill-primary group-hover:scale-110 transition-transform" />
                </motion.button>
              </div>

              {/* Player Timeline */}
              <div className="mt-8 p-4 space-y-4">
                <div className="flex justify-between text-[11px] font-bold tracking-widest text-on-surface-variant uppercase">
                  <span>0:14</span>
                  <span>0:45</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full relative">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-primary rounded-full shadow-sm" />
                  <div className="absolute left-1/3 top-1/2 -track-x-1/2 -track-y-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg border border-line cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Posting Panel */}
            <div className="card p-8 shadow-xl space-y-8">
              <div className="flex items-center gap-5 p-5 bg-slate-50 rounded-2xl border border-line group cursor-pointer hover:bg-white transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white border border-line flex items-center justify-center shadow-sm text-red-600 transition-all group-hover:border-red-500">
                  <Youtube className="w-8 h-8 fill-current" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-lg text-on-surface">TechBros Daily</div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">YouTube Network</div>
                </div>
                <ChevronDown className="w-6 h-6 text-on-surface-variant group-hover:text-on-surface transition-colors" />
              </div>

              <button 
                className="w-full primary-btn py-5 flex items-center justify-center gap-4 uppercase font-bold tracking-widest text-sm shadow-xl"
              >
                 Publish to YouTube <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-center">
                <button className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all underline underline-offset-4">
                  Save to Drafts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
