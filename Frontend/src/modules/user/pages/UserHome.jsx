import { motion } from "framer-motion";
import AppHero from "../components/Hero";
import { Star, Shield, Zap, TrendingUp, ArrowRight, Navigation, Clock, Wrench, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../utils/userStore";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUserData() || { profile: { name: "Guest" }, wallet: 0 });

  useEffect(() => {
    const handleUpdate = () => setUser(getUserData());
    window.addEventListener('user_data_updated', handleUpdate);
    return () => window.removeEventListener('user_data_updated', handleUpdate);
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter overflow-hidden">
      <AppHero user={user} />

      <div className="px-4 py-4 space-y-10 pb-10">
        {/* Banner Card Grid - Ultra Compact */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-[11px] font-black uppercase text-slate-600 tracking-[0.25em] flex items-center gap-1.5">
              <TrendingUp size={10} className="text-[#C44545]" /> PREMIUM SELECTION
            </h3>
            <button 
              onClick={() => navigate('/user/premium-selection')}
              className="text-[11px] font-black text-[#C44545] uppercase tracking-widest active:scale-95 transition-all"
            >
              SEE ALL
            </button>
          </div>
          
          <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-1 snap-x snap-mandatory">
            {[
              { name: "Amit Vikram", type: "Expert Driver", rate: "4.9", jobs: "120+", img: "https://images.unsplash.com/photo-1549813069-f95e44d7f498?q=80&w=400", clr: "from-black/80 to-transparent" },
              { name: "S. K. Garage", type: "Mechanic", rate: "4.8", jobs: "310+", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=400", clr: "from-black/80 to-transparent" },
              { name: "Fast Towing", type: "Expert", rate: "4.7", jobs: "85+", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=400", clr: "from-black/80 to-transparent" },
              { name: "RTO Consult", type: "Legal Expert", rate: "4.9", jobs: "250+", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400", clr: "from-black/80 to-transparent" },
              { name: "Adv. Rahul", type: "Legal Advisor", rate: "5.0", jobs: "90+", img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=400", clr: "from-black/80 to-transparent" }
            ].map((p, i) => (
              <motion.div
                key={i}
                whileTap={{ scale: 0.96 }}
                className={`min-w-[240px] snap-center h-40 rounded-[1.8rem] relative overflow-hidden shadow-xl shadow-black/5 group`}
              >
                <img src={p.img} className="absolute inset-0 w-full h-full object-cover" alt="B" />
                <div className={`absolute inset-0 bg-gradient-to-r ${p.clr}`} />
                
                <div className="relative z-10 h-full p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="h-8 w-8 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10">
                      <Star size={14} className="text-white fill-white" />
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10">
                      <span className="text-white text-[11px] font-bold tracking-widest">★ {p.rate}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white text-base font-black tracking-tight leading-none mb-1">{p.name}</h4>
                    <span className="text-white/70 text-[10px] font-black uppercase tracking-[0.1em] leading-none">{p.type} • {p.jobs} Active</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Emergency Grid - Compact */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-[11px] font-black uppercase text-slate-600 tracking-[0.2em] leading-none">QUICK ASSIST</h3>
            <div className="h-[1px] w-4 bg-[#C44545]/30 rounded-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
             <motion.div 
                whileTap={{scale:0.96}} 
                onClick={() => navigate('/user/category/legal?label=Legal Support')}
                className="bg-rose-50 rounded-[2rem] p-5 flex flex-col gap-3 shadow-xl shadow-[#C44545]/5 border border-rose-100 cursor-pointer"
             >
                <div className="h-10 w-10 bg-white rounded-2xl flex items-center justify-center text-[#C44545] shadow-sm border border-rose-100">
                  <Shield size={16} />
                </div>
                <span className="text-[#C44545] text-[13px] font-black tracking-tight leading-none uppercase">Legal Support</span>
             </motion.div>
          </div>
        </section>

        {/* Tracking Module - Low Profile */}
        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-[11px] font-black uppercase text-slate-600 tracking-[0.2em]">LIVE ENGINE</h3>
          </div>
          <motion.div 
            whileTap={{ scale: 0.98 }}
            className="bg-white border-2 border-slate-200 rounded-[1.4rem] p-3 flex items-center gap-3 active:scale-95 transition-all"
          >
            <div className="h-9 w-9 bg-[#C44545] text-white rounded-xl flex items-center justify-center shadow-lg shadow-[#C44545]/20">
              <Clock size={16} strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-0.5">
                <h4 className="text-[12px] font-black text-slate-900 leading-none">Mechanic Dispatched</h4>
                <div className="flex gap-0.5 animate-pulse">
                    <div className="h-1 w-2 bg-slate-400 rounded-full" />
                    <div className="h-1 w-1 bg-slate-200 rounded-full" />
                </div>
              </div>
              <span className="text-[11px] font-black text-[#C44545] uppercase tracking-widest leading-none">Coming in 8 Mins</span>
            </div>
          </motion.div>
        </section>

        {/* Compact Trust Stats */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "15k+", sub: "Users", icon: User, clr: "text-[#C44545]", bg: "bg-white" },
            { label: "500+", sub: "Pros", icon: Star, clr: "text-[#A33636]", bg: "bg-white" },
          ].map((item, i) => (
            <div key={i} className="bg-rose-50 border border-rose-100 rounded-[1.2rem] p-3 flex flex-col items-center gap-1.5 text-center">
              <div className={`h-8 w-8 ${item.bg} ${item.clr} rounded-xl flex items-center justify-center`}>
                <item.icon size={14} strokeWidth={2.5} />
              </div>
              <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-tighter">{item.label}</h4>
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
