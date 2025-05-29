export interface ChatBotPageState {
    isChatBotOpen: boolean;
    openChatBotPage: () => void;
}

export interface AddTimeTableState {
    isEditing: boolean;
    setIsEditing: () => void;
}