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

export interface timeCell {
    day: string; //필수, 디폴트 설정⭕
    startTime: string;//필수, 디폴트 설정⭕
    endTime: string;//필수, 디폴트 설정⭕

    eventName: string; //옵션, 디폴트 설정❌ ""? None?
    eventDetail: string;//옵션, 디폴트 설정❌
    color: string; //필수, 디폴트 설정⭕ #f5f5f5
    isSelected: boolean; //필수, 디폴트 설정⭕ false
    isHead: boolean;

    head: string; // 굳이 필요한가? 앞 셀의 endtime과 내 starttime을 비교하면 안되나.
    // 그럼 어떻게 앞 뒤 셀이 서로 비교해볼 수 있나?
    // map 반복할 때 앞 index를 참고?
    // 그 경우 2번째 셀의 endTime은 뭘 가리켜야하는가?
    // 매번 비교하는게 과연 좋은 방법인가?
    // 그냥 isSequence, isHead 처럼 단일 셀인지 병합 셀인지 구분?
    // 하이브리드로, 먼저 isSequence로 
    tail: string;
}