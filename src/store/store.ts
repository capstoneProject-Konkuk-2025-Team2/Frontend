import { create } from 'zustand'
import type { AddTimeTableState, ChatBotPageState, SelectedCellState } from '../types/types';


export const useChatBotPageStore = create<ChatBotPageState>()((set) => ({
    isChatBotOpen: false,
    openChatBotPage: () => set((state) => ({ isChatBotOpen: !state.isChatBotOpen })),
}));

export const useAddTimeTableStore = create<AddTimeTableState>()((set) => ({
    isEditing: false,
    setIsEditing: () => set((state) => ({ isEditing: !state.isEditing })),
}));


export const useSelectCellStore = create<SelectedCellState>()((set) => ({
    selectedCell: [],
    setSelectedCell: (newCell) => set(() => ({
        selectedCell: newCell
    }))
}));

// export interface SelectedCellState {
//     selectedCell: selectedTime[];
//     setSelectedCell: (newCell: selectedTime) => void;
// }

// export interface selectedTime {
//     timeInfo: string;
//     dayInfo: string;
// }