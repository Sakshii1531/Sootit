import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Phone, Menu, MoreVertical, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

const AdminVendors = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const vendors = [
    { id: 'VND-48201', name: 'Sharma Garage', role: 'mechanic', status: 'pending', city: 'Mumbai', phone: '+91 9876543210' },
    { id: 'VND-10293', name: 'Rahul Singh', role: 'driver', status: 'approved', city: 'Delhi', phone: '+91 8877665544' },
    { id: 'VND-39482', name: 'Metro Towing', role: 'towing', status: 'pending', city: 'Pune', phone: '+91 7766554433' },
    { id: 'VND-58291', name: 'Adv. Sameer', role: 'legal', status: 'approved', city: 'Kolkata', phone: '+91 6655443322' },
  ];

  const filteredVendors = vendors.filter(v => 
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) || v.id.toLowerCase().includes(searchTerm.toLowerCase())
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
              <span className="text-[10px] font-black uppercase text-[#C44545] tracking-[0.2em] mb-1">Directory</span>
              <h1 className="text-xl font-black text-slate-900 tracking-tighter">Service Providers.</h1>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Search */}
          <div className="bg-white border border-slate-200 rounded-3xl p-4 flex items-center gap-3 mb-8 shadow-sm">
            <Search size={18} className="text-neutral-400" />
            <input 
              type="text" 
              placeholder="Search providers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-sm font-bold text-slate-900 w-full focus:outline-none placeholder:text-neutral-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredVendors.map((vendor) => (
              <motion.div
                key={vendor.id}
                className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm relative"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 bg-rose-50 rounded-2xl flex items-center justify-center text-[#C44545] font-black border border-rose-100">
                      {vendor.name[0]}
                    </div>
                    <div>
                      <h3 className="text-sm font-black tracking-tight">{vendor.name}</h3>
                      <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">{vendor.role} • {vendor.id}</span>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                    vendor.status === 'approved' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                  }`}>
                    {vendor.status}
                  </div>
                </div>

                <div className="flex items-center gap-4 py-4 border-t border-slate-50">
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-neutral-400" />
                    <span className="text-[11px] font-bold text-neutral-500">{vendor.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={12} className="text-neutral-400" />
                    <span className="text-[11px] font-bold text-neutral-500">{vendor.phone}</span>
                  </div>
                </div>

                <button className="w-full mt-2 bg-neutral-50 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center justify-center gap-2 hover:bg-neutral-100 transition-all">
                  <ExternalLink size={12} /> View Full Profile
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminVendors;
