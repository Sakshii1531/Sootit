import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Calendar, MapPin, Navigation, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserBookingSuccess = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen flex flex-col font-inter text-slate-900">
            {/* Animating Background Circles */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.05, 0.03] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-20 -right-20 h-80 w-80 bg-slate-900 rounded-full blur-3xl" 
                />
            </div>

            <div className="flex-1 flex flex-col items-center justify-start p-8 pt-24 pb-28 min-h-full">
                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="h-28 w-28 bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl shadow-slate-900/40 mb-10 relative"
                >
                    <CheckCircle2 size={48} strokeWidth={3} />
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-[2.5rem] border-2 border-slate-900 animate-ping opacity-20"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-black tracking-tighter mb-3">Expert Booked.</h1>
                    <p className="text-sm font-bold text-slate-400 max-w-[260px] mx-auto leading-relaxed">Your professional is on the way. You can track the progress in your active services.</p>
                </motion.div>

                {/* Details Card - Premium Polish */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="w-full bg-gradient-to-br from-white to-slate-50 p-7 rounded-[2.8rem] border-2 border-slate-100/80 relative overflow-hidden mb-10 shadow-xl shadow-black/[0.02]"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                       <Navigation size={60} strokeWidth={3} />
                    </div>
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="h-5 w-5 bg-slate-900 rounded-lg flex items-center justify-center shadow-lg shadow-slate-900/20">
                                <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse" />
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900">Arriving in 15 mins</span>
                        </div>
                        <div className="h-[1px] w-full bg-slate-100" />
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="h-7 w-7 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm">
                                    <User size={14} className="text-slate-900" />
                                </div>
                                <span className="text-xs font-bold text-slate-500">Expert: <span className="text-slate-900 font-black">Rahul Deshmukh</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-7 w-7 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm">
                                    <MapPin size={14} className="text-slate-900" />
                                </div>
                                <span className="text-xs font-bold text-slate-500">To: <span className="text-slate-900 font-black">Terminal 1, Delhi</span></span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="w-full space-y-3"
                >
                    <button 
                        onClick={() => navigate('/user/orders')}
                        className="w-full bg-slate-900 text-white py-4.5 p-4 rounded-[1.8rem] font-black uppercase tracking-[0.25em] text-[10px] flex items-center justify-center gap-2 shadow-2xl shadow-slate-900/30 active:scale-95 transition-all"
                    >
                        Track Status <ArrowRight size={14} strokeWidth={3} />
                    </button>
                    <button 
                        onClick={() => navigate('/user')}
                        className="w-full bg-white border border-slate-100 text-slate-400 py-4.5 p-4 rounded-[1.8rem] font-black uppercase tracking-[0.25em] text-[10px] active:bg-slate-50 transition-all active:scale-95 shadow-sm"
                    >
                        Go Home
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default UserBookingSuccess;
