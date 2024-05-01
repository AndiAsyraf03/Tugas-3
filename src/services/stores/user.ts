import { create } from "zustand";
import { User } from "../api/get-users";

interface userState {
    users: User[];
}
interface userAction {
    setUsers: (payload: User[]) => void;
}

type userStore = userState & userAction


export const useUserStore = create<userStore>((set) => ({
    users: [],

    setUsers: (payload: User[]) => set({users: payload})
}));