import React from 'react';
import { LayoutDashboard, Zap, Search, Settings, HelpCircle, LogOut, Star } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'niche', label: 'Niche Research', icon: Search },
    { id: 'content', label: 'Content Gen', icon: Zap },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <nav className="h-screen w-64 fixed left-0 top-0 bg-white border-r border-line shadow-sm flex flex-col py-10 z-50">
      <div className="logo px-8 mb-12 flex items-center gap-3">
        <div className="w-6 h-6 bg-on-surface rounded-md" />
        <span className="text-xl font-bold tracking-tight text-on-surface uppercase">AutoViral</span>
      </div>

      <div className="flex items-center px-8 mb-10 gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
          <img 
            src="https://picsum.photos/seed/avatar1/100/100" 
            alt="User Profile" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <div className="text-on-surface font-semibold text-sm">Zishan Ahmed</div>
          <div className="text-on-surface-variant text-[11px] font-medium uppercase tracking-wider">
             Viral Tier
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 flex flex-col gap-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "py-3 px-4 rounded-xl flex items-center gap-3 transition-all duration-200 text-sm font-medium",
                isActive 
                  ? "bg-surface text-on-surface" 
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface/50"
              )}
            >
              <Icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-on-surface-variant")} />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="px-6 mb-6">
        <button 
          className="w-full primary-btn shadow-md hover:translate-y-[-1px] active:translate-y-[0px] flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4 fill-current" />
          Boost Reach
        </button>
      </div>

      <div className="px-4 border-t border-line pt-6 flex flex-col gap-1">
        <button className="text-on-surface-variant py-3 px-4 rounded-xl flex items-center gap-3 hover:text-on-surface hover:bg-surface/50 transition-all text-sm font-medium w-full">
          <HelpCircle className="w-4 h-4" />
          Support
        </button>
        <button 
          onClick={() => onViewChange('landing')}
          className="text-red-500 py-3 px-4 rounded-xl flex items-center gap-3 hover:bg-red-50 transition-all text-sm font-medium w-full"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </nav>
  );
}
