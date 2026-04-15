import { motion } from "framer-motion";
import { ArrowLeft, Star, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PremiumSelectionPage = () => {
    const navigate = useNavigate();

    const banners = [
        { name: "Amit Vikram", type: "Expert Driver", rate: "4.9", jobs: "120+", img: "https://images.unsplash.com/photo-1549813069-f95e44d7f498?q=80&w=400", clr: "from-slate-900/90 to-slate-900/10" },
        { name: "S. K. Garage", type: "Mechanic", rate: "4.8", jobs: "310+", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=400", clr: "from-neutral-900/90 to-neutral-900/10" },
        { name: "Fast Towing", type: "Expert", rate: "4.7", jobs: "85+", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=400", clr: "from-slate-800/90 to-slate-800/10" },
        { name: "RTO Consult", type: "Legal Expert", rate: "4.9", jobs: "250+", img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400", clr: "from-slate-900/90 to-slate-900/10" }
    ];

    return (
        <div className="bg-white min-h-screen font-inter p-5 pb-28">
            <header className="flex items-center gap-4 mb-8">
                <button 
                    onClick={() => navigate(-1)}
                    className="h-10 w-10 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 active:scale-90 transition-all"
                >
                    <ArrowLeft size={20} className="text-slate-900" />
                </button>
                <div>
                    <h2 className="text-xl font-black text-slate-900 tracking-tight leading-none mb-1">Premium Selection</h2>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">All Experts In Focus</span>
                </div>
            </header>

            <div className="grid grid-cols-1 gap-5">
                {banners.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`w-full h-40 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-black/5`}
                    >
                        <img src={p.img} className="absolute inset-0 w-full h-full object-cover" alt="B" />
                        <div className={`absolute inset-0 bg-gradient-to-r ${p.clr}`} />
                        
                        <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/10">
                                    <Star size={18} className="text-white fill-white" />
                                </div>
                                <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10">
                                    <span className="text-white text-xs font-bold tracking-widest">★ {p.rate}</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white text-xl font-black tracking-tight leading-none mb-1">{p.name}</h4>
                                <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.1em] leading-none">{p.type} • {p.jobs} Active</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PremiumSelectionPage;
