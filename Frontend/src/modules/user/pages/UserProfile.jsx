import { motion, AnimatePresence } from "framer-motion";
import { User, Shield, Wallet, ChevronRight, Settings, LogOut, Package, Star, CreditCard, Bell, Lock, HelpCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getUserData, logoutUser } from "../utils/userStore";
import { useState, useEffect } from "react";

const UserProfile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(getUserData() || { profile: { name: "Guest" }, wallet: 0 });

    useEffect(() => {
        const handleUpdate = () => setUser(getUserData());
        window.addEventListener('user_data_updated', handleUpdate);
        return () => window.removeEventListener('user_data_updated', handleUpdate);
    }, []);

    const MenuButton = ({ icon: Icon, label, sublabel, onClick, color = "text-[#C44545]", bg = "bg-white" }) => (
        <button 
            onClick={onClick}
            className="w-full flex items-center justify-between p-3.5 active:bg-rose-100/50 transition-colors group"
        >
            <div className="flex items-center gap-4">
                <div className={`h-10 w-10 ${bg} ${color} rounded-xl flex items-center justify-center shadow-sm group-active:scale-90 transition-transform`}>
                    <Icon size={18} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col items-start">
                    <span className="text-[13px] font-black tracking-tight text-neutral-900">{label}</span>
                    {sublabel && <span className="text-[11px] font-bold text-[#C44545]/60 uppercase tracking-widest">{sublabel}</span>}
                </div>
            </div>
            <ChevronRight size={14} className="text-[#C44545]/30 group-hover:text-[#C44545] transition-colors" strokeWidth={3} />
        </button>
    );

    return (
        <div className="bg-white min-h-screen pb-28 font-inter">
            {/* Custom Header for Profile (Replaces Global Header) */}
            <div className="sticky top-0 z-50 bg-[#C44545] px-6 py-4 flex items-center justify-between shadow-lg">
                <h1 className="text-xl font-black tracking-tight text-white">My Account</h1>
                <button 
                  onClick={() => navigate('/user/preferences')}
                  className="h-10 w-10 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shadow-sm active:scale-90 transition-transform"
                >
                    <Settings size={18} className="text-white" strokeWidth={2.5} />
                </button>
            </div>

            <div className="px-6 pt-8 pb-6">
                {/* Profile Card */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                        <div className="h-20 w-20 bg-[#C44545] rounded-[2rem] flex items-center justify-center text-white text-2xl font-black shadow-2xl shadow-[#C44545]/30 border-2 border-white">
                            {user.profile.name?.[0] || 'U'}
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 h-6 w-6 bg-[#C44545] rounded-full border-2 border-white flex items-center justify-center">
                            <Shield size={10} className="text-white" fill="white" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-black text-slate-900 tracking-tight leading-none mb-1">{user.profile.name || "Arjun Dev"}</h2>
                        <span className="text-[11px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-2 block">ID: USR-7721A-09</span>
                        <div className="w-fit inline-flex items-center gap-1 bg-[#C44545] text-white px-2.5 py-1 rounded-lg border border-white/10 shadow-sm">
                            <Star size={10} className="fill-white text-white" />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-none">Premium User</span>
                        </div>
                    </div>
                </div>



                {/* Menu Sections */}
                <div className="space-y-10">
                    <section>
                        <h3 className="text-[13px] font-black uppercase text-[#C44545]/40 tracking-[0.25em] mb-5 pl-1">Booking & Rating</h3>
                        <div className="bg-rose-50 border border-rose-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/[0.01]">
                            <MenuButton 
                                icon={Package} 
                                label="My Service History" 
                                sublabel="Manage Bookings" 
                                bg="bg-white" 
                                color="text-[#C44545]"
                                onClick={() => navigate('/user/orders')}
                            />
                            <div className="mx-6 border-t border-neutral-50" />
                            <MenuButton 
                                icon={Star} 
                                label="My Rated Experts" 
                                sublabel="Expert Feedback" 
                                bg="bg-white" 
                                color="text-[#C44545]"
                                onClick={() => navigate('/user/reviews')}
                            />
                        </div>
                    </section>

                    <section>
                        <h3 className="text-[13px] font-black uppercase text-[#C44545]/40 tracking-[0.25em] mb-5 pl-1">System & Personal</h3>
                        <div className="bg-rose-50 border border-rose-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-black/[0.01]">
                            <MenuButton 
                                icon={HelpCircle} 
                                label="Help & Support" 
                                sublabel="24/7 Assistance" 
                                bg="bg-white" 
                                color="text-[#C44545]"
                                onClick={() => navigate('/user/support')}
                            />
                            <div className="mx-6 border-t border-neutral-50" />
                            <MenuButton 
                                icon={Settings} 
                                label="App Settings" 
                                sublabel="UI & Themes" 
                                bg="bg-white" 
                                color="text-[#C44545]"
                                onClick={() => navigate('/user/preferences')}
                            />
                        </div>
                    </section>

                    {/* Sign Out Card */}
                    <motion.button 
                        whileTap={{ scale: 0.98 }}
                        onClick={logoutUser}
                        className="w-full h-16 bg-rose-50 text-[#C44545] rounded-[1.8rem] border border-rose-100 flex items-center justify-center gap-4 font-black uppercase text-[12px] tracking-[0.3em] active:scale-95 transition-all shadow-xl shadow-[#C44545]/5 mb-10"
                    >
                        <LogOut size={16} strokeWidth={3} />
                        Logout Session
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
