import axios from "axios"
import type { Event } from "../types/types";
const TIMETABLE_API_URL = "/v1/member/timetable"

// 추가할 시간표 정보 보내기 POST
// 논의 추가 필요. 여러 요일, 여러 시간대 셀을 동시 클릭한 경우?
// 입력에 제한을 둘 것인지 api를 수정할 것인지.
export const sendEventRequest = ({ day, startTime, endTime,
    eventName, eventDetail, color }: Event) => axios.post(TIMETABLE_API_URL, {
        day: day,
        startTime: startTime,
        endTime: endTime,
        eventName: eventName,
        eventDetail: eventDetail,
        color: color,
    })
        .then(Response => console.log(Response.data))
        .catch(error => console.error(error));

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

