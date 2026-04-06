import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  CalendarDays, 
  BarChart3, 
  Store, 
  PlusCircle, 
  Settings, 
  HelpCircle,
  LogOut
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

type View = 'dashboard' | 'pos' | 'inventory' | 'reservations';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'pos', label: 'Kasir POS', icon: ShoppingCart },
    { id: 'inventory', label: 'Inventori', icon: Package },
    { id: 'reservations', label: 'Reservasi', icon: CalendarDays },
    { id: 'reports', label: 'Laporan', icon: BarChart3 },
    { id: 'branches', label: 'Cabang', icon: Store },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-slate-100 flex flex-col py-6 px-4 gap-2 z-50">
      <div className="text-xl font-bold tracking-tighter text-primary mb-8 px-2 font-headline">
        Executive Tactician
      </div>

      <div className="mb-8 px-2 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
          <img 
            alt="User Profile" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIGhzNjWnlcAQtjfld1NC7LqGlkxOfwS_vmUijgMiYFG1qVUdFH5MoB4wdvOgPvapLh-R2UJ4Mh0i97MdfyVwe_TVGarr07Upbvg9LYMfPY-E17_h7Qfi7a0vSVh1DjjS7M7PlXW1j7LnvhYJ8VNwyJRamW4pegqhzJWdmhBzZTlWsfo33v4EkLXJWkeSMVNREsE1FekrOs8r0eO1t4evnXY6Axg2D7iL1lPaNBQXFOK47v-syh_Ri6ZHbabUELXauWSjfli-HOhQ"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <p className="text-sm font-bold text-primary leading-none">Admin Utama</p>
          <p className="text-[10px] text-on-surface-variant font-medium">Executive Tactician</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => item.id !== 'reports' && item.id !== 'branches' && onViewChange(item.id as View)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 rounded-lg font-headline text-sm tracking-tight",
              currentView === item.id 
                ? "bg-white text-primary font-bold shadow-sm translate-x-1" 
                : "text-slate-500 hover:text-primary hover:bg-slate-200/50"
            )}
          >
            <item.icon className={cn("w-5 h-5", currentView === item.id && "fill-current")} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto space-y-1">
        <button className="w-full mb-4 py-3 px-4 primary-gradient text-white font-bold rounded-lg text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-transform active:scale-95">
          <PlusCircle className="w-5 h-5" />
          Buka Kasir Baru
        </button>
        
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-primary transition-colors font-headline text-sm tracking-tight">
          <Settings className="w-5 h-5" />
          <span>Pengaturan</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-primary transition-colors font-headline text-sm tracking-tight">
          <HelpCircle className="w-5 h-5" />
          <span>Bantuan</span>
        </button>
      </div>
    </aside>
  );
}
