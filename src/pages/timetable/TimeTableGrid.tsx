
// [
//     {
//         "day": "MON / TUE / WED / THU / FRI / SAT / SUN",
//         "startTime": "11:00:00.000000",
//         "endTime": "11:00:00.000000",
//         "eventName": "분산시스템과컴퓨팅",
//         "eventDetail": "신공1201",
//         "color": "#f6f6f6"
//     }
// ] 

import { useState } from "react";
import { useAddTimeTableStore, useSelectCellStore } from "../../store/store";
import type { Event } from "../../types/types";

// --- Mock 데이터 (실제로는 Zustand 스토어에서 가져옵니다) ---
const mockEvents: Event[] = [
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
];

// --- 헬퍼 상수 및 함수 ---
const TIME_SLOTS = Array.from({ length: 31 }, (_, i) => { // 09:00 ~ 22:30 까지 30분 단위 슬롯
    const hour = String(Math.floor(i / 2) + 9).padStart(2, '0');
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour}${minute}`;
});
const DAY_TO_COL = { MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6, SUN: 7 };


/**
 * 🌟 이벤트 시간 <-> Grid Row 변환 로직 검토 및 확정
 * CSS Grid 라인은 1부터 시작합니다.
 * 09:00는 1번 라인에서 시작, 09:30은 2번 라인에서 시작...
 * endTime은 해당 시간의 시작 라인을 가리킵니다. 
 * 예: 09:00 ~ 10:30 이벤트는 1번 라인에서 시작하여 4번 라인(10:30 시작) 직전까지 차지합니다. (grid-row: 1 / 4)
 */

//1400
const timeToGridRow = (time: string) => {
    const hour = parseInt(time.substring(0, 2)); //14
    const minute = parseInt(time.substring(2, 4)); //00
    return (hour - 9) * 2 + (minute === 30 ? 1 : 0) + 1;
};

const formatTime = (time: string) => `${time.substring(0, 2)}:${time.substring(2, 4)}`;
const formatHour = (time: string) => `${parseInt(time.substring(0, 2), 10)}시`;


const TimeTableGrid = () => {
    const [events, setEvents] = useState<Event[]>(mockEvents);
    const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
    const { isEditing } = useAddTimeTableStore();
    const { selectedCell, setSelectedCell } = useSelectCellStore();

    const checkIsSelect = (halfHour: string, day: string) => {
        return selectedCell.some(
            (c) => c.timeInfo === halfHour
                && c.dayInfo === day
        )
    }

    const handleVoidClick = (time: string, day: string) => {
        if (isEditing) {
            console.log(`선택된 셀 : ${time}/${day}`)

            const cell = {
                timeInfo: time,
                dayInfo: day
            }

            if (checkIsSelect(time, day)) {
                const removedCell = selectedCell.filter(
                    (c) => !(c.timeInfo === cell.timeInfo
                        && c.dayInfo === cell.dayInfo)
                )
                setSelectedCell(removedCell)
            }
            else {
                setSelectedCell([...selectedCell, cell])
            }
        }
        else {
            return
        }
    };

    const handleEventClick = (event: Event) => {
        // const handleEventClick = (eventId: string) => {
        setSelectedEventId(prevId => (prevId === event.id ? null : event.id));

        if (isEditing) {
            console.log(`선택된 셀 : ${event.startTime}/${event.day}`)

            const cell = {
                timeInfo: event.startTime,
                dayInfo: event.day
            }

            if (checkIsSelect(event.startTime, event.day)) {
                const removedCell = selectedCell.filter(
                    (c) => !(c.timeInfo === cell.timeInfo
                        && c.dayInfo === cell.dayInfo)
                )
                setSelectedCell(removedCell)
            }
            else {
                setSelectedCell([...selectedCell, cell])
            }
        }
        else {
            return
        }
    };

    return (
        <div
            className="grid" // 🌟 변경: position: relative 제거, 더 깔끔한 그리드 로직
            style={{
                // 🌟 변경: 시간 라벨 컬럼이 없어졌으므로 7개의 컬럼만 정의
                gridTemplateColumns: 'repeat(7, 1fr)',
                // 30분 단위로 28개의 행을 생성
                gridTemplateRows: `repeat(${TIME_SLOTS.length}, 50px)`,
                // 그리드 라인 사이에 미세한 간격 추가
                gap: '0.7px',
                backgroundColor: '#D7D7D9', // 간격 색상
            }}
        >
            {/* --- 1. 배경 그리드 셀 렌더링 --- */}
            {TIME_SLOTS.map((time, rowIndex) =>
                Object.keys(DAY_TO_COL).map((day, colIndex) => (
                    <div
                        key={`${time}-${day}`}
                        className="bg-[#f5f5f5]" // 각 셀의 기본 배경색
                        onClick={() => {
                            handleVoidClick(time, day);
                        }}
                        style={{
                            gridRow: rowIndex + 1,
                            gridColumn: colIndex + 1,
                        }}
                    ></div>
                ))
            )}

            {/* --- 2. 월요일(MON)에 시간 라벨 렌더링 --- */}
            {TIME_SLOTS.map((time, rowIndex) => {
                // 정시(00분)인 경우에만 라벨을 표시
                if (time.endsWith('00')) {
                    return (
                        <div
                            key={`label-${time}`}
                            className="relative text-xs text-gray-500 pointer-events-none"
                            style={{
                                gridRow: rowIndex + 1,
                                gridColumn: 1, // 항상 월요일 컬럼에 위치
                            }}
                        >
                            <span className="absolute top-0 left-1">
                                {formatHour(time)}
                            </span>
                        </div>
                    );
                }
                return null;
            })}

            {/* --- 3. 이벤트 블록 렌더링 --- */}
            {events.map((event) => {
                const gridRowStart = timeToGridRow(event.startTime);
                const gridRowEnd = timeToGridRow(event.endTime);
                // 🌟 변경: 컬럼 계산 시 더 이상 +1 하지 않음
                const gridColumn = DAY_TO_COL[event.day];
                const isSelected = selectedEventId === event.id;

                // console.log(`${event.startTime} -> ${gridRowStart}`)

                return (
                    <div
                        key={event.id}
                        onClick={() => handleEventClick(event)}
                        // onClick={() => handleEventClick(event.id)}
                        className="w-13 overflow-clip flex flex-col p-2 rounded-lg cursor-pointer transition-all duration-200 ease-in-out text-gray-800"
                        style={{
                            // 🌟 변경: position:absolute 대신 Grid 속성을 직접 사용
                            gridRow: `${gridRowStart} / ${gridRowEnd}`,
                            gridColumn: gridColumn,
                            backgroundColor: event.color,
                            boxShadow: isSelected ? '0 0 0 2px #3B82F6' : '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                            zIndex: isSelected ? 2 : 1, // 선택된 셀을 위로
                        }}
                    >
                        <div className="flex-grow">
                            <p className="font-bold text-sm">{event.eventName}</p>
                            <p className="text-xs">{event.eventDetail}</p>
                        </div>
                        <div className="text-right text-xs mt-auto">
                            {formatTime(event.endTime)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TimeTableGrid;

// const TimeTableGrid = () => {
//     const { isEditing } = useAddTimeTableStore();
//     const { selectedCell, setSelectedCell } = useSelectCellStore();

//     const checkIsSelect = (halfHour: string, day: string) => {
//         return selectedCell.some(
//             (c) => c.timeInfo === halfHour
//                 && c.dayInfo === day
//         )
//     }

//     const handleClick = (halfHour: string, day: string) => {
//         if (isEditing) {
//             console.log(`선택된 셀 : ${halfHour}/${day}`)
//             const cell = {
//                 timeInfo: halfHour,
//                 dayInfo: day
//             }

//             if (checkIsSelect(halfHour, day)) {
//                 const removedCell = selectedCell.filter(
//                     (c) => !(c.timeInfo === cell.timeInfo
//                         && c.dayInfo === cell.dayInfo)
//                 )
//                 setSelectedCell(removedCell)
//             }
//             else {
//                 setSelectedCell([...selectedCell, cell])
//             }
//         }
//         else {
//             return
//         }
//     }

//     return (
//         <div>
//             <div className="grid grid-cols-7 rounded-[4px] overflow-hidden">
//                 {
//                     time_label.map((halfHour) => (
//                         day_label.map((day) => {
//                             return (
//                                 <div className="w-13 h-19 border-solid border-[#D7D7D9] border-1 bg-[#f5f5f5]"
//                                     onClick={() => handleClick(halfHour, day)}>
//                                     <div className="{{isSelc ? bg-[#f12345] : bg-[#f5f5f5]}}">
//                                         <p>{halfHour}</p>
//                                         <p>{day}</p>
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     ))
//                 }
//             </div>
//         </div >
//     )
// }

// export default TimeTableGrid