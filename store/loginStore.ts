import { create } from "zustand";

interface LoginState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  updateFirstName: (value:string) => void;
  updateLastName: (value:string) => void;
  updateEmail: (value:string) => void;
  updatePassword: (value:string) => void;
}




export const useLogin = create<LoginState>((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  password: "",

  updateFirstName: (value: string) => set({ firstName: value }),
  updateLastName: (value: string) => set({ lastName: value }),
  updateEmail: (value: string) => set({ email: value }),
  updatePassword: (value: string) => set({ password: value }),
}));



