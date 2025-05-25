
const LowerNav = () =>{
    return (
        <div className="w-[390px] flex flex-row justify-between items-center">
            <div className="flex flex-col">
                <img src='/icons/calender-icon-off.svg'/>
                캘린더
            </div>

            <div className="flex flex-col">
                <img src='/icons/review-icon-off.svg'/>
                리뷰
            </div>

            <div className="flex flex-col">
                <img src='/icons/timetable-icon-off.svg'/>
                시간표
            </div>

            <div className="flex flex-col">
                <img src='/icons/mypage-icon-off.svg'/>
                프로필
            </div>
        </div>
    )
}

export default LowerNav