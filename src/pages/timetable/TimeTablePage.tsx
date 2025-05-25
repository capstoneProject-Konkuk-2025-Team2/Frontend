import UpperNav from "../../components/UpperNav.tsx";

const TimeTablePage = () =>{
    return (
        <div>
            <UpperNav text="2025년 1학기" otherBtn="None"/>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">시간표 요일별 라벨</div>
                <div className="container-fluid">시간표</div>
            </nav>

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