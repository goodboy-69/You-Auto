import React from 'react';
import Sidebar from './Sidebar';
import { cn } from '../lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function Layout({ children, activeView, onViewChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-surface flex overflow-x-hidden">
      {activeView !== 'landing' && (
        <Sidebar activeView={activeView} onViewChange={onViewChange} />
      )}
      
      <main className={cn(
        "flex-1 relative z-10 flex flex-col min-h-screen",
        activeView === 'landing' ? "ml-0" : "ml-64"
      )}>
        <div className="flex-grow">
          {children}
        </div>
        
        {/* Footer */}
        {activeView !== 'landing' && (
          <footer className="w-full bg-white border-t border-line mt-auto">
            <div className="max-w-7xl mx-auto px-10 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-xl font-bold text-on-surface tracking-tight">AutoViral</div>
              <div className="text-sm text-on-surface-variant font-medium tracking-tight">© 2024 AutoViral. Clean Minimalism Design.</div>
              <div className="flex gap-8 text-sm">
                <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors font-medium">Privacy</a>
                <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors font-medium">Terms</a>
                <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors font-medium">API Docs</a>
              </div>
            </div>
          </footer>
        )}
      </main>
    </div>
  );
}
