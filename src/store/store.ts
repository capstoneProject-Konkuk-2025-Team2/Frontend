import { create } from 'zustand'
import type { AddTimeTableState, ChatBotPageState } from '../types/types';


export const useChatBotPageStore = create<ChatBotPageState>()((set) => ({
    isChatBotOpen: false,
    openChatBotPage: () => set((state) => ({ isChatBotOpen: !state.isChatBotOpen })),
}));

export const useAddTimeTableStore = create<AddTimeTableState>()((set) => ({
    isEditing: false,
    setIsEditing: () => set((state) => ({ isEditing: !state.isEditing })),
}));
