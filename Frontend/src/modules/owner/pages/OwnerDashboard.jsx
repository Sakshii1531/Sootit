import { motion } from "framer-motion";
import { Plus, ClipboardList, TrendingUp, Users, ArrowRight, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OwnerDashboard = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { label: "Active Jobs", value: "0", icon: ClipboardList, color: "text-blue-500" },
    { label: "Applications", value: "0", icon: Users, color: "text-[#C44545]" },
    { label: "Total Spent", value: "₹0", icon: TrendingUp, color: "text-green-500" },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen font-inter pb-20">
      {/* Header */}
      <header className="bg-white px-6 py-6 border-b border-slate-100 flex items-center justify-between sticky top-0 z-30 shadow-sm shadow-black/[0.01]">
        <div className="flex flex-col leading-none">
          <span className="text-[10px] font-black uppercase text-[#C44545] tracking-[0.2em] mb-1">Owner Console</span>
          <h1 className="text-xl font-black text-slate-900 tracking-tighter">Manage Your Driver Requirements.</h1>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="h-10 w-10 bg-neutral-50 rounded-xl flex items-center justify-center text-slate-900 border border-black/5 shadow-sm">
          <Menu size={20} strokeWidth={2.5} />
        </button>
      </header>

      <div className="p-6 space-y-8">
        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-5 rounded-[2rem] border border-slate-200 shadow-sm flex items-center gap-4"
            >
              <div className={`h-12 w-12 rounded-2xl flex items-center justify-center bg-slate-50 ${stat.color}`}>
                <stat.icon size={22} strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">{stat.label}</span>
                <p className="text-xl font-black text-slate-900 leading-none">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section>
          <motion.div 
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/post-requirement')}
            className="bg-[#C44545] p-8 rounded-[2.5rem] shadow-2xl shadow-[#C44545]/20 text-white relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" />
            <div className="relative z-10">
              <h2 className="text-2xl font-black tracking-tighter mb-2">Hire Your Next Driver.</h2>
              <p className="text-white/60 text-sm font-bold max-w-[240px] mb-8 leading-relaxed">Post your requirements and find the perfect professional for your vehicle.</p>
              <button className="bg-white text-[#C44545] h-14 w-full rounded-2xl font-black uppercase tracking-widest text-[13px] flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all">
                Post Driver Requirement <Plus size={18} strokeWidth={3} />
              </button>
            </div>
          </motion.div>
        </section>

        {/* Requirements List (Empty State) */}
        <section>
          <h3 className="text-[12px] font-black uppercase text-neutral-400 tracking-[0.2em] mb-4 pl-1 border-l-4 border-[#C44545] h-4 flex items-center">Active Requirements</h3>
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center">
            <div className="h-16 w-16 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-300 mb-4">
              <ClipboardList size={32} />
            </div>
            <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">No Active Postings</h4>
            <p className="text-[11px] font-bold text-neutral-400 max-w-[180px]">Your driver requirements will appear here once you post them.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OwnerDashboard;
