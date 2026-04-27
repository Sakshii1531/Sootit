import { motion } from "framer-motion";
import { Briefcase, Search, Menu, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

const AdminJobs = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeJobs = [
    { id: 'JOB-9021', service: 'Car Repair', provider: 'Sharma Garage', customer: 'Rahul Sharma', location: 'Mumbai', status: 'Ongoing', time: '2h ago' },
    { id: 'JOB-4829', service: 'Express Driver', provider: 'Amit Singh', customer: 'Sanya Gupta', location: 'Delhi', status: 'In Transit', time: '15m ago' },
    { id: 'JOB-2831', service: 'Towing Service', provider: 'Metro Towing', customer: 'Vikram Singh', location: 'Pune', status: 'Completed', time: '5h ago' },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen font-inter flex">
      <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 lg:ml-72 flex flex-col">
        <header className="bg-white px-6 py-6 border-b border-slate-100 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden h-10 w-10 bg-neutral-50 rounded-xl flex items-center justify-center border border-black/5">
              <Menu size={20} strokeWidth={2.5} />
            </button>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-black uppercase text-[#C44545] tracking-[0.2em] mb-1">Monitoring</span>
              <h1 className="text-xl font-black text-slate-900 tracking-tighter">Job Board.</h1>
            </div>
          </div>
        </header>

        <div className="p-6">
            <div className="space-y-4">
                {activeJobs.map((job) => (
                    <motion.div 
                        key={job.id}
                        className="bg-white p-6 rounded-[2.5rem] border border-slate-200 shadow-sm"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-[10px] font-black text-[#C44545] uppercase tracking-widest block mb-1">{job.id} • {job.service}</span>
                                <h3 className="text-sm font-black tracking-tight text-slate-900">Provider: {job.provider}</h3>
                            </div>
                            <div className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                                job.status === 'Ongoing' ? 'bg-blue-50 text-blue-600' : 
                                job.status === 'Completed' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                            }`}>
                                {job.status}
                            </div>
                        </div>

                        <div className="flex items-center gap-6 py-4 border-y border-slate-50 mb-4">
                            <div className="flex items-center gap-2">
                                <MapPin size={12} className="text-neutral-400" />
                                <span className="text-[12px] font-bold text-neutral-500">{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={12} className="text-neutral-400" />
                                <span className="text-[12px] font-bold text-neutral-500">{job.time}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">Customer</span>
                                <span className="text-[12px] font-bold text-slate-700">{job.customer}</span>
                            </div>
                            <button className="text-[11px] font-black text-[#C44545] uppercase tracking-widest hover:underline transition-all">View Details</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminJobs;
