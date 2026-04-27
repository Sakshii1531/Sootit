import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, MapPin, Navigation, Phone, Shield, Clock, Filter, Search } from "lucide-react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const CategoryDetails = () => {
    const navigate = useNavigate();
    const { category } = useParams();
    const [searchParams] = useSearchParams();
    const label = searchParams.get('label') || category;

    const experts = [
        { name: "Rahul Deshmukh", exp: "8 Years", rating: "4.9", reviews: "128", status: "Available", img: "https://i.pravatar.cc/150?u=rahul" },
        { name: "Vikram Singh", exp: "5 Years", rating: "4.8", reviews: "94", status: "Online", img: "https://i.pravatar.cc/150?u=vikram" },
        { name: "Sanjay Kumar", exp: "12 Years", rating: "5.0", reviews: "210", status: "Available", img: "https://i.pravatar.cc/150?u=sanjay" },
    ];

    return (
        <div className="bg-[#FAFBFD] min-h-screen pb-28 font-inter">
            {/* Header - Ultra Premium */}
            <div className="px-5 pt-4 pb-6 flex items-center justify-between sticky top-0 bg-[#C44545] shadow-lg z-50">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => navigate(-1)} 
                        className="h-11 w-11 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center active:scale-90 transition-all"
                    >
                        <ArrowLeft size={18} strokeWidth={3} className="text-white" />
                    </button>
                    <div>
                        <h1 className="text-xl font-black tracking-tighter leading-none mb-1.5 text-white">{label}</h1>
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] font-black uppercase text-white/60 tracking-[0.2em] leading-none">Verified Results</span>
                            <div className="h-1 w-1 bg-white/20 rounded-full" />
                            <span className="text-[11px] font-black uppercase text-white tracking-[0.2em] leading-none">{experts.length} Available</span>
                        </div>
                    </div>
                </div>
                <button className="h-11 w-11 bg-white text-[#C44545] rounded-2xl flex items-center justify-center shadow-lg active:scale-90 transition-all">
                    <Filter size={18} strokeWidth={2.5} />
                </button>
            </div>

            {/* Quick Filter Pill */}
            <div className="px-5 py-4 flex gap-2 overflow-x-auto hide-scrollbar">
                {['Top Rated', 'Near Me', 'Exp. 5+ Yrs'].map((f, i) => (
                    <span key={i} className="whitespace-nowrap px-4 py-2 bg-[#C44545] border border-white/10 rounded-full text-[12px] font-black uppercase tracking-widest text-white shadow-lg shadow-[#C44545]/20">
                        {f}
                    </span>
                ))}
            </div>

            <div className="p-5 space-y-5">
                {experts.map((expert, idx) => (
                    <motion.div
                        key={idx}
                        whileTap={{ scale: 0.98 }}
                        className="bg-rose-50 border border-rose-100 rounded-[2.5rem] p-6 shadow-2xl shadow-black/[0.02] flex flex-col gap-5 transition-all group relative overflow-hidden"
                    >
                        {/* Status Badge */}
                        <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                             <div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse" />
                             <span className="text-[11px] font-black uppercase tracking-wider text-green-600">{expert.status}</span>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="h-16 w-16 rounded-[1.8rem] overflow-hidden shadow-2xl shadow-black/10 border-2 border-white ring-2 ring-rose-100 relative">
                                <img src={expert.img} className="h-full w-full object-cover" alt="X" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-base font-black text-slate-900 tracking-tight leading-none uppercase mb-2">{expert.name}</h3>
                                <div className="flex items-center gap-4 font-inter">
                                    <div className="flex items-center gap-1.5">
                                        <div className="h-5 w-5 bg-yellow-50 rounded-lg flex items-center justify-center border border-yellow-100">
                                            <Star size={10} className="fill-yellow-500 text-yellow-500" />
                                        </div>
                                        <span className="text-[12px] font-black text-slate-900">{expert.rating}</span>
                                        <span className="text-[11px] font-bold text-slate-400">({expert.reviews})</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="h-5 w-5 bg-white rounded-lg flex items-center justify-center border border-rose-100">
                                            <Shield size={10} className="text-slate-900" />
                                        </div>
                                        <span className="text-[12px] font-black uppercase tracking-widest text-slate-900">{expert.exp}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-5 border-t border-black/[0.03]">
                            <div>
                                <span className="text-[11px] font-black uppercase text-slate-400 tracking-[0.15em] block mb-1 leading-none">Expert Rating</span>
                                <h4 className="text-base font-black text-slate-900 tracking-tighter leading-none">{expert.rating} Stars</h4>
                            </div>
                            <button 
                                onClick={() => navigate('/user/booking-success')}
                                className="bg-[#C44545] text-white px-4 py-2.5 rounded-xl font-black uppercase text-[12px] tracking-[0.15em] shadow-2xl shadow-[#C44545]/25 active:scale-95 transition-all flex items-center gap-1.5"
                            >
                                Hire Now <ArrowRight size={12} strokeWidth={3} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CategoryDetails;
