// A simple local-storage based state manager for Vendor Mock App
export const getVendorData = () => {
  const data = localStorage.getItem('vendor_data');
  if (data) return JSON.parse(data);
  return null;
};

export const setVendorData = (data) => {
  localStorage.setItem('vendor_data', JSON.stringify(data));
  // Dispatch a custom event so other components can listen to changes if needed
  window.dispatchEvent(new Event('vendor_data_updated'));
};

export const initVendorState = (profile) => {
  const initialState = {
    isLoggedIn: true,
    profile,
    jobsApplied: [],
  };
  setVendorData(initialState);
  return initialState;
};

export const logoutVendor = () => {
  localStorage.removeItem('vendor_data');
};

export const applyForJob = (jobId) => {
  const data = getVendorData();
  if (!data) return false;

  data.jobsApplied.push(jobId);
  setVendorData(data);
  return true;
};

export const rechargeWallet = (amount) => {
  const data = getVendorData();
  if (!data) return;

  data.wallet += amount;
  data.transactions.unshift({
    id: "TX-" + Math.floor(Math.random() * 1000),
    type: "Wallet Recharged",
    sign: "+",
    amount: amount.toFixed(2),
    date: new Date().toLocaleString(),
    isDeduct: false
  });

  setVendorData(data);
};
