import { motion } from "framer-motion";
import { ArrowLeft, MessageSquare, Phone, Mail, HelpCircle, ChevronRight, MessageCircle, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserSupport = () => {
    const navigate = useNavigate();

    const faqs = [
        "How to book an expert driver?",
        "What are the towing charges?",
        "How to verify expert quality?",
        "Wallet money not credited"
    ];

    return (
        <div className="bg-white min-h-screen pb-24 font-inter text-slate-900 overflow-hidden">
            {/* Header */}
            <div className="px-5 pt-10 pb-12 bg-[#C44545] text-white rounded-b-[3rem] shadow-2xl shadow-[#C44545]/20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 h-40 w-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-20" />
                <button 
                  onClick={() => navigate(-1)} 
                  className="absolute left-5 top-10 h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 active:scale-90 transition-transform"
                >
                    <ArrowLeft size={18} strokeWidth={3} />
                </button>
                <h1 className="text-3xl font-black tracking-tighter mb-2">Help Center.</h1>
                <p className="text-[14px] font-bold text-white/80 uppercase tracking-widest">We are here to assist 24/7</p>
            </div>

            <div className="px-6 -mt-8 relative z-20 space-y-4">
                {/* Communication Cards */}
                <div className="grid grid-cols-2 gap-3">
                    <motion.div whileTap={{ scale: 0.98 }} className="bg-white p-6 rounded-[2.5rem] border border-black/5 shadow-2xl shadow-black/[0.02] flex flex-col items-center gap-3">
                        <div className="h-10 w-10 bg-[#C44545] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#C44545]/20">
                            <MessageCircle size={20} strokeWidth={2.5} />
                        </div>
                        <span className="text-[14px] font-black uppercase tracking-widest text-slate-900">Live Chat</span>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.98 }} className="bg-white p-6 rounded-[2.5rem] border border-black/5 shadow-2xl shadow-black/[0.02] flex flex-col items-center gap-3">
                        <div className="h-10 w-10 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center shadow-sm">
                            <Phone size={20} strokeWidth={2.5} />
                        </div>
                        <span className="text-[14px] font-black uppercase tracking-widest text-slate-900">Call Us</span>
                    </motion.div>
                </div>

                <div className="pt-8">
                    <h3 className="text-[14px] font-black uppercase text-neutral-700 tracking-[0.25em] mb-6 pl-1 border-l-4 border-[#C44545] h-4 flex items-center">Frequent Issues</h3>
                    <div className="space-y-2">
                        {faqs.map((faq, idx) => (
                            <motion.button
                                key={idx}
                                whileTap={{ scale: 0.99 }}
                                className="w-full bg-white border border-slate-200 p-5 rounded-[1.8rem] flex items-center justify-between group active:bg-slate-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-2 bg-[#C44545]/30 group-hover:bg-[#C44545] rounded-full transition-colors" />
                                    <span className="text-[14px] font-black tracking-tight text-slate-800">{faq}</span>
                                </div>
                                <ChevronRight size={16} className="text-neutral-400" strokeWidth={3} />
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Trust Badge */}
                <div className="bg-slate-50 p-8 rounded-[3rem] mt-12 flex flex-col items-center text-center border-2 border-dashed border-slate-100">
                    <ShieldCheck size={32} className="text-[#C44545] mb-4" strokeWidth={2.5} />
                    <h5 className="text-[14px] font-black uppercase tracking-widest mb-2 text-slate-900">Verified Support</h5>
                    <p className="text-[14px] font-bold text-neutral-500 leading-relaxed max-w-[200px]">All support requests are monitored for quality and security.</p>
                </div>
            </div>
        </div>
    );
};

export default UserSupport;
