import { create } from "zustand";

const useData = create((set) => ({

  backendUrl: "https://fastcartbackend.onrender.com",
  setBackendurl: (url) => set({ backendUrl: url }),


  taskName: "",
  setTaskName: (name) => set({ taskName: name }),

  taskDetails: "",
  setTaskDetails: (details) => set({ taskDetails: details }),
}));

export default useData;
