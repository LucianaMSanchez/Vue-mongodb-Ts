import create from 'zustand';
import { User } from '@/interfaces/User';


type UserStore = {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
};


export const useUserStore = create<UserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
}));