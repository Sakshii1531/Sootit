import { motion } from "framer-motion";
import { Star, Shield, Zap, TrendingUp, Settings, DollarSign, Activity, Briefcase, Wallet, MapPin, CheckCircle2, Wrench, Truck, FileText, Navigation, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { getVendorData } from "../utils/vendorStore";
import { getVendorConfig } from "../utils/vendorConfig";

const VendorHome = () => {
  const [vendor, setVendor] = useState(getVendorData() || {
    profile: { name: "Sharma Garage", role: "mechanic" },
    wallet: 0
  });

  const config = getVendorConfig(vendor.profile.role);

  useEffect(() => {
    const handleUpdate = () => setVendor(getVendorData());
    window.addEventListener('vendor_data_updated', handleUpdate);
    return () => window.removeEventListener('vendor_data_updated', handleUpdate);
  }, []);

  const serviceRoles = [
    { label: "Driver Service", icon: Navigation, color: "text-slate-900", bg: "bg-slate-50", status: vendor.profile.role === 'driver' ? 'ACTIVE' : 'INACTIVE' },
    { label: "Mechanic Shop", icon: Wrench, color: "text-slate-700", bg: "bg-slate-100", status: vendor.profile.role === 'mechanic' ? 'ACTIVE' : 'PENDING' },
    { label: "Towing Help", icon: Truck, color: "text-slate-800", bg: "bg-neutral-100", status: vendor.profile.role === 'towing' ? 'ACTIVE' : 'INACTIVE' },
    { label: "RTO Agent", icon: FileText, color: "text-slate-900", bg: "bg-slate-50", status: vendor.profile.role === 'rto' ? 'ACTIVE' : 'CLOSED' },
    { label: "Legal Advisor", icon: Briefcase, color: "text-slate-700", bg: "bg-slate-100", status: vendor.profile.role === 'legal' ? 'ACTIVE' : 'INACTIVE' },
  ];

  return (
    <div className="bg-white min-h-screen pb-24 font-inter">
      {/* Earnings & Success Rate (Top Bar) */}
      <section className="px-4 pt-6 pb-8 bg-[#C44545] text-white rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full blur-3xl -mr-20 -mt-10" />
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div className="bg-rose-50/10 p-5 rounded-[2rem] border border-white/20 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded-lg bg-white/10 flex items-center justify-center">
                <Activity size={12} className="text-white/80" />
              </div>
              <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-white/50">Lead Response</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black tracking-tighter">Instant</span>
            </div>
          </div>
          <div className="bg-rose-50/10 p-5 rounded-[2rem] border border-white/20 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded-lg bg-white/10 flex items-center justify-center">
                <Zap size={12} className="text-white/80" />
              </div>
              <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-white/50">Success Rate</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-black tracking-tighter font-inter">98.4%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Role Profile Card with Toggle */}
      <section className="px-4 py-6 -mt-3 relative z-20">
         <div className="bg-[#C44545] text-white p-5 rounded-[2rem] flex items-center justify-between shadow-2xl shadow-[#C44545]/20">
            <div className="flex items-center gap-4">
               <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                  <config.icon size={22} className="text-white" strokeWidth={2.5} />
               </div>
               <div>
                  <h3 className="text-[13px] font-black uppercase tracking-[0.25em] mb-1 text-white">Online Status</h3>
                  <p className="text-[12px] font-bold text-white/70">Receiving leads in {config.leadsRange}</p>
               </div>
            </div>
            <div className="h-6 w-11 bg-white/20 rounded-full relative cursor-pointer shadow-inner border border-white/10">
               <div className="absolute right-0.5 top-0.5 h-5 w-5 bg-white rounded-full shadow-lg"></div>
            </div>
         </div>
      </section>

      {/* Active Services Grid */}
      <section className="px-4 py-4">
        <h2 className="text-[13px] font-black text-neutral-900 uppercase tracking-[0.25em] mb-6 pl-1 border-l-4 border-[#C44545] h-4 flex items-center">Active Services</h2>
        <div className="grid grid-cols-2 gap-4">
          {serviceRoles.map((role, idx) => (
            <motion.div 
              key={idx}
              whileTap={{ scale: 0.96 }}
              className="bg-rose-50 p-5 rounded-[2.5rem] border border-rose-100 shadow-xl shadow-black/[0.01] flex flex-col gap-4 relative group"
            >
              <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${role.bg} ${role.color} shadow-inner`}>
                <role.icon size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xs font-black tracking-tight text-neutral-900 mb-1">{role.label}</h3>
                <span className={`text-[11px] font-black uppercase tracking-widest ${role.status === 'ACTIVE' ? 'text-green-500' : 'text-neutral-500'}`}>
                  {role.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Direct Hire Requests */}
      <section className="px-4 py-6">
        <h2 className="text-[13px] font-black text-neutral-900 uppercase tracking-[0.25em] mb-6 pl-1 border-l-4 border-[#C44545] h-4 flex items-center">Direct Hire Requests</h2>
        {config.directRequests.map((req, idx) => (
          <div key={idx} className="bg-rose-50 border border-rose-100 p-6 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[11px] font-black text-neutral-400">{req.time}</span>
            </div>
            <div className="mb-4">
               <span className="text-[11px] font-black uppercase text-slate-800 bg-slate-100 px-2.5 py-1 rounded-xl mb-2 inline-block">New Request</span>
               <h3 className="text-xl font-black tracking-tighter text-neutral-900">{req.name}</h3>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-600 mb-6">
               <MapPin size={14} className="text-neutral-400" />
               <span className="text-[13px] font-bold">{req.location} • <span className="text-slate-900">{req.service}</span></span>
            </div>
            <div className="flex gap-2">
               <button className="flex-1 bg-[#C44545] text-white font-black uppercase text-[11px] tracking-widest py-4 rounded-2xl active:scale-95 transition-all shadow-xl shadow-[#C44545]/15 flex items-center justify-center gap-2">
                  <CheckCircle2 size={16} /> Accept Booking
               </button>
            </div>
          </div>
        ))}
      </section>
      {/* --- SEPARATE SECTION: DRIVER JOBS MARKETPLACE --- */}
      {vendor.profile.role === 'driver' && (
        <section className="mt-8 pt-10 pb-12 bg-slate-100/80 border-t border-slate-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
          <div className="px-6">
            <div className="flex flex-col gap-1 mb-8">
               <div className="flex items-center gap-2">
                 <div className="h-2 w-8 bg-[#C44545] rounded-full" />
                 <span className="text-[11px] font-black uppercase text-[#C44545] tracking-[0.3em]">Marketplace</span>
               </div>
               <h2 className="text-2xl font-black text-slate-900 tracking-tighter">Available Driver Jobs.</h2>
               <p className="text-[13px] font-bold text-slate-400">Direct requirements posted by vehicle owners near you.</p>
            </div>
            
            <div className="space-y-5">
              {[
                { id: 1, vehicle: 'Sedan/SUV', location: 'Mumbai, MH', salary: '₹18,000/mo', desc: 'Required permanent driver for family car (Automatic).' },
                { id: 2, vehicle: 'Luxury', location: 'Pune, MH', salary: '₹25,000/mo', desc: 'Need experienced driver for BMW 5 Series (Manual/Auto).' },
              ].map((job) => (
                <motion.div 
                  key={job.id} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="bg-white p-7 rounded-[2.8rem] border border-slate-200 shadow-xl shadow-black/[0.02] flex flex-col gap-6 relative group"
                >
                  <div className="flex justify-between items-start">
                     <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-rose-50 text-[#C44545] text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-rose-100">
                            {job.vehicle}
                          </span>
                          <span className="bg-green-50 text-green-600 text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-green-100">
                            New Post
                          </span>
                        </div>
                        <h3 className="text-xl font-black tracking-tight text-slate-900 mb-3 leading-tight">{job.desc}</h3>
                        
                        <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center gap-2 text-slate-500">
                              <MapPin size={14} className="text-neutral-400" />
                              <span className="text-[13px] font-bold">{job.location}</span>
                            </div>
                            <div className="h-4 w-[1px] bg-slate-200" />
                            <div className="flex items-center gap-2 text-[#C44545]">
                              <DollarSign size={14} strokeWidth={3} />
                              <span className="text-[13px] font-black">{job.salary}</span>
                            </div>
                        </div>
                     </div>
                  </div>
                  
                  <button 
                    onClick={() => alert("Premium Unlock Required: Please recharge your wallet to view contact details.")}
                    className="w-full bg-[#C44545] text-white py-4 rounded-2xl text-[12px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-lg shadow-[#C44545]/20 flex items-center justify-center gap-3"
                  >
                    View Contact Details <ArrowRight size={16} strokeWidth={3} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default VendorHome;
