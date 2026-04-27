import { motion } from "framer-motion";
import { Bell, MapPin, Search, ChevronDown, User, ShieldCheck, Globe, LogOut, Wallet } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserData } from "../../modules/user/utils/userStore";
import { getVendorData } from "../../modules/vendor/utils/vendorStore";
import logo from "../../assets/logo.png";

const AppHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isVendor = currentPath.startsWith('/vendor');
  const isAdmin = currentPath.startsWith('/admin');

  const [data, setData] = useState(isVendor ? getVendorData() : getUserData());

  useEffect(() => {
    const handleUpdate = () => {
      setData(isVendor ? getVendorData() : getUserData());
    };
    window.addEventListener('user_data_updated', handleUpdate);
    window.addEventListener('vendor_data_updated', handleUpdate);
    return () => {
      window.removeEventListener('user_data_updated', handleUpdate);
      window.removeEventListener('vendor_data_updated', handleUpdate);
    };
  }, [isVendor]);

  // Hide Top Header on Auth & Profile Pages for custom headers
  const hideHeaderRoutes = ['/', '/vendor/login', '/vendor/register', '/user/login', '/user/register', '/user/profile', '/user/orders', '/user/reviews', '/user/preferences', '/user/history'];
  const shouldHideHeader = hideHeaderRoutes.includes(currentPath) || currentPath.startsWith('/user/category/');
  if (shouldHideHeader) return null;

  return (
    <motion.header 
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-[#C44545] shadow-lg py-2 px-3 flex items-center justify-between h-20 font-inter"
    >
      <div className="flex items-center gap-3 group">
        <div className="h-14 w-14 overflow-hidden flex items-center justify-center transition-transform active:scale-95">
          <img src={logo} alt="Sootit" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col">
          <span className="text-[11px] font-black text-white/60 uppercase tracking-[0.25em] mb-1">{isAdmin ? 'System' : isVendor ? 'Partner' : 'Service'}</span>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-base font-black text-white tracking-tight">
              {isAdmin ? 'DeepMind' : data?.profile?.name || (isVendor ? 'Partner' : 'Service')}
            </span>
             <ChevronDown size={14} className="text-white" strokeWidth={3} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Bell size={20} className="text-white" strokeWidth={2.5} />
          <div className="absolute top-0 right-0 h-2 w-2 bg-white rounded-full border-2 border-[#C44545]" />
        </div>
        
        <div className="h-10 w-10 overflow-hidden rounded-2xl border-2 border-rose-100 ring-2 ring-rose-50 shadow-md">
          <img src={`https://i.pravatar.cc/80?u=${isAdmin ? 'admin' : isVendor ? 'vendor' : 'user'}`} alt="P" className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.header>
  );
};

export default AppHeader;
