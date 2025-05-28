import {create} from 'zustand'
import type { ChatBotPageState } from '../types/types';


export const useChatBotPageStore = create<ChatBotPageState>()((set) => ({
    isChatBotOpen: false,
    openChatBotPage: () => set((state) => ({ isChatBotOpen: !state.isChatBotOpen })),
}));