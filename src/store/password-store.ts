import { create } from "zustand";
import { TPassword } from "@/types";
const passwordStore = create((set) => ({
  passwords: [],
  storePassword: (password: TPassword) =>
    set((state: any) => ({ passwords: [...state.passwords, password] })),
}));
export default passwordStore;
