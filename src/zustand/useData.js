import { create } from "zustand";

const useData = create((set) => ({
  backendUrl: "http://localhost:8000",
  setBackendurl: (url) => set({ backendUrl: url }),

  taskData: {},
  setTaskData: (data) => set({ taskData: data }),

}));

export default useData;
