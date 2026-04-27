import { motion } from "framer-motion";
import { ArrowLeft, Package, Clock, Star, MapPin, ChevronRight, Navigation, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UserOrders = () => {
    const navigate = useNavigate();
    const orders = [
        { id: "ORD-9821", expert: "Amit Vikram", type: "Expert Driver", date: "Today, 10:30 AM", status: "Active", icon: Navigation, clr: "bg-[#C44545] text-white" },
        { id: "ORD-7712", expert: "Sharma Garage", type: "Full Service", date: "Yesterday, 04:15 PM", status: "Completed", icon: Wrench, clr: "bg-slate-100 text-slate-800" },
        { id: "ORD-6623", expert: "Towing Kings", type: "Emergency Tow", date: "02 Apr, 2024", status: "Cancelled", icon: Package, clr: "bg-neutral-50 text-neutral-400" },
    ];

    return (
        <div className="bg-[#FAFBFD] min-h-screen pb-24 font-inter text-neutral-900">
            {/* Header */}
            <div className="px-5 pt-10 pb-5 flex items-center gap-3 border-b border-black/[0.03] sticky top-0 bg-[#FAFBFD]/80 backdrop-blur-md z-50">
                <button onClick={() => navigate(-1)} className="h-9 w-9 bg-white border border-black/5 rounded-xl flex items-center justify-center active:scale-90 transition-transform shadow-sm">
                    <ArrowLeft size={16} strokeWidth={3} />
                </button>
                <h1 className="text-lg font-black tracking-tighter">Service History</h1>
            </div>

            <div className="p-4 space-y-4">
                {orders.map((order, idx) => (
                    <motion.div
                        key={idx}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => navigate(`/user/order/${order.id}`)}
                        className="bg-white border border-black/5 rounded-[2rem] p-5 shadow-xl shadow-black/[0.01] flex flex-col gap-4 active:border-slate-900/30 transition-all group cursor-pointer"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`h-10 w-10 ${order.clr} rounded-2xl flex items-center justify-center shadow-sm`}>
                                    <order.icon size={18} strokeWidth={2.5} />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[15px] font-black text-neutral-900 leading-none mb-1.5">{order.expert}</h3>
                                    <span className="text-[13px] font-black uppercase text-neutral-500 tracking-widest leading-none">{order.type}</span>
                                </div>
                            </div>
                            <span className={`text-[12px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${
                                order.status === 'Active' ? 'bg-[#C44545] text-white' : 
                                order.status === 'Completed' ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-500'
                            }`}>
                                {order.status}
                            </span>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-black/[0.02] text-neutral-400">
                           <div className="flex items-center gap-2 text-neutral-500">
                               <Clock size={12} strokeWidth={2.5} />
                               <span className="text-[13px] font-bold uppercase tracking-widest">{order.date}</span>
                           </div>
                        <span className="text-[13px] font-black uppercase text-slate-500 tracking-[0.2em] leading-none">{order.id}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default UserOrders;
