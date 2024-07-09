import { create } from "zustand";

const useData = create((set) => ({
  //   bears: 0,
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
  //   updateBears: (newBears) => set({ bears: newBears }),

  backendUrl: "https://fastcartbackend.onrender.com",

  setBackendurl: (url) => set({ backendUrl: url }),

  productDetails: {},
  setProductDetails: (product) => set({ productDetails: product }),

  products: [],
  setProducts: (product) => set({ products: product }),

  searchList: [],
  setSearchList: (items) => set({ searchList: items }),

  carts: [],
  setCarts: (carts) => set({ carts }),
}));

export default useData;
