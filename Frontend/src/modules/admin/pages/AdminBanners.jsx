import { motion } from "framer-motion";
import { Image, Plus, Trash2, Upload, Menu } from "lucide-react";
import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

const AdminBanners = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const homeBanners = [
    { id: 1, title: 'Summer Special', type: 'Home' },
    { id: 2, title: 'New Mechanic Launch', type: 'Home' },
  ];

  const premiumBanners = [
    { id: 3, title: 'Elite Drivers', type: 'Premium' },
  ];

  const BannerCard = ({ banner }) => (
    <div className="bg-white p-5 rounded-[2.5rem] border border-slate-200 shadow-sm flex items-center justify-between group">
        <div className="flex items-center gap-4">
            <div className="h-16 w-24 bg-rose-50 rounded-2xl flex items-center justify-center text-[#C44545] border border-rose-100 overflow-hidden">
                <Image size={24} className="opacity-40" />
            </div>
            <div>
                <h3 className="text-sm font-black tracking-tight text-slate-900">{banner.title}</h3>
                <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">{banner.type} Banner</span>
            </div>
        </div>
        <button className="h-10 w-10 bg-rose-50 rounded-xl flex items-center justify-center text-[#C44545] hover:bg-red-500 hover:text-white transition-all">
            <Trash2 size={16} />
        </button>
    </div>
  );

  return (
    <div className="bg-neutral-50 min-h-screen font-inter flex">
      <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-72 flex flex-col">
        <header className="bg-white px-6 py-6 border-b border-slate-100 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden h-10 w-10 bg-neutral-50 rounded-xl flex items-center justify-center border border-black/5">
              <Menu size={20} strokeWidth={2.5} />
            </button>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-black uppercase text-[#C44545] tracking-[0.2em] mb-1">CMS Control</span>
              <h1 className="text-xl font-black text-slate-900 tracking-tighter">Banners Management.</h1>
            </div>
          </div>
          <button className="bg-[#C44545] text-white px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#C44545]/20">
            <Upload size={14} /> Upload New
          </button>
        </header>

        <div className="p-6 space-y-10">
          {/* Home Banners Section */}
          <section>
            <h2 className="text-[11px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-4 pl-1 border-l-4 border-[#C44545] h-4 flex items-center">Home Screen Banners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {homeBanners.map(banner => <BannerCard key={banner.id} banner={banner} />)}
              <div className="border-2 border-dashed border-slate-200 rounded-[2.5rem] p-5 flex items-center justify-center text-neutral-300 hover:border-[#C44545]/30 hover:text-[#C44545] transition-all cursor-pointer bg-white/50">
                <Plus size={24} />
              </div>
            </div>
          </section>

          {/* Premium Banners Section */}
          <section>
            <h2 className="text-[11px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-4 pl-1 border-l-4 border-[#C44545] h-4 flex items-center">Premium Selection Banners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {premiumBanners.map(banner => <BannerCard key={banner.id} banner={banner} />)}
              <div className="border-2 border-dashed border-slate-200 rounded-[2.5rem] p-5 flex items-center justify-center text-neutral-300 hover:border-[#C44545]/30 hover:text-[#C44545] transition-all cursor-pointer bg-white/50">
                <Plus size={24} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminBanners;
