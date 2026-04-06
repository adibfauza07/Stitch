import React from 'react';
import { TrendingUp, Calendar, History, ArrowRight, Star, AlertTriangle, ListFilter } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Dashboard() {
  const kpiData = [
    { label: "TODAY'S SALES", value: "Rp 14.2M", trend: "+12.4% vs yesterday", icon: TrendingUp, color: "text-green-600" },
    { label: "THIS MONTH", value: "Rp 482.5M", trend: "+5.2% vs target", icon: Calendar, color: "text-green-600" },
    { label: "LAST MONTH", value: "Rp 510.1M", trend: "Stabilized growth period", icon: History, color: "text-on-surface-variant" },
  ];

  const reservations = [
    { id: 'AK', name: 'Arya Kusuma', pax: '4 Orang', time: '19:00 WIB', table: 'VIP-02', status: 'Confirmed', statusColor: 'bg-secondary-container text-on-secondary-container' },
    { id: 'SN', name: 'Siska Natalia', pax: '2 Orang', time: '19:30 WIB', table: 'T-08', status: 'Arrived', statusColor: 'bg-tertiary-fixed text-on-tertiary-fixed-variant' },
    { id: 'RD', name: 'Rian Dwi', pax: '6 Orang', time: '20:00 WIB', table: 'VIP-01', status: 'Pending', statusColor: 'bg-surface-container-high text-on-surface-variant' },
  ];

  const stockAlerts = [
    { name: 'Daging Wagyu A5', status: 'Kritis', progress: 12, current: '2.4 kg', min: '20 kg', color: 'bg-error' },
    { name: 'Salmon Fillet Premium', status: 'Rendah', progress: 28, current: '8.1 kg', min: '30 kg', color: 'bg-tertiary' },
    { name: 'Truffle Oil 250ml', status: 'Kritis', progress: 5, current: '1 Botol', min: '12 Botol', color: 'bg-error' },
    { name: 'Beras Japonica', status: 'Rendah', progress: 35, current: '75 kg', min: '200 kg', color: 'bg-tertiary' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      {/* Header Section */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-primary">Dashboard Utama</h1>
          <p className="text-on-surface-variant mt-1">
            Status operasional hari ini di <span className="font-bold text-primary">Cabang Jakarta Pusat</span>
          </p>
        </div>
        <div className="flex gap-2 p-1 bg-surface-container rounded-xl">
          <button className="px-4 py-2 bg-surface-container-lowest shadow-sm rounded-lg text-sm font-bold text-primary">Hari Ini</button>
          <button className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:text-primary">7 Hari</button>
          <button className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:text-primary">30 Hari</button>
        </div>
      </div>

      {/* Sales Summary Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpiData.map((kpi, index) => (
          <div key={index} className="bg-surface-container-low rounded-xl p-6 flex flex-col justify-between group hover:bg-surface-container-high transition-all duration-300">
            <div className="flex justify-between items-start">
              <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">{kpi.label}</span>
              <div className="p-2 bg-secondary-container rounded-lg">
                <kpi.icon className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-4xl font-extrabold text-primary">{kpi.value}</h3>
              <div className={cn("flex items-center gap-1 mt-2 font-bold text-xs", kpi.color)}>
                {kpi.trend.includes('+') && <TrendingUp className="w-3 h-3" />}
                <span>{kpi.trend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Sales Summary Detailed Widget */}
      <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/10 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-secondary" />
            Ringkasan Penjualan Harian
          </h2>
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest bg-surface-container-high px-3 py-1 rounded-full">
            Real-time Update
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Total Pendapatan</p>
            <p className="text-3xl font-extrabold text-primary">Rp 14.250.000</p>
            <p className="text-xs text-green-600 font-bold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12.4% dari kemarin
            </p>
          </div>
          <div className="space-y-1 md:border-x border-outline-variant/20 md:px-8">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Jumlah Transaksi</p>
            <p className="text-3xl font-extrabold text-primary">128 <span className="text-lg font-medium text-on-surface-variant">Order</span></p>
            <p className="text-xs text-on-surface-variant font-medium">Rata-rata Rp 111.328 / order</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Item Terlaris</p>
            <p className="text-xl font-extrabold text-primary truncate">Double Espresso Macchiato</p>
            <p className="text-xs text-on-surface-variant font-medium">42 porsi terjual hari ini</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left: Reservations & Insights */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <section className="bg-surface-container-low rounded-xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-primary">Reservasi Mendatang</h2>
              <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-12 px-4 py-3 bg-surface-container-high rounded-lg font-bold text-[10px] text-on-secondary-container uppercase tracking-wider">
                <div className="col-span-4">Pelanggan</div>
                <div className="col-span-3">Waktu</div>
                <div className="col-span-2 text-center">Meja</div>
                <div className="col-span-3 text-right">Status</div>
              </div>
              {reservations.map((res, i) => (
                <div key={i} className="grid grid-cols-12 px-4 py-5 bg-surface-container-lowest rounded-lg items-center group hover:bg-white transition-colors shadow-sm">
                  <div className="col-span-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-primary">
                      {res.id}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-on-surface">{res.name}</p>
                      <p className="text-xs text-on-surface-variant">{res.pax}</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-sm font-medium">{res.time}</div>
                  <div className="col-span-2 text-center text-sm font-bold text-primary">{res.table}</div>
                  <div className="col-span-3 flex justify-end">
                    <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase", res.statusColor)}>
                      {res.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-2 gap-6">
            <div className="primary-gradient text-white rounded-xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold">Performance Insights</h3>
                <p className="text-blue-200 mt-2 text-sm leading-relaxed">
                  Penjualan jam makan siang naik 15% dibanding rata-rata minggu lalu. Pertimbangkan untuk menambah staff pada shift tersebut.
                </p>
                <button className="mt-6 px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  Detail Analisis
                </button>
              </div>
              <TrendingUp className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 rotate-12" />
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col justify-center border border-outline-variant/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Customer Rating</h4>
                  <div className="flex items-center gap-1 mt-1 text-tertiary">
                    <span className="font-bold">4.8</span>
                    <div className="flex">
                      {[1, 2, 3, 4].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                      <Star className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Stock Alerts */}
        <div className="col-span-12 lg:col-span-4">
          <section className="bg-surface-container-low rounded-xl p-6 h-full">
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-error fill-current" />
              <h2 className="text-lg font-bold text-primary">Peringatan Stok</h2>
            </div>
            <div className="space-y-4">
              {stockAlerts.map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm group hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-sm text-primary">{item.name}</h4>
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-tight",
                      item.status === 'Kritis' ? "bg-error-container text-on-error-container" : "bg-tertiary-fixed text-on-tertiary-fixed-variant"
                    )}>
                      {item.status}
                    </span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-1.5 mb-2">
                    <div className={cn("h-full rounded-full", item.color)} style={{ width: `${item.progress}%` }}></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">
                    <span>Sisa: {item.current}</span>
                    <span>Min: {item.min}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-4 bg-surface-container-highest text-primary font-bold text-sm rounded-xl hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
              <ListFilter className="w-4 h-4" />
              Buka Manajemen Stok
            </button>
          </section>
        </div>
      </div>

      {/* Footer / System Health */}
      <footer className="flex items-center justify-between px-6 py-4 bg-surface-container-low rounded-xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">System Operational</span>
          </div>
          <div className="h-4 w-[1px] bg-outline-variant/30"></div>
          <span className="text-[10px] text-on-surface-variant">Last backup: 12 minutes ago</span>
        </div>
        <p className="text-[10px] font-medium text-outline">The Executive Tactician © 2024. Advanced Decision Support Engine.</p>
      </footer>
    </motion.div>
  );
}
