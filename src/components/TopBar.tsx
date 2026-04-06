import React from 'react';
import { Search, RefreshCw, Bell, UserCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-white/85 backdrop-blur-md flex items-center justify-between px-8 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 w-80 outline-none" 
            placeholder="Cari data operasional..." 
            type="text"
          />
        </div>
        <nav className="flex gap-4">
          <a className="font-headline text-base font-semibold text-primary border-b-2 border-primary py-1" href="#">Live Feed</a>
          <a className="font-headline text-base font-semibold text-slate-500 hover:text-primary transition-opacity py-1" href="#">Status Sistem</a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-xl text-sm font-semibold text-primary hover:bg-surface-container-highest transition-colors">
          <RefreshCw className="w-4 h-4" />
          Ganti Cabang
        </button>
        <button className="relative p-2 text-slate-500 hover:text-primary transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
          <UserCircle className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
}
