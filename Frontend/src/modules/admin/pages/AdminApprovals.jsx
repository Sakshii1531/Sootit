import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, CheckCircle2, XCircle, MapPin, Phone, Menu } from "lucide-react";
import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

const AdminApprovals = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const pendingVendors = [
    { id: 'VND-48201', name: 'Sharma Garage', role: 'mechanic', city: 'Mumbai', phone: '+91 9876543210' },
    { id: 'VND-39482', name: 'Metro Towing', role: 'towing', city: 'Pune', phone: '+91 7766554433' },
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
              <span className="text-[10px] font-black uppercase text-[#C44545] tracking-[0.2em] mb-1">Verification Queue</span>
              <h1 className="text-xl font-black text-slate-900 tracking-tighter">Pending Approvals.</h1>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-black text-[#C44545] uppercase tracking-[0.2em]">Awaiting Review</h2>
            <span className="text-[12px] font-bold text-neutral-500">{pendingVendors.length} requests</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pendingVendors.map((vendor) => (
              <motion.div
                key={vendor.id}
                className="bg-white p-5 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-rose-50 rounded-xl flex items-center justify-center text-[#C44545] font-black border border-rose-100 shadow-inner text-sm">
                        {vendor.name[0]}
                      </div>
                      <div className="flex flex-col leading-tight">
                        <h3 className="text-sm font-black tracking-tight text-slate-900 truncate max-w-[120px]">{vendor.name}</h3>
                        <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">{vendor.role}</span>
                      </div>
                    </div>
                    <div className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-widest flex items-center gap-1 border border-orange-100">
                      Pending
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 mb-4 py-3 border-y border-slate-50">
                    <div className="flex items-center gap-2">
                      <MapPin size={10} className="text-neutral-400" />
                      <span className="text-[11px] font-bold text-neutral-500">{vendor.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={10} className="text-neutral-400" />
                      <span className="text-[11px] font-bold text-neutral-500">{vendor.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-green-500 text-white py-2.5 rounded-xl font-black uppercase text-[9px] tracking-widest flex items-center justify-center gap-1.5 shadow-lg shadow-green-500/10 active:scale-95 transition-all">
                    <CheckCircle2 size={12} /> Approve
                  </button>
                  <button className="flex-1 bg-red-500 text-white py-2.5 rounded-xl font-black uppercase text-[9px] tracking-widest flex items-center justify-center gap-1.5 shadow-lg shadow-red-500/10 active:scale-95 transition-all">
                    <XCircle size={12} /> Reject
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminApprovals;
