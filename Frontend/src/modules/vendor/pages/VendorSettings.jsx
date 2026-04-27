import { User, Shield, Briefcase, FileText, Settings, LogOut, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logoutVendor } from "../utils/vendorStore";

const VendorSettings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutVendor();
    navigate('/');
  };

  return (
    <div className="bg-neutral-50 min-h-screen pb-24 font-inter">
      <div className="bg-[#C44545] px-6 pt-10 pb-8 flex items-center gap-5 border-b border-white/5 sticky top-0 z-10 shadow-2xl shadow-[#C44545]/20 text-white rounded-b-[2.5rem]">
         <div className="h-16 w-16 bg-white rounded-[1.8rem] flex items-center justify-center text-[#C44545] font-black text-xl shadow-xl shadow-black/10 border-4 border-white/20">
            SG
         </div>
         <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-tighter leading-none mb-1.5 uppercase text-white">Sharma Garage</h1>
            <span className="text-[12px] font-bold text-white/50 uppercase tracking-widest leading-none">ID: VND-48201A</span>
            <div className="flex items-center gap-1.5 mt-2.5 bg-white/10 w-auto self-start px-2.5 py-1.5 rounded-xl text-[11px] font-black uppercase text-white border border-white/10 backdrop-blur-md shadow-sm">
               <Shield size={10} className="fill-white" /> KYC Verified
            </div>
         </div>
      </div>

      <div className="px-6 py-8 space-y-10">
         <section>
            <h3 className="text-[12px] font-black uppercase text-neutral-400 tracking-[0.25em] mb-5 pl-1 border-l-4 border-[#C44545] h-4 flex items-center">Management Console</h3>
            <div className="bg-rose-50 border text-sm font-bold border-rose-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-[#C44545]/5">
               <Link to="/vendor/profile" className="flex items-center justify-between p-5 border-b border-neutral-50 active:bg-neutral-50 transition-colors group">
                  <div className="flex items-center gap-4">
                     <User size={18} className="text-[#C44545]" strokeWidth={2.5} /> 
                     <span className="text-neutral-800">My Profile</span>
                  </div>
                  <ChevronRight size={16} className="text-[#C44545]/30" strokeWidth={3} />
               </Link>
               <Link to="/vendor/roles" className="flex items-center justify-between p-5 border-b border-neutral-50 active:bg-neutral-50 transition-colors group">
                  <div className="flex items-center gap-4">
                     <Briefcase size={18} className="text-[#C44545]" strokeWidth={2.5} /> 
                     <span className="text-neutral-800">Service Roles</span>
                  </div>
                  <ChevronRight size={16} className="text-[#C44545]/30" strokeWidth={3} />
               </Link>
               <Link to="/vendor/kyc" className="flex items-center justify-between p-5 active:bg-neutral-50 transition-colors group">
                  <div className="flex items-center gap-4">
                     <FileText size={18} className="text-[#C44545]" strokeWidth={2.5} /> 
                     <span className="text-neutral-800">KYC Documents</span>
                  </div>
                  <ChevronRight size={16} className="text-[#C44545]/30" strokeWidth={3} />
               </Link>
            </div>
         </section>

         <section>
            <h3 className="text-[12px] font-black uppercase text-neutral-400 tracking-[0.25em] mb-5 pl-1 border-l-4 border-[#C44545] h-4 flex items-center">Configuration</h3>
            <div className="bg-rose-50 border text-sm font-bold border-rose-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-[#C44545]/5">
               <div className="flex items-center justify-between p-5 border-b border-neutral-50 active:bg-neutral-50 transition-colors group">
                  <div className="flex items-center gap-4">
                     <Settings size={18} className="text-[#C44545]" strokeWidth={2.5} /> 
                     <span className="text-neutral-800">Preferences</span>
                  </div>
                  <ChevronRight size={16} className="text-[#C44545]/30" strokeWidth={3} />
               </div>
               <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-between p-5 text-[#C44545] bg-rose-100/30 active:bg-rose-100 transition-colors group"
               >
                  <div className="flex items-center gap-4">
                     <LogOut size={18} className="text-[#C44545]" strokeWidth={3} /> 
                     <span className="font-black uppercase tracking-widest text-[12px] text-[#C44545]">Logout Session</span>
                  </div>
               </button>
            </div>
         </section>
      </div>
    </div>
  );
};

export default VendorSettings;
