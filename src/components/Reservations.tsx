import React, { useState } from 'react';
import { 
  List, 
  Calendar, 
  Plus, 
  Search, 
  CalendarDays, 
  Download, 
  SlidersHorizontal, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TableProperties
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Reservations() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const reservations = [
    { name: 'Adrian Susanto', meta: 'Regular VIP • 0812-3456-XXXX', table: 'V-04', pax: 6, time: '19:30 WIB', date: '24 Okt 2023', status: 'Confirmed', statusColor: 'bg-secondary-container text-on-secondary-container', initial: 'AS' },
    { name: 'Diana Putri', meta: 'First-time • 0857-1122-XXXX', table: 'T-12', pax: 2, time: '20:00 WIB', date: '24 Okt 2023', status: 'Pending', statusColor: 'bg-tertiary-fixed text-on-tertiary-fixed-variant', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALTrXgHgiqeDyDHmWb-mBBBTjgTi-X-fXLAL9KOVGP79cTX-_gC3-xvsxaJgykng9eqL0oo1wh-Mo68yRq7hdFl3MJq2VlPSpfZIXcaZqyhthbqyBdlN3O6BZElgxPCR-uf_xJCP9CZaFAIA3hyhH5Edk_7EnMrJMbvL0P0mi717whGRuo23jkSZO9T9iNakEp75pCzf_1esfeCk6_kTjTmVbCjox9QpfKow74-b1Kuelp7IpL7R2sXXO92BWcqINBZ2imG51GJxk' },
    { name: 'Reza Haris', meta: 'Canceled by guest', table: '-', pax: 4, time: '18:45 WIB', date: '24 Okt 2023', status: 'Cancelled', statusColor: 'bg-error-container text-on-error-container', initial: 'RH', canceled: true },
    { name: 'Budi Kusuma', meta: 'Regular • 0819-2233-XXXX', table: 'T-08', pax: 8, time: '21:15 WIB', date: '24 Okt 2023', status: 'Confirmed', statusColor: 'bg-secondary-container text-on-secondary-container', initial: 'BK' },
  ];

  const filteredReservations = reservations.filter(res => 
    res.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    res.meta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface mb-2">Manajemen Reservasi</h1>
          <p className="text-on-surface-variant max-w-md">Kelola seluruh pemesanan meja dan alur masuk tamu dengan presisi kuratorial.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex bg-surface-container-low p-1 rounded-xl">
            <button className="px-4 py-2 bg-white shadow-sm rounded-lg text-primary font-bold text-sm flex items-center gap-2 transition-all">
              <List className="w-4 h-4" /> Daftar
            </button>
            <button className="px-4 py-2 text-on-surface-variant font-medium text-sm flex items-center gap-2 hover:bg-surface-variant transition-all rounded-lg">
              <Calendar className="w-4 h-4" /> Kalender
            </button>
          </div>
          <button className="primary-gradient px-6 py-2 rounded-xl text-white font-bold shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
            <Plus className="w-5 h-5" /> Buka Kasir Baru
          </button>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/70">Cabang</label>
            <select className="bg-transparent border-none font-headline font-bold text-primary focus:ring-0 p-0 text-sm outline-none">
              <option>Central Jakarta - Thamrin</option>
            </select>
          </div>
          <div className="w-px h-8 bg-outline-variant/30 hidden md:block"></div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/70">Tanggal</label>
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-primary" />
              <input className="bg-transparent border-none font-headline font-bold text-primary focus:ring-0 p-0 text-sm outline-none" type="date" defaultValue="2023-10-24" />
            </div>
          </div>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Cari nama tamu atau nomor telepon..." 
            className="w-full bg-surface-container-highest rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-2 w-full md:w-auto justify-end">
          <button className="px-4 py-2 bg-surface-container-highest rounded-lg text-[10px] font-bold text-on-surface-variant flex items-center gap-2 uppercase tracking-wider">
            <SlidersHorizontal className="w-3 h-3" /> Filter Lanjutan
          </button>
          <button className="px-4 py-2 bg-secondary-container rounded-lg text-[10px] font-bold text-primary flex items-center gap-2 uppercase tracking-wider">
            <Download className="w-3 h-3" /> Ekspor Laporan
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant/80">Nama Tamu</th>
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant/80 text-center">Meja</th>
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant/80 text-center">PAX</th>
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant/80">Waktu</th>
                  <th className="px-6 py-4 text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant/80">Status</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-transparent">
                {filteredReservations.map((res, i) => (
                  <tr key={i} className={cn("group hover:bg-surface-container-high transition-all cursor-pointer", res.canceled && "opacity-60")}>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        {res.img ? (
                          <img src={res.img} alt={res.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                        ) : (
                          <div className="w-10 h-10 rounded-full primary-gradient flex items-center justify-center text-white font-bold text-xs">{res.initial}</div>
                        )}
                        <div>
                          <p className={cn("font-headline font-bold text-on-surface", res.canceled && "line-through")}>{res.name}</p>
                          <p className="text-[10px] text-on-surface-variant font-medium">{res.meta}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className={cn("px-3 py-1 rounded-lg text-[10px] font-extrabold", res.table === '-' ? "bg-surface-variant text-on-surface-variant" : "bg-secondary-fixed text-on-secondary-fixed-variant")}>
                        {res.table}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center font-bold text-sm">{res.pax}</td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-on-surface">{res.time}</p>
                      <p className="text-[10px] text-on-surface-variant">{res.date}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 w-fit uppercase tracking-tight", res.statusColor)}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current"></span> {res.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-variant text-on-surface-variant transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-4 bg-surface-container-lowest flex items-center justify-center gap-2 border-t border-slate-50">
              <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface-container-high text-on-surface-variant transition-all"><ChevronLeft className="w-4 h-4" /></button>
              <button className="w-8 h-8 rounded-lg bg-primary text-white font-bold text-xs shadow-md">1</button>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant font-bold text-xs">2</button>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant font-bold text-xs">3</button>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface-container-high text-on-surface-variant transition-all"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-primary">
              <p className="text-on-surface-variant text-[10px] font-extrabold uppercase tracking-widest mb-1">Total Tamu</p>
              <h3 className="text-3xl font-headline font-extrabold text-primary">124</h3>
              <p className="text-[10px] text-emerald-600 font-bold mt-2 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +12% vs Kemarin</p>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-on-secondary-container">
              <p className="text-on-surface-variant text-[10px] font-extrabold uppercase tracking-widest mb-1">Meja Tersedia</p>
              <h3 className="text-3xl font-headline font-extrabold text-primary">14</h3>
              <p className="text-[10px] text-on-surface-variant font-medium mt-2">Dari 32 Total Meja</p>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline font-extrabold text-lg text-primary">Sesi Terpadu</h3>
              <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded-full animate-pulse">LIVE</span>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Sesi Makan Malam (A)', time: '18:00 - 20:00', progress: 85, color: 'primary-gradient' },
                { title: 'Sesi Makan Malam (B)', time: '20:30 - 22:30', progress: 42, color: 'bg-on-secondary-container' }
              ].map((session, i) => (
                <div key={i} className="p-4 bg-surface-container-low rounded-xl relative overflow-hidden">
                  <div className={cn("absolute left-0 top-0 bottom-0 w-1", i === 0 ? "primary-gradient" : "bg-on-secondary-container/30")}></div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tight">{session.title}</span>
                    <span className="text-xs font-bold text-primary">{session.time}</span>
                  </div>
                  <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
                    <div className={cn("h-full", session.color)} style={{ width: `${session.progress}%` }}></div>
                  </div>
                  <p className="text-[10px] font-bold text-on-surface-variant mt-2 text-right">{session.progress}% Kapasitas Terisi</p>
                </div>
              ))}
            </div>
          </div>

          <div className="primary-gradient text-white rounded-xl p-6 relative overflow-hidden shadow-xl shadow-primary/20 group">
            <div className="relative z-10">
              <h4 className="font-headline font-bold text-xl mb-2">Butuh Meja Cepat?</h4>
              <p className="text-blue-200 text-xs mb-4">Akses instan ke denah meja untuk tamu yang datang langsung.</p>
              <button className="w-full bg-white text-primary font-bold text-sm py-3 rounded-lg hover:bg-slate-50 transition-all active:scale-[0.98]">Lihat Denah Interaktif</button>
            </div>
            <TableProperties className="absolute -right-8 -bottom-8 w-40 h-40 text-white/10 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
