import { create } from 'zustand'
import type { AddTimeTableState, ChatBotPageState, LoadTableState, PresetState, SelectedCellState } from '../types/types';


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

export const usePresetStore = create<PresetState>()((set) => ({
    presets: [
        {
            id: "1",
            eventName: '컴퓨터네트워크2',
            eventDetail: '공B471',
            color: '#005B3F'
        }
    ],

    setPresets: () => set(state => ({
        presets: state.presets
    }))
}))

export const useLoadTableStore = create<LoadTableState>()((set) => ({
    // 현재 더미 데이터
    loadTable: [
        {
            id: 'event-1',
            day: 'TUE',
            startTime: '0900',
            endTime: '1030',
            eventName: '주간 회의',
            eventDetail: '팀 전체 주간 목표 공유',
            color: '#D1E7DD', // 연한 녹색
        },
        {
            id: 'event-2',
            day: 'WED',
            startTime: '1400',
            endTime: '1600',
            eventName: '디자인 리뷰',
            eventDetail: '새로운 기능 UI/UX 검토fefaafaefaefefe',
            color: '#CFE2FF', // 연한 파랑
        },
        {
            id: 'event-3',
            day: 'FRI',
            startTime: '1100',
            endTime: '1230',
            eventName: '개인 프로젝트',
            eventDetail: '',
            color: '#FFF3CD', // 연한 노랑
        },
    ],
    setLoadTable: () => set(state => ({
        loadTable: state.loadTable
    }))
}))

// export interface SelectedCellState {
//     selectedCell: selectedTime[];
//     setSelectedCell: (newCell: selectedTime) => void;
// }

// export interface selectedTime {
//     timeInfo: string;
//     dayInfo: string;
// }