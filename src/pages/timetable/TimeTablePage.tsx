import UpperNav from "../../components/UpperNav.tsx";
import TimeTableLabel from "./TimeTableLabel.tsx";

const TimeTablePage = () =>{
    return (
        <div>
            <UpperNav text="2025년 1학기" otherBtn="None"/>

            <TimeTableLabel/>

            <div>
                fixed : 플로팅 시간표 편집 버튼
            </div>

            <div>
                fixed : 플로팅 챗봇 버튼
            </div>
        </div>
    )
}

export default TimeTablePage