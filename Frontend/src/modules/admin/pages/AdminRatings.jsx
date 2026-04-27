import { motion } from "framer-motion";
import { ArrowLeft, Star, Search, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

const AdminRatings = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const drivers = [
    { id: 'DRV-102', name: 'Rahul Singh', rating: 4.8, trips: 156, lastMonth: '★ 4.9' },
    { id: 'DRV-592', name: 'Sanjay Kumar', rating: 4.5, trips: 89, lastMonth: '★ 4.2' },
    { id: 'DRV-382', name: 'Amit Mishra', rating: 3.9, trips: 45, lastMonth: '★ 4.0' },
  ];

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
              <span className="text-[10px] font-black uppercase text-[#C44545] tracking-[0.2em] mb-1">Performance</span>
              <h1 className="text-xl font-black text-slate-900 tracking-tighter">Driver Ratings.</h1>
            </div>
          </div>
        </header>

        <div className="p-6">
            <div className="grid grid-cols-1 gap-4">
                {drivers.map((driver) => (
                    <motion.div 
                        key={driver.id}
                        className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm flex items-center justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 bg-rose-50 rounded-2xl flex items-center justify-center text-[#C44545] font-black border border-rose-100">
                                {driver.name[0]}
                            </div>
                            <div>
                                <h3 className="text-sm font-black tracking-tight">{driver.name}</h3>
                                <span className="text-[11px] font-black text-neutral-400 uppercase tracking-widest">{driver.id} • {driver.trips} Trips</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-1.5 mb-1">
                                <Star size={14} className="fill-orange-400 text-orange-400" />
                                <span className="text-lg font-black tracking-tighter">{driver.rating}</span>
                            </div>
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Last Month: {driver.lastMonth}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRatings;
