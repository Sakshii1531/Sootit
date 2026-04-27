import { motion } from "framer-motion";
import { User, ShieldCheck, Mail, Phone, MapPin, Search, Filter } from "lucide-react";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

/**
 * Admin Users List Page
 * Displays detailed information about users.
 */
const AdminUsers = () => {
  const navigate = useNavigate();

  const usersList = [
    { id: 1, name: "Rahul Sharma", email: "rahul@example.com", phone: "+91 98765 43210", location: "Delhi", status: "Active" },
    { id: 2, name: "Sanya Gupta", email: "sanya@example.com", phone: "+91 87654 32109", location: "Mumbai", status: "Active" },
    { id: 3, name: "Vikram Singh", email: "vikram@example.com", phone: "+91 76543 21098", location: "Bangalore", status: "Inactive" },
    { id: 4, name: "Ananya Iyer", email: "ananya@example.com", phone: "+91 65432 10987", location: "Chennai", status: "Active" },
    { id: 5, name: "Arjun Verma", email: "arjun@example.com", phone: "+91 54321 09876", location: "Pune", status: "Active" },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen pb-24 font-sans">
      {/* Header Section */}
      <section className="px-5 py-6 bg-[#C44545] text-white rounded-b-[2.5rem] shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-white rounded-2xl overflow-hidden flex items-center justify-center border border-white/10 shadow-xl cursor-pointer" onClick={() => navigate('/admin')}>
              <img src={logo} alt="Logo" className="w-full h-full object-cover p-1.5" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[12px] font-black uppercase text-white/60 tracking-[0.2em]">Management</span>
              <h1 className="text-xl font-black tracking-tighter text-white">User Directory.</h1>
            </div>
          </div>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 backdrop-blur-sm"
          >
            <Filter size={16} className="text-white" />
          </motion.button>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search size={14} className="text-white/40 group-focus-within:text-white transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search users by name, email or city..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-10 pr-4 text-xs font-medium focus:bg-white/10 focus:border-white/20 focus:outline-none transition-all placeholder:text-white/20"
          />
        </div>
      </section>

      {/* Users List */}
      <section className="px-4 py-8">
        <div className="flex items-center justify-between mb-6 px-1">
          <h2 className="text-xs font-black text-[#C44545] uppercase tracking-[0.2em]">Registered Users</h2>
          <span className="text-[12px] font-bold text-neutral-500">{usersList.length} total</span>
        </div>

        <div className="space-y-3">
          {usersList.map((user) => (
            <motion.div 
              key={user.id}
              whileTap={{ scale: 0.98 }}
              className="bg-white py-2 px-4 rounded-[1.5rem] border-2 border-slate-300 shadow-sm space-y-2"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-900 border border-black/5 flex-shrink-0">
                  <User size={20} strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="text-sm font-black tracking-tight text-[#C44545] truncate">{user.name}</h3>
                    <div className={`px-2 py-0.5 rounded-lg text-[11px] font-black uppercase tracking-widest flex-shrink-0 ${
                      user.status === 'Active' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'
                    }`}>
                      {user.status}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5 text-neutral-500">
                    <MapPin size={10} className="flex-shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">{user.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="h-7 w-7 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 border border-slate-100 flex-shrink-0">
                    <Mail size={12} />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 border border-slate-100 flex-shrink-0">
                    <Phone size={12} />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600 whitespace-nowrap">{user.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminUsers;
