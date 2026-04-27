import { motion } from "framer-motion";
import { ArrowLeft, Send, CheckCircle2, MapPin, Calendar, Clock, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RequirementForm = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [vehicleType, setVehicleType] = useState('');
  const [workType, setWorkType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!vehicleType || !workType) {
        alert("Please select vehicle and work type");
        return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
        navigate('/owner-dashboard');
    }, 2000);
  };

  if (isSubmitted) {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="h-24 w-24 bg-green-500 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-green-500/30 mb-8"
            >
                <CheckCircle2 size={48} strokeWidth={3} />
            </motion.div>
            <h1 className="text-3xl font-black tracking-tighter mb-2 text-slate-900">Requirement Posted.</h1>
            <p className="text-[15px] font-bold text-neutral-500 max-w-[240px]">We're matching you with the best professionals in our network.</p>
        </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen font-inter pb-20">
      <header className="bg-white px-6 py-6 border-b border-slate-100 flex items-center gap-4 sticky top-0 z-30">
        <button onClick={() => navigate(-1)} className="h-10 w-10 bg-neutral-50 rounded-xl flex items-center justify-center text-slate-900 border border-black/5 shadow-sm active:scale-90 transition-all">
          <ArrowLeft size={20} strokeWidth={2.5} />
        </button>
        <div className="flex flex-col leading-none">
          <span className="text-[10px] font-black uppercase text-[#C44545] tracking-[0.2em] mb-1">Post Job</span>
          <h1 className="text-xl font-black text-slate-900 tracking-tighter">Driver Requirement.</h1>
        </div>
      </header>

      <div className="p-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm max-w-2xl mx-auto"
        >
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                    {/* Vehicle Type */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Vehicle Type</label>
                        <div className="grid grid-cols-2 gap-3">
                            {['Sedan/SUV', 'Luxury', 'Truck/LCV', 'Bus/Tempo'].map(type => (
                                <button 
                                    key={type} 
                                    type="button" 
                                    onClick={() => setVehicleType(type)}
                                    className={`py-4 border rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${vehicleType === type ? 'bg-[#C44545] text-white border-[#C44545] shadow-lg shadow-[#C44545]/20' : 'border-slate-100 bg-slate-50 text-slate-400'}`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Duty Duration */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Work Type</label>
                        <div className="flex gap-3">
                            {['Permanent', 'Daily', 'One-way Trip'].map(type => (
                                <button 
                                    key={type} 
                                    type="button" 
                                    onClick={() => setWorkType(type)}
                                    className={`flex-1 py-4 border rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${workType === type ? 'bg-[#C44545] text-white border-[#C44545] shadow-lg shadow-[#C44545]/20' : 'border-slate-100 bg-slate-50 text-slate-400'}`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Reporting Location</label>
                        <div className="relative group">
                            <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-300 group-focus-within:text-[#C44545] transition-colors" size={18} />
                            <input type="text" placeholder="Enter full address..." required className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-14 pr-6 text-sm font-bold focus:bg-white focus:border-[#C44545]/20 focus:outline-none transition-all" />
                        </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 ml-1">Job Description (Optional)</label>
                        <textarea placeholder="Specify any requirements (e.g. Clean record, experience with EVs...)" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 text-sm font-bold focus:bg-white focus:border-[#C44545]/20 focus:outline-none transition-all min-h-[100px] resize-none" />
                    </div>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-[#C44545] text-white py-5 rounded-2xl font-black uppercase text-[12px] tracking-[0.2em] shadow-2xl shadow-[#C44545]/30 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
                >
                    Submit Posting <Send size={18} strokeWidth={3} />
                </button>
            </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RequirementForm;
