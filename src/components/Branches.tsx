import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Plus, Store, Users, TrendingUp, AlertCircle, Phone, Mail, MoreVertical } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const branches = [
  {
    id: 'JKT-01',
    name: 'Central Jakarta - Thamrin',
    type: 'Flagship Store',
    status: 'Operational',
    revenue: 'Rp 42.5M',
    staff: 24,
    capacity: '85%',
    address: 'Jl. M.H. Thamrin No. 1, Jakarta Pusat',
    phone: '+62 21 555 0123',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALcCo7FPwlDrYyCSPiO3e3zD4pXu12Q2XTnXRbIavJQod6fMEUuviAv5j0-KnxMO0BdG7IBikab7a_2xUcUJSsntABX8UZaP5Vc3hGmt7nqRmvfeIg7auoebHy_jIRwq6swG0p7Ie6LE8kgo8o8xIUmOVIVqkgkZA15B3QXpRenuj2GV0PSc9PbktEw5j2mKIoASsnQ8EYXDDi0oYOE0NdpPUC0U7mvd146rcn9sVbRu8zEMeJRaDW5ju8HgXyGJsl5Tjc8gkDuZE'
  },
  {
    id: 'SBY-01',
    name: 'Surabaya - Tunjungan',
    type: 'Standard Store',
    status: 'Operational',
    revenue: 'Rp 28.2M',
    staff: 18,
    capacity: '60%',
    address: 'Jl. Tunjungan No. 45, Surabaya',
    phone: '+62 31 555 0456',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyvLxMLSaV6oKpzrHDT0dW5NU025-fuVBTKDO_H0MskIJ0UM7faPo9S7vFlM40peDOdxoMbvjkCkEfhHwSHRf-TkZXjM9DOos3QdWCUNcEOrtFqw5YuoNPe13VRAxuOqP8RQEhiVK2rkX1baYunCeqCKMRVxN30e42gyXs9PCPlBdaxOgR5Z62RC2tUH44spNa0IlU4Sn_sE-plqK7gp8uet9Rx802PUON1eprtywwXaDyGWTlKqTfIgDbeqa6qpXhxJlF5Ad3ZUk'
  },
  {
    id: 'BDG-01',
    name: 'Bandung - Braga',
    type: 'Boutique Store',
    status: 'Maintenance',
    revenue: 'Rp 0',
    staff: 5,
    capacity: '0%',
    address: 'Jl. Braga No. 99, Bandung',
    phone: '+62 22 555 0789',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-tEekSHJYnlQjBEHB_YowA218YCv3HI-iqqlpKAeGOeOLaLoocNLmosSHg_roesb_kYH5nkHVsB0bHYIh147DKvEZNzASs-jEhVj06Wy76dHTRqkYYDSK7n8Hv3HyJ-TgNiv283KKElRMOIpZjD1PfnDOoaPturVypFsU3VWyZlydbCQTRol0gFUgnd5DxtYGGsh17Xf9GoiK8R6d1rGspYbb8o9PpDjr9fRwz4nXwcenWtgdeevLfDooLhwnIyjEN1TWWqXZRhc'
  },
  {
    id: 'BLI-01',
    name: 'Bali - Seminyak',
    type: 'Resort Store',
    status: 'Operational',
    revenue: 'Rp 35.8M',
    staff: 22,
    capacity: '92%',
    address: 'Jl. Kayu Aya No. 10, Seminyak, Bali',
    phone: '+62 361 555 0101',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVFZ2Sh9O3P20_w3PvwTsrUOZ3OZV-ZZCHhHxgNLNLMzAAj4AjK22u9GenYujzL9lBgtokI8S4y-7aj9PrfuCTuexWhBMk-Q0_ZAARm_7f95sFg_FlUFw5TzyBoVhcUA9hS4JJdX4sfem3YazgMrYrAVA3hxAa6uB0rF0CMsY59YQ7-F39O3cElnWV1r_jGBTvClPF8G420YpljWVjaa1bRFjKtjfqMXRP5Fn5NdXKDEdgnwONo9-eU4HsBZmhfLAmm2k99Y_hkio'
  }
];

export default function Branches() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-4xl font-extrabold font-headline tracking-tight text-primary mb-2">Manajemen Cabang</h1>
          <p className="text-on-surface-variant">Pantau dan kelola operasional seluruh cabang dari satu pusat komando.</p>
        </div>
        <button className="primary-gradient px-6 py-2 rounded-xl text-white font-bold shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
          <Plus className="w-5 h-5" /> Tambah Cabang
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {branches.map((branch) => (
          <div key={branch.id} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 group hover:shadow-md transition-all">
            <div className="h-32 relative overflow-hidden">
              <img src={branch.img} alt={branch.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-md mb-1 inline-block">
                    {branch.type}
                  </span>
                  <h3 className="text-white font-extrabold text-lg leading-tight">{branch.name}</h3>
                </div>
                <span className={cn(
                  "px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-sm",
                  branch.status === 'Operational' ? "bg-green-500 text-white" : "bg-error text-white"
                )}>
                  {branch.status}
                </span>
              </div>
            </div>
            
            <div className="p-5">
              <div className="grid grid-cols-3 gap-4 mb-5 pb-5 border-b border-outline-variant/10">
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Hari Ini</p>
                  <p className="font-extrabold text-primary">{branch.revenue}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1 flex items-center gap-1"><Users className="w-3 h-3" /> Staff</p>
                  <p className="font-extrabold text-primary">{branch.staff} <span className="text-xs font-medium text-on-surface-variant">Aktif</span></p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1 flex items-center gap-1"><Store className="w-3 h-3" /> Kapasitas</p>
                  <p className="font-extrabold text-primary">{branch.capacity}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{branch.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="font-medium">{branch.phone}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-surface-container-low text-primary font-bold text-sm rounded-xl hover:bg-surface-container-high transition-colors">
                  Dashboard Cabang
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-surface-container-low text-on-surface-variant rounded-xl hover:bg-surface-container-high transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
