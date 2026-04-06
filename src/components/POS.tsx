import React from 'react';
import { 
  UserPlus, 
  ReceiptText, 
  X, 
  Save, 
  Trash2, 
  CreditCard, 
  Tag, 
  PlusCircle, 
  Printer, 
  TableProperties, 
  LogOut,
  QrCode
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function POS() {
  const cartItems = [
    { id: 1, name: 'Double Espresso Macchiato', price: 38000, qty: 2, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALcCo7FPwlDrYyCSPiO3e3zD4pXu12Q2XTnXRbIavJQod6fMEUuviAv5j0-KnxMO0BdG7IBikab7a_2xUcUJSsntABX8UZaP5Vc3hGmt7nqRmvfeIg7auoebHy_jIRwq6swG0p7Ie6LE8kgo8o8xIUmOVIVqkgkZA15B3QXpRenuj2GV0PSc9PbktEw5j2mKIoASsnQ8EYXDDi0oYOE0NdpPUC0U7mvd146rcn9sVbRu8zEMeJRaDW5ju8HgXyGJsl5Tjc8gkDuZE' },
    { id: 2, name: 'Butter Croissant', price: 28000, qty: 1, note: 'Panaskan sebentar', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyvLxMLSaV6oKpzrHDT0dW5NU025-fuVBTKDO_H0MskIJ0UM7faPo9S7vFlM40peDOdxoMbvjkCkEfhHwSHRf-TkZXjM9DOos3QdWCUNcEOrtFqw5YuoNPe13VRAxuOqP8RQEhiVK2rkX1baYunCeqCKMRVxN30e42gyXs9PCPlBdaxOgR5Z62RC2tUH44spNa0IlU4Sn_sE-plqK7gp8uet9Rx802PUON1eprtywwXaDyGWTlKqTfIgDbeqa6qpXhxJlF5Ad3ZUk' },
    { id: 3, name: 'Avocado Toast Supreme', price: 65000, qty: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-tEekSHJYnlQjBEHB_YowA218YCv3HI-iqqlpKAeGOeOLaLoocNLmosSHg_roesb_kYH5nkHVsB0bHYIh147DKvEZNzASs-jEhVj06Wy76dHTRqkYYDSK7n8Hv3HyJ-TgNiv283KKElRMOIpZjD1PfnDOoaPturVypFsU3VWyZlydbCQTRol0gFUgnd5DxtYGGsh17Xf9GoiK8R6d1rGspYbb8o9PpDjr9fRwz4nXwcenWtgdeevLfDooLhwnIyjEN1TWWqXZRhc' },
  ];

  const products = [
    { name: 'Double Espresso Macchiato', price: 38000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVFZ2Sh9O3P20_w3PvwTsrUOZ3OZV-ZZCHhHxgNLNLMzAAj4AjK22u9GenYujzL9lBgtokI8S4y-7aj9PrfuCTuexWhBMk-Q0_ZAARm_7f95sFg_FlUFw5TzyBoVhcUA9hS4JJdX4sfem3YazgMrYrAVA3hxAa6uB0rF0CMsY59YQ7-F39O3cElnWV1r_jGBTvClPF8G420YpljWVjaa1bRFjKtjfqMXRP5Fn5NdXKDEdgnwONo9-eU4HsBZmhfLAmm2k99Y_hkio', favorite: true },
    { name: 'Butter Croissant', price: 28000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3rH_suf4tEaZUQmOvhc2lqH5j3o4jAl3ZXtRkvBDbkq9GbmHNJC9srSVMsvf5xX4aG66ZYmU1SCCLwrhRbKuAmKt1q2mjYJVrdTlziIo08rOfy9lzV7-14WUur2MQkeFdhmFY3jM63ggO7m3U23qECszLLM-ykLKC7WNrq-ql10almzx_rErmHu-BMdBLPzWlZVwScun4y0gl6AReEcndYDf_1_tNwUDmN_PttcOMTue6sFydsPdtcjBDrLmvUXtKqcYxdufn-d4' },
    { name: 'Avocado Toast Supreme', price: 65000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7xv7eEke7Ae0fIEz8gXuqJek7UUptzPr-7Vm2caSezOwqXOrpVSon67gtpwCmyJ5GbZ_c1zuNwyxrXntXDk6QV31dAXQhm453X7tcTQDT1fTQfiRC2gTF1vSJWTVzVGrs_5u7FO7US7sxpFQyBKosi0fnMDGVD05HXZSjhJwc-_CK8M59SFYLfflLVJuh1hmi4hUNyCVHS4_o-wRgAnMouJosaEUndvhjMyrq-h26_ZIp48X4suyVtvt9fEt8w9PzhWTgYd9fC4E' },
    { name: 'Iced Ceremonial Matcha', price: 42000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzKD0mHLHKBVk_rmLpGGutK-157ChsIGgsguC0Q6nEvf9onMvjEVdEq6too52ouMtcWKNf4dUx1t4wdxYdII-_5gpwO5wMoOzsoCPowG-Nbq5vMCzh5aDtSab6aLmjWP8dj3Z14f1VArQriAQ6H0Dnj9CoHh_IF1Fo8kNNIUjAAj6YZolnejirnmKn9JC7hUICnQlN17TA07Fzp3OH5TivqWFGq_FoA-mdLP61veaUapo6pl2Jeg-J8AlGBU5hH3sElsymJsos-OQ', lowStock: true },
    { name: 'Artisan Glazed Donut', price: 18000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARQknZ2PJ0mJQlS-39yDYaTf8F-9cvnK0X-9gofYx0R2WJjvgn-dSbMad2P390kwP19_vyKPnSo3IX-R-7ufVqyHtQxnt8sw3-oE21_-aovnmpbD6sgEkZyRuvVOHzpjchD7pM50IeyfeDwmjkjaZHnR4beFNzCjVkR1uOfWKTCrW0anWN1AgJ3yPAp1y-dEcP_SNG62dJ49Ti8WO0RtmucqBp8kTqyjNffzcxFIhpzL4UJz9-A00LhBz_eMTLa0zF7Hz-a6-nJM8' },
    { name: 'Acai Berry Power Bowl', price: 55000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn8CZRgQlGArx8uh75GjwwhKd-yAuQiOQvGAg6Ui8mHoDXQ7Z3hcYsXDkgpjiYooZkqboLOirxM8TT6K1_WRusFGPV7bz8Bt6jdVSlYltOQNV6VdXWZ_mvpRtvWIlvUXpx6Y78Sw5Q17a9pJJGuAQSLVP0tRRyY7Qx8JmHopxQxsx_B7nMapQrwVUSl0EsfjVcckmbkUlh7D4FjoqD0r9RxpoyGKAoEZtoxlO37IC-7cOByaiRXsDF05jsEXzxHO63UpoGp3ZhI94', soldOut: true },
    { name: 'Signature Cold Brew', price: 35000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAE13RqjT_4CPpl8LnfS3J1U9pjIFfAKh_sqxjpOb_S4_Os8dUTwVCITISTtJp1-qimlS0iWfpngLPDoZ0I9QVR00_yV7I8QxvNYAhChtx-tWOIX-jcw_-ai8mM79xUw-Y3ZD-QlnJqYRUISMUUJaMPPifcyj6rsqoEhxV67PpN_AnqNGDUikEaEJeCcFr2-edsm9NiuG4DYAWmJw6TfW7ZT4sDu9D2FA6zQkcHM9AKP1b_hp-jo9gqOzrjXL6f8aaIPbLy-S0Vx6M' },
    { name: 'Fudge Brownie Bites', price: 22000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBleFLShA4J81wdd0M_ppxGJTw_W64q0Vu0qMvJmGuwtdpQXrsyR_HLmG2y4OCB7abQYP2bwae7LzMnvrM-jwSTGL6hLcC60g_otkCPx4Y4p121-pHDg4mLDGNg7_YqjuC1-_S6mRproDURwVm8PIZaMyWATZ3bOfHuxShtS8FB4tZBURER-0zVWO5-4ZS2DP4VQ4Cn_-KdT6YyoKWftZ7-qCTmc5xmu_F2aYnc0zcDYXHhoMlzyIzMdog2xV2wtunBYboePwJACJg' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 flex overflow-hidden -mx-8 -mt-8 h-[calc(100vh-4rem)]">
      <section className="w-[480px] bg-white border-r border-slate-100 flex flex-col shadow-xl z-10">
        <div className="p-6 pb-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-headline text-2xl font-extrabold text-primary">Keranjang Belanja</h2>
            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold tracking-widest uppercase">Order #8821</span>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-3 px-4 bg-surface-container-low rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors">
              <UserPlus className="w-5 h-5" /> Tambah Pelanggan
            </button>
            <button className="py-3 px-4 bg-surface-container-low rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors">
              <ReceiptText className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-outline-variant/20 hover:border-primary/40 hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-24 h-24 rounded-2xl bg-surface-container-highest overflow-hidden flex-shrink-0 shadow-sm border border-outline-variant/10">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={item.img} alt={item.name} referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1.5">
                  <h4 className="font-extrabold text-lg text-primary truncate leading-tight tracking-tight">{item.name}</h4>
                  <button className="text-error/60 hover:text-error hover:bg-error-container p-2 rounded-xl transition-all"><X className="w-5 h-5" /></button>
                </div>
                {item.note && (
                  <div className="flex items-center gap-2 mb-4 px-3 py-1.5 bg-surface-container-low rounded-lg w-fit max-w-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></div>
                    <p className="text-[11px] text-on-surface-variant font-bold italic truncate uppercase tracking-tighter">Note: {item.note}</p>
                  </div>
                )}
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1.5 bg-surface-container-low rounded-2xl p-1.5 border border-outline-variant/10">
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-white text-primary font-black shadow-sm hover:bg-primary hover:text-white transition-all active:scale-90">-</button>
                    <span className="w-12 text-center text-base font-black text-primary">{item.qty}</span>
                    <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-white text-primary font-black shadow-sm hover:bg-primary hover:text-white transition-all active:scale-90">+</button>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-0.5">Subtotal</p>
                    <p className="text-xl font-black text-primary tracking-tighter">Rp {(item.price * item.qty).toLocaleString('id-ID')}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 bg-surface-container-low/50 space-y-4">
          <div className="space-y-2 border-b border-outline-variant/20 pb-4">
            <div className="flex justify-between text-sm text-on-secondary-container"><span>Subtotal</span><span>Rp 169.000</span></div>
            <div className="flex justify-between text-sm text-on-secondary-container"><span>Pajak (11%)</span><span>Rp 18.590</span></div>
            <button className="w-full flex justify-between items-center py-2 px-3 bg-tertiary-fixed text-on-tertiary-fixed rounded-lg text-xs font-bold hover:opacity-90">
              <span className="flex items-center gap-2"><Tag className="w-4 h-4" /> Diskon Member (10%)</span>
              <span>-Rp 16.900</span>
            </button>
          </div>
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">Total Bayar</span>
            <span className="text-3xl font-extrabold font-headline text-primary">Rp 170.690</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="py-3 px-4 bg-surface-container-highest text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-surface-dim transition-colors"><Save className="w-5 h-5" /> Simpan</button>
            <button className="py-3 px-4 bg-error-container text-on-error-container font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"><Trash2 className="w-5 h-5" /> Batal</button>
          </div>
          <button className="w-full py-4 primary-gradient text-white font-extrabold text-lg rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-all">
            <CreditCard className="w-6 h-6" /> PROSES BAYAR
          </button>
        </div>
      </section>
      <section className="flex-1 bg-background flex flex-col">
        <div className="p-6 pb-2 flex items-center gap-3 overflow-x-auto no-scrollbar">
          {['Semua Menu', 'Coffee & Tea', 'Artisan Pastry', 'Brunch Specials', 'Non-Alcoholic', 'Desserts'].map((cat, i) => (
            <button key={i} className={cn("px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all", i === 0 ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-secondary-fixed text-on-secondary-fixed-variant hover:bg-surface-container-high")}>{cat}</button>
          ))}
        </div>
        <div className="flex-1 p-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto">
          {products.map((p, i) => (
            <button key={i} className={cn("group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden hover:ring-2 hover:ring-primary/10 transition-all text-left", p.soldOut && "opacity-60 grayscale cursor-not-allowed")}>
              <div className="aspect-square w-full relative">
                <img className="w-full h-full object-cover" src={p.img} alt={p.name} referrerPolicy="no-referrer" />
                {p.favorite && <span className="absolute top-3 left-3 px-2 py-1 bg-secondary-container text-on-secondary-container rounded-md text-[10px] font-bold">FAVORIT</span>}
                {p.lowStock && <span className="absolute top-3 right-3 px-2 py-1 bg-error-container text-on-error-container rounded-md text-[10px] font-bold">STOK TIPIS</span>}
                {p.soldOut && <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><span className="text-white font-bold text-xs uppercase tracking-widest">Habis Terjual</span></div>}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-sm text-primary line-clamp-2">{p.name}</h3>
                <div className="mt-auto pt-3 flex justify-between items-center">
                  <span className="font-bold text-primary">Rp {p.price.toLocaleString('id-ID')}</span>
                  {!p.soldOut && <PlusCircle className="w-5 h-5 text-primary-container opacity-0 group-hover:opacity-100 transition-opacity" />}
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between shadow-2xl">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-primary font-bold hover:bg-surface-container-low px-4 py-2 rounded-xl transition-colors"><Printer className="w-5 h-5" /> Print Struk Terakhir</button>
            <button className="flex items-center gap-2 text-primary font-bold hover:bg-surface-container-low px-4 py-2 rounded-xl transition-colors"><TableProperties className="w-5 h-5" /> Daftar Order Aktif</button>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end"><span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">Kasir Sedang Bertugas</span><span className="text-sm font-bold text-primary">Eka Wijaya (ID-1042)</span></div>
            <button className="w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center text-primary hover:bg-surface-dim transition-colors"><LogOut className="w-5 h-5" /></button>
          </div>
        </div>
      </section>
      <button className="fixed bottom-8 right-8 w-16 h-16 primary-gradient text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50"><QrCode className="w-8 h-8" /></button>
    </motion.div>
  );
}
