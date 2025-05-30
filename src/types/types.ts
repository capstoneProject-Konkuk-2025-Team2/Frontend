export interface ChatBotPageState {
    isChatBotOpen: boolean;
    openChatBotPage: () => void;
}

export interface AddTimeTableState {
    isEditing: boolean;
    setIsEditing: () => void;
}

export interface SelectedCellState {
    selectedCell: selectedTime[];
    setSelectedCell: (newCell: selectedTime[]) => void;
}

export interface selectedTime {
    timeInfo: string;
    dayInfo: string;
}