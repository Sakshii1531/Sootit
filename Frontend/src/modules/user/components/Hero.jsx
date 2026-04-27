import { motion } from "framer-motion";
import { Search, MapPin, Navigation, Car, Shield, User, ArrowRight, Star, Wallet, Wrench, Briefcase, FileText, Truck, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBanner from "../../../assets/images/hero_banner.png";

/**
 * Micro-App Hero for Sootit
 * High density info architecture
 */
const AppHero = ({ user }) => {
    const navigate = useNavigate();
    return (
        <div className="bg-transparent font-inter">
            {/* Bold Visual Banner */}
            <div className="px-5 pt-8 pb-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative h-48 w-full bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 group"
                >
                    <img 
                        src={heroBanner} 
                        className="absolute inset-0 h-full w-full object-cover"
                        alt="Banner"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl z-20" />
                    
                    <div className="relative z-30 h-full flex flex-col justify-center pl-8 pr-4">
                        <span className="text-white/90 text-[9px] font-black uppercase tracking-[0.3em] mb-2 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">Premium Ecosystem</span>
                        <h2 className="text-3xl font-black text-white leading-none tracking-tighter mb-3">Professional<br/><span className="text-white/80">Vehicle Experts.</span></h2>
                        <button className="invisible mt-2 w-fit bg-white text-[#C44545] px-6 py-2.5 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl active:scale-95 transition-all">
                            Explore Services
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Micro Multi-Data Bar (Search + Services) */}
            <div className="px-5 mb-8">
                <div className="relative group mb-8">
                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                        <Search size={18} className="text-[#C44545]" strokeWidth={2.5} />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search for mechanics, drivers..." 
                        className="w-full bg-white border border-rose-200 rounded-[1.5rem] py-5 pl-14 pr-6 text-sm font-bold text-slate-800 focus:outline-none focus:border-[#C44545] focus:ring-4 focus:ring-rose-50 transition-all placeholder:text-[#C44545]/70 placeholder:text-[11px]"
                    />
                </div>

                {/* Services Micro-Scroll */}
                <div>
                    <h3 className="text-[10px] font-black uppercase text-slate-600 tracking-[0.2em] mb-4 pl-1">Prime Services</h3>
                    <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
                        {[
                            { icon: Car, label: "Drivers", clr: "bg-rose-50 text-[#C44545]" },
                            { icon: Wrench, label: "Mechanics", clr: "bg-rose-50 text-[#C44545]" },
                            { icon: Truck, label: "Towing", clr: "bg-rose-50 text-[#C44545]" },
                            { icon: FileText, label: "RTO Help", clr: "bg-rose-50 text-[#C44545]" },
                            { icon: Briefcase, label: "Legal", clr: "bg-rose-50 text-[#C44545]" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileTap={{ scale: 0.90 }}
                                onClick={() => navigate(`/user/category/${item.label.toLowerCase()}?label=${item.label}`)}
                                className="flex flex-col items-center gap-3 group cursor-pointer min-w-[70px]"
                            >
                                <div className={`h-16 w-16 rounded-[1.6rem] flex items-center justify-center ${item.clr} border border-black/5 shadow-xl transition-all duration-200 active:bg-[#C44545] active:text-white active:shadow-[#C44545]/20`}>
                                    <item.icon size={22} strokeWidth={2.5} />
                                </div>
                                <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppHero;
