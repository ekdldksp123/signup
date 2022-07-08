import { IsMember } from './../types/Store';
import create from 'zustand';

export const useMember = create<IsMember>((set) => ({
    isMember: false,
    setIsMember: () => set((state:IsMember) => ({isMember: !state.isMember}))
}))