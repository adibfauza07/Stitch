import React from 'react';
import { 
  PlusCircle, 
  Layers, 
  TrendingUp, 
  AlertTriangle, 
  AlertCircle, 
  CircleDollarSign, 
  Filter, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Inventory() {
  const inventoryItems = [
    { name: 'Nike Air Max Pro v2', sku: 'SKU-99201-RED', branch: 'Cabang Pusat', stock: '142 Units', price: 'Rp 2.450.000', status: 'TERSEDIA', statusColor: 'bg-secondary-container text-on-secondary-container', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh08pdLAy8XcK3mlGDnOymQaChgjK-wVLc_pb2bSJMpDJ_7J8vhGbsF-2yp63vFpEVGWNPq3jDKRToMzFm6YX8vsVoRruEbeOOvQMqvWjhmlOiON8q8nmwDw1xsX2ZPEoCF3w9TG3k_-f86XH6TiVVFBrktAbdDmgqH2bqRgCJd4i4rNbFRuQsBTQh8yAvHLrZZVk4q1lBGw1c7D6kVYbNh61aKt4z7PZ4R4cKVm-pDQ5cDL7dyrQ8r-yUntAVG0Os5PxNNC9983E' },
    { name: 'Zenith Minimalist Watch', sku: 'SKU-WATCH-001', branch: 'Cabang Kemang', stock: '8 Units', price: 'Rp 1.120.000', status: 'STOK TIPIS', statusColor: 'bg-error-container text-on-error-container', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH6SPuD2Z1ZUa6elovC_x0KxFJ5IWUJ2gGIcpuosp4asmg6Vhhmo_tN99md8GlUw8ASKCKffWQiChEfnb14VWmLI5rIyV8SaBj9vr8eJk8AdCino-wNLleth2Sn0l2AUgDHLgGhrzVNNQaJpJcOkhuYLiD0b2Qh6uhFNaw3I0W27sRycMMEFOhIFIhdgiVoJ0MXRkH6UVoW4r6Z2x5DwOk4DacvzSkIndjD7wJAxtePHAzUz1mM6oMk-aemjGdFqzSoghTAbAZfB0' },
    { name: 'Beats Studio Pro Elite', sku: 'SKU-AUDIO-772', branch: 'Multi-Cabang', stock: '0 Units', price: 'Rp 4.999.000', status: 'HABIS', statusColor: 'bg-tertiary text-white', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAknNeNNUq3Ui_LVx10l-e6QUCR_fzDQyp5-aAfqqedoQmlO0LMHFTQJj7uJD6cEH0LsPpVrDyDAdbYmYoZHgJtMbkgvYRB1Xq7Rh8tpZLEwG0l6oUg63tEagxtsf6RYip7TqNz4BbdoDyTBBXpJkx7X6xi3hOFxvSnzRaYpoxko2u8OCI6dQXqs4mpwNqLai5Pdn_jK9hqL9GL2mjPlWtVNjbuVFXGaqiPcLhj3HxZykz3MQeiByWE19R2Gej8CdrycsM2Vnia7wY' },
    { name: 'Essence de Tactician', sku: 'SKU-FRAG-02', branch: 'Cabang Sudirman', stock: '45 Units', price: 'Rp 850.000', status: 'TERSEDIA', statusColor: 'bg-secondary-container text-on-secondary-container', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzd6okepX5fWUMpgmPtDeRnnzMWyQU124_hDYRFendZZH4GZMqvzD3XNHm1KejGI4cYxrMJbPqAAiab4XJFFtXE3djTRRtN8ZmAMukeIluxZf3hDsTmG3WYqH1GWdKzZrRYrCreNeDumuo_Pvvy0gJFHEzosTlKYm5_zxjT2YLMHQ7JSa5fG3mGbOAVP73EZOvATW0LVR8R1y-qcmZgS0MxGL40Hl-NMy6ETl4xpreZDmKByO75koXqOcOhKScZVLPIFtvWidBXWE' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
      <section className="flex items-end justify-between">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-on-background mb-2">Inventori & Manajemen Stok</h1>
          <p className="text-on-surface-variant">Pantau ketersediaan aset secara real-time di seluruh cabang strategis.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-high text-primary font-bold rounded-lg transition-all hover:bg-surface-container-highest">
            Stock Opname
          </button>
          <button className="flex items-center gap-2 px-6 py-3 primary-gradient text-white font-bold rounded-lg shadow-lg shadow-primary/10 transition-transform active:scale-95">
            <PlusCircle className="w-5 h-5" /> Tambah Barang Baru
          </button>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-secondary-container rounded-lg"><Layers className="w-5 h-5 text-primary" /></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Update: 2m ago</span>
          </div>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Total SKU Terdaftar</p>
          <h3 className="text-3xl font-headline font-extrabold text-on-surface">1,248</h3>
          <div className="mt-4 flex items-center gap-1 text-emerald-600 text-xs font-bold"><TrendingUp className="w-3 h-3" /><span>+12 SKU baru bulan ini</span></div>
        </div>
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-error/20">
          <div className="flex justify-between items-start mb-4"><div className="p-2 bg-error-container rounded-lg"><AlertTriangle className="w-5 h-5 text-error" /></div></div>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Stok Menipis (Alert)</p>
          <h3 className="text-3xl font-headline font-extrabold text-error">24</h3>
          <div className="mt-4 flex items-center gap-1 text-error text-xs font-bold"><AlertCircle className="w-3 h-3" /><span>Segera lakukan restock</span></div>
        </div>
        <div className="col-span-12 md:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-4"><div className="p-2 bg-tertiary-fixed rounded-lg"><CircleDollarSign className="w-5 h-5 text-tertiary" /></div></div>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Valuasi Total Inventori</p>
          <h3 className="text-3xl font-headline font-extrabold text-on-surface">Rp 4.2M</h3>
          <div className="mt-4 text-on-surface-variant text-xs font-medium"><span>Tersebar di 6 cabang utama</span></div>
        </div>
      </section>

      <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 flex items-center justify-between bg-surface-container-low">
          <div className="flex gap-4">
            <select className="bg-white border-none text-sm font-semibold rounded-lg focus:ring-2 focus:ring-primary/10 py-2 pl-4 pr-10 outline-none">
              <option>Semua Kategori</option>
            </select>
            <select className="bg-white border-none text-sm font-semibold rounded-lg focus:ring-2 focus:ring-primary/10 py-2 pl-4 pr-10 outline-none">
              <option>Cabang Pusat</option>
            </select>
          </div>
          <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors"><Filter className="w-5 h-5 text-on-surface-variant" /></button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-6 py-4 text-[10px] font-bold text-on-secondary-container uppercase tracking-wider">Produk & SKU</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-secondary-container uppercase tracking-wider">Cabang</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-secondary-container uppercase tracking-wider">Stok</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-secondary-container uppercase tracking-wider">Harga Unit</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-secondary-container uppercase tracking-wider">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high/30">
              {inventoryItems.map((item, i) => (
                <tr key={i} className={cn("group hover:bg-surface-container-low transition-colors", item.status === 'HABIS' && "bg-error/5")}>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-12 h-12 rounded-lg bg-surface-container overflow-hidden", item.status === 'HABIS' && "grayscale")}>
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="font-bold text-on-surface text-sm">{item.name}</p>
                        <p className="text-xs text-on-surface-variant font-mono">{item.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5"><span className="text-sm font-medium text-secondary">{item.branch}</span></td>
                  <td className="px-6 py-5"><span className={cn("text-sm font-bold", (item.status === 'HABIS' || item.status === 'STOK TIPIS') ? "text-error" : "text-on-surface")}>{item.stock}</span></td>
                  <td className="px-6 py-5"><span className="text-sm font-medium text-on-surface">{item.price}</span></td>
                  <td className="px-6 py-5">
                    <span className={cn("px-3 py-1 text-[10px] font-bold rounded-full uppercase", item.statusColor)}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    {item.status === 'HABIS' ? (
                      <button className="px-3 py-1.5 bg-primary text-white text-[10px] font-bold rounded hover:bg-primary-container transition-colors">Restock</button>
                    ) : (
                      <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical className="w-4 h-4 text-on-surface-variant" /></button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-surface-container-high/30 flex items-center justify-between">
          <p className="text-sm text-on-surface-variant">Menampilkan 1 - 4 dari 1,248 produk</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-bold text-on-surface hover:bg-surface-container-high rounded transition-colors disabled:opacity-30" disabled><ChevronLeft className="w-4 h-4" /></button>
            <button className="px-4 py-2 text-sm font-bold bg-primary text-white rounded shadow-sm shadow-primary/20">1</button>
            <button className="px-4 py-2 text-sm font-bold text-on-surface hover:bg-surface-container-high rounded transition-colors">2</button>
            <button className="px-4 py-2 text-sm font-bold text-on-surface hover:bg-surface-container-high rounded transition-colors">3</button>
            <button className="px-4 py-2 text-sm font-bold text-on-surface hover:bg-surface-container-high rounded transition-colors"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h2 className="text-xl font-headline font-extrabold mb-6">Analisis Perputaran Stok</h2>
            <div className="h-64 flex items-end gap-4 px-4">
              {[60, 45, 85, 70, 55, 90].map((h, i) => (
                <div key={i} className={cn("flex-1 rounded-t-lg transition-all hover:bg-primary/40 group relative", i === 3 ? "bg-primary" : "bg-surface-container-high")} style={{ height: `${h}%` }}>
                  <span className={cn("absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold transition-opacity", i === 3 ? "text-primary" : "text-on-surface opacity-0 group-hover:opacity-100")}>
                    {['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN'][i]}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center text-sm text-on-surface-variant font-medium">
              <p>Total Stok Keluar Semester 1</p>
              <p className="text-primary font-bold">14.2k Items</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <div className="bg-primary-container text-white p-6 rounded-2xl shadow-lg relative overflow-hidden group">
            <Sparkles className="absolute -right-4 -bottom-4 text-white/10 w-32 h-32 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-headline font-bold mb-2">Tactician AI Suggestion</h3>
            <p className="text-sm text-blue-200 leading-relaxed mb-4">Berdasarkan data 3 bulan terakhir, stok sepatu lari akan habis dalam 14 hari. Segera buat PO ke vendor Nike Pusat.</p>
            <button className="px-4 py-2 bg-white text-primary text-[10px] font-extrabold rounded-lg shadow-sm hover:bg-blue-50 transition-colors">Buat Purchase Order</button>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
            <h3 className="text-sm font-headline font-extrabold mb-4 flex items-center gap-2"><span className="w-2 h-2 bg-error rounded-full animate-pulse"></span> Aktivitas Stok Terkini</h3>
            <div className="space-y-5">
              {[
                { title: 'Penyesuaian Stok Selesai', meta: 'Admin Kemang • 12 Menit yang lalu', color: 'bg-secondary-container' },
                { title: 'Stok Habis: SKU-AUDIO-772', meta: 'System Alert • 1 Jam yang lalu', color: 'bg-error/30' },
                { title: 'Barang Masuk: 50 Unit', meta: 'Gudang Utama • 3 Jam yang lalu', color: 'bg-primary/30' }
              ].map((act, i) => (
                <div key={i} className="flex gap-3">
                  <div className={cn("w-1 rounded-full", act.color)}></div>
                  <div>
                    <p className="text-xs font-bold text-on-surface">{act.title}</p>
                    <p className="text-[10px] text-on-surface-variant">{act.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
