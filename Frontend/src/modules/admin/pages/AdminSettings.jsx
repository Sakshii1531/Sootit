import { motion } from "framer-motion";
import { Settings, Shield, Bell, Globe, User, Menu, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

const AdminSettings = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const settingsOptions = [
    { label: "Account Security", desc: "Manage your password and 2FA", icon: Shield, path: "/admin/settings/security" },
    { label: "Notifications", desc: "Configure system alerts and emails", icon: Bell, path: "/admin/settings/notifications" },
    { label: "Platform Settings", desc: "General platform configurations", icon: Globe, path: "/admin/settings/platform" },
    { label: "Profile Details", desc: "Update your administrative profile", icon: User, path: "/admin/settings/profile" },
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
              <span className="text-[10px] font-black uppercase text-[#C44545] tracking-[0.2em] mb-1">Configuration</span>
              <h1 className="text-xl font-black text-slate-900 tracking-tighter">Settings.</h1>
            </div>
          </div>
        </header>

        <div className="p-6">
          <div className="space-y-4 max-w-2xl">
            {settingsOptions.map((option, i) => (
              <motion.div 
                key={i}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(option.path)}
                className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex items-center justify-between cursor-pointer group hover:border-[#C44545]/20 transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 bg-rose-50 rounded-2xl flex items-center justify-center text-[#C44545] border border-rose-100 group-hover:bg-[#C44545] group-hover:text-white transition-colors">
                    <option.icon size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black tracking-tight text-slate-900">{option.label}</h3>
                    <p className="text-[11px] font-bold text-neutral-400">{option.desc}</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-neutral-300 group-hover:text-[#C44545] transition-colors" />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-[#C44545] p-8 rounded-[2.5rem] shadow-2xl shadow-[#C44545]/20 text-white relative overflow-hidden max-w-2xl">
            <div className="relative z-10">
              <h2 className="text-lg font-black tracking-tighter mb-1">Advanced Controls</h2>
              <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest mb-6">Restricted System Access</p>
              <button className="bg-white text-[#C44545] px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-black/10 active:scale-95 transition-all">Maintenance Mode</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
