import { useState } from "react";
import UpperNav from "../../components/UpperNav.tsx";
import TimeTableLabel from "./TimeTableLabel.tsx";
import TimeTableGrid from "./TimeTableGrid.tsx";

const TimeTablePage = () => {
    const [isAdding, setIsAdding] = useState(true);
    return (
        <div>
            <UpperNav text="2025년 1학기" otherBtn="None" />

            <TimeTableLabel />
            <TimeTableGrid />
            {isAdding ? (<div>
                시간표 추가 ui
            </div>) : null}
        </div>
    )
}

export default TimeTablePage