import React from 'react';
import { motion } from 'motion/react';
import { Download, Filter, TrendingUp, TrendingDown, DollarSign, Users, ShoppingBag } from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { cn } from '@/src/lib/utils';

const revenueData = [
  { name: 'Sen', revenue: 12.5, target: 10 },
  { name: 'Sel', revenue: 14.2, target: 10 },
  { name: 'Rab', revenue: 11.8, target: 10 },
  { name: 'Kam', revenue: 16.5, target: 12 },
  { name: 'Jum', revenue: 22.4, target: 15 },
  { name: 'Sab', revenue: 28.9, target: 20 },
  { name: 'Min', revenue: 25.2, target: 20 },
];

const topProducts = [
  { name: 'Double Espresso Macchiato', category: 'Coffee', sales: 428, revenue: 'Rp 16.264.000', trend: '+12%' },
  { name: 'Avocado Toast Supreme', category: 'Brunch', sales: 312, revenue: 'Rp 20.280.000', trend: '+8%' },
  { name: 'Butter Croissant', category: 'Pastry', sales: 285, revenue: 'Rp 7.980.000', trend: '-2%' },
  { name: 'Signature Cold Brew', category: 'Coffee', sales: 245, revenue: 'Rp 8.575.000', trend: '+15%' },
];

export default function Reports() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-extrabold font-headline tracking-tight text-primary mb-2">Laporan & Analitik</h1>
          <p className="text-on-surface-variant">Tinjauan komprehensif performa bisnis dan tren penjualan.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-surface-container-high rounded-xl text-sm font-bold text-on-surface-variant flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="primary-gradient px-6 py-2 rounded-xl text-white font-bold shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
            <Download className="w-4 h-4" /> Ekspor PDF
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-secondary-container rounded-xl text-primary">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
              <TrendingUp className="w-3 h-3" /> +18.2%
            </span>
          </div>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Total Pendapatan (7 Hari)</p>
          <h3 className="text-3xl font-extrabold text-primary">Rp 131.5M</h3>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-tertiary-fixed rounded-xl text-on-tertiary-fixed">
              <Users className="w-6 h-6" />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
              <TrendingUp className="w-3 h-3" /> +5.4%
            </span>
          </div>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Total Pengunjung</p>
          <h3 className="text-3xl font-extrabold text-primary">2,482</h3>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-error-container rounded-xl text-on-error-container">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-error bg-error-container/50 px-2 py-1 rounded-lg">
              <TrendingDown className="w-3 h-3" /> -1.2%
            </span>
          </div>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Rata-rata Transaksi</p>
          <h3 className="text-3xl font-extrabold text-primary">Rp 115.400</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-extrabold text-primary">Tren Pendapatan</h3>
              <p className="text-xs text-on-surface-variant font-medium">Dalam jutaan Rupiah (7 Hari Terakhir)</p>
            </div>
            <select className="bg-surface-container-low border-none text-sm font-bold text-primary rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-primary/20">
              <option>Minggu Ini</option>
              <option>Bulan Ini</option>
              <option>Tahun Ini</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#002045" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#002045" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e9eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#586377', fontWeight: 600 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#586377', fontWeight: 600 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', fontWeight: 'bold' }}
                  itemStyle={{ color: '#002045' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#002045" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                <Area type="monotone" dataKey="target" stroke="#c4c6cf" strokeWidth={2} strokeDasharray="5 5" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col">
          <h3 className="text-lg font-extrabold text-primary mb-6">Produk Terlaris</h3>
          <div className="flex-1 space-y-5">
            {topProducts.map((product, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center font-extrabold text-primary text-sm">
                    #{i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary group-hover:text-secondary transition-colors">{product.name}</h4>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{product.category} • {product.sales} Terjual</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-sm text-primary">{product.revenue}</p>
                  <p className={cn("text-[10px] font-bold", product.trend.includes('+') ? "text-green-600" : "text-error")}>
                    {product.trend}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-surface-container-low text-primary font-bold text-sm rounded-xl hover:bg-surface-container-high transition-colors">
            Lihat Semua Produk
          </button>
        </div>
      </div>
    </motion.div>
  );
}
