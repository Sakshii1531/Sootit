import { MapPin, Search, Filter, Briefcase, Clock, Wallet, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { applyForJob, getVendorData } from "../utils/vendorStore";
import { getVendorConfig } from "../utils/vendorConfig";

const VendorJobs = () => {
  const [success, setSuccess] = useState(null);
  const [vendor, setVendor] = useState(getVendorData() || {
    profile: { name: "Guest", role: "driver" },
    wallet: 0
  });

  const config = getVendorConfig(vendor.profile.role);

  useEffect(() => {
    const handleUpdate = () => setVendor(getVendorData());
    window.addEventListener('vendor_data_updated', handleUpdate);
    return () => window.removeEventListener('vendor_data_updated', handleUpdate);
  }, []);

  const handleApply = (id) => {
    applyForJob(id);
    setSuccess(id);
    setTimeout(() => setSuccess(null), 3000);
  };

  return (
    <div className="bg-neutral-50 min-h-screen pb-24 font-inter">
      {/* Toast */}
      <AnimatePresence>
        {success && (
          <motion.div initial={{ y: -100 }} animate={{ y: 20 }} exit={{ y: -100 }} className="fixed top-0 left-0 w-full px-4 z-[100]">
            <div className="bg-[#C44545] text-white rounded-[2rem] p-5 shadow-2xl shadow-black/20 text-center font-black uppercase text-[12px] tracking-widest border border-white/10 backdrop-blur-md">
              Application Submitted! Professional Notified.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white px-6 pt-6 pb-6 border-b border-neutral-100 sticky top-0 z-10 shadow-sm shadow-black/[0.02]">
         <div className="flex items-center gap-2 mb-3">
            <div className={`h-2 w-2 rounded-full ${config.bg.replace('bg-', 'bg-').split('-')[0]}-600 animate-pulse`} />
            <span className="text-[13px] font-black uppercase text-neutral-600 tracking-[0.2em]">{config.label} Marketplace</span>
         </div>
         <h1 className="text-2xl font-black mb-3 text-neutral-900 tracking-tighter">Job Board.</h1>
         <div className="flex gap-2">
            <div className="flex-1 bg-rose-50 border border-rose-100 rounded-2xl px-4 py-3 flex items-center gap-3">
               <Search size={18} className="text-[#C44545]" strokeWidth={2.5} />
               <input type="text" placeholder={`Search ${config.label.toLowerCase()} leads...`} className="bg-transparent text-sm font-bold w-full focus:outline-none placeholder:text-[#C44545]/50" />
            </div>
             <button className="h-12 w-12 bg-[#C44545] rounded-2xl flex items-center justify-center text-white active:scale-95 transition-transform">
                <Filter size={20} />
             </button>
         </div>
      </div>

      <div className="p-6 space-y-5">
        {config.featuredJobs.map((job, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={job.id} 
            className="bg-rose-50 border border-rose-100 rounded-[2.5rem] p-5 shadow-xl shadow-black/[0.01] hover:shadow-black/[0.03] transition-all relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 h-20 w-20 bg-white/40 rounded-bl-[3rem] -mr-10 -mt-10" />
             
             <div className="flex justify-between items-start mb-2 relative z-10">
                 <div className="flex items-center gap-2">
                   <span className={`text-[11px] font-black uppercase px-2.5 py-1 rounded-xl shadow-sm ${i === 0 ? 'bg-[#C44545] text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {i === 0 ? 'Urgent' : 'Available'}
                  </span>
                   <div className="flex items-center gap-1 text-[11px] font-black uppercase text-[#C44545] bg-rose-50 px-2.5 py-1 rounded-xl border border-rose-100">
                    <ShieldCheck size={10} /> Verified
                  </div>
                </div>
                 <span className="text-[12px] font-bold text-neutral-400 flex items-center gap-1"><Clock size={12} /> {job.time}</span>
             </div>

             <div className="relative z-10">
                <h3 className="text-lg font-black tracking-tight leading-tight mb-1 group-hover:text-[#C44545] transition-colors uppercase">{job.task}</h3>
                <p className="text-[14px] font-medium text-neutral-600 mb-3 leading-relaxed tracking-tight">Client is looking for a professional {config.label} to handle this request immediately near {job.distance === 'Remote' || job.distance === 'Online' ? 'your zone' : job.distance}.</p>
               
               <div className="flex items-center gap-2 text-neutral-500 mb-4 pb-4 border-b border-neutral-50">
                  <MapPin size={14} className="text-neutral-400" />
                   <span className="text-[14px] font-bold">{job.name} • <span className="text-[#C44545] font-black">{job.distance} away</span></span>
               </div>
               
               <div className="flex items-center justify-between">
                   <div className="flex items-center gap-2 bg-rose-50 px-3 py-2 rounded-2xl border border-rose-100">
                      <ShieldCheck size={14} className="text-[#C44545]" />
                      <span className="text-[12px] font-bold uppercase text-[#C44545] tracking-tight">Verified Lead</span>
                   </div>
                   <button 
                    onClick={() => handleApply(job.id)}
                    className="bg-[#C44545] text-white px-8 py-3 rounded-[1.5rem] text-[12px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-xl shadow-[#C44545]/20"
                  >
                     {success === job.id ? 'Applied!' : 'Apply Now'}
                  </button>
               </div>
             </div>
          </motion.div>
        ))}
        
        <div className="text-center py-12">
           <div className="h-16 w-16 bg-neutral-100 rounded-3xl flex items-center justify-center mx-auto mb-4 border border-black/5 shadow-inner">
              <Briefcase size={28} strokeWidth={2.5} className="text-neutral-300" />
           </div>
            <p className="text-[14px] font-black text-neutral-400 uppercase tracking-[0.3em]">No more leads in your zone</p>
        </div>
      </div>
    </div>
  );
};

export default VendorJobs;
