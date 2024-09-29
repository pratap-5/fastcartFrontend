import { create } from "zustand";

const useData = create((set) => ({
  backendUrl: "https://fastcartbackend.onrender.com",
  setBackendurl: (url) => set({ backendUrl: url }),

  taskData: {},
  setTaskData: (data) => set({ taskData: data }),

}));

export default useData;
