
// 스타벅스1 = #08AC64
// 스타벅스2 = #005B3F
// 좀덜흰색 = #FCFFFF

import { useSelectCellStore, usePresetStore } from "../../store/store";
// import { sendEventRequest } from "../../apis/timetable";
import SelectedCell from "./SelectedCell";
import CellPreset from "./CellPreset";
import { sendEventRequest } from "../../apis/timetable";
import type { selectedTime, addTimeRequest } from "../../types/types";
import { useState } from "react";

const EditTableFrame = () => {
    const { selectedCell, setSelectedCell } = useSelectCellStore();
    const { presets } = usePresetStore();
    const [eventName, setEventName] = useState('');
    const [eventDetail, setEventDetail] = useState('');


    const addEvent = ({ selectedCell, eventName, eventDetail, color }: addTimeRequest) => {
        // sendEventRequest(day)
        selectedCell.map((cell: selectedTime) => {
            const eventItem = {
                id: cell.day + '_' + cell.startTime,
                day: cell.day,
                startTime: cell.startTime,
                endTime: cell.endTime,
                eventName: eventName,
                eventDetail: eventDetail,
                color: color
            }
            console.log(eventItem)
            sendEventRequest(eventItem)
        })
    }

    return (
        <div className="flex flex-col justify-between items-center
        w-[390px] h-96 bottom-0 absolute 
        bg-white rounded-tl-2xl rounded-tr-2xl 
        shadow-[0px_-0.05000000074505806px_1px_0px_rgba(0,0,0,0.25)] 
        overflow-hidden z-10">

            {/* 선택한 셀 시간 정보 + 전체 취소 버튼 */}
            {selectedCell.length === 0 ? null :
                <SelectedCell selectedCell={selectedCell} setSelectedCell={setSelectedCell} />}

            <div className="flex flex-row justify-around items-center m-4 pt-2">
                <div className="flex flex-col">
                    <div className="w-32 h-6 text-left justify-start text-black text-xs font-light font-['Pretendard'] leading-7">활동명</div>
                    <input className="w-32 text-black text-sm font-medium font-['Pretendard'] leading-7"
                        onChange={(e) => {
                            setEventName(e.target.value)
                        }}
                        placeholder="예: 컴퓨터네트워크2" />

                    {/* 입력 하단 초록줄 */}
                    <div className="w-36 h-0 outline-1 outline-offset-[-0.50px] outline-emerald-600"></div>
                </div>

                <div className="flex flex-col">
                    <div className="w-32 h-6 text-left justify-start text-black text-xs font-light font-['Pretendard'] leading-7">활동 설명</div>
                    <input className="w-32 text-black text-sm font-medium font-['Pretendard'] leading-7"
                        onChange={(e) => {
                            setEventDetail(e.target.value)
                        }}
                        placeholder="예: 공C487" />
                    <div className="w-36 h-0 outline-1 outline-offset-[-0.50px] outline-emerald-600"></div>
                </div>

                <div className="flex flex-col justify-center"
                    onClick={() => {

                        // 연속하게 select된 셀들 단위로 반복 요청.
                        // selectedCell, eventName, eventDetail, color
                        const request = {
                            selectedCell: selectedCell,
                            eventName: eventName,
                            eventDetail: eventDetail,
                            color: '#f2f2f2'
                        }
                        addEvent(request);
                    }}>
                    <img src="/icons/plus-icon.svg" />
                </div>
            </div>

            {/* 시간표 프리셋 컴포넌트 */}
            {/* 클릭하여 이벤트 이름, 이벤트 설명, 색깔 불러오는 기능, 프리셋에서 제거 기능 추가 필요 */}

            <div className="flex flex-col justify-start items-center 
            w-89 h-64 bg-[#005B3F] rounded-tl-2xl rounded-tr-2xl pl-2 pr-2" >
                {presets.map((preset) => {
                    return <CellPreset preset={preset} />
                })}
            </div>

        </div >
    )
}

export default EditTableFrame;
