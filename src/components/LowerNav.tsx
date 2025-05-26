import { useLocation } from "react-router-dom"

const LowerNav = () => {

    const location = useLocation()

    return (
        <div className="w-97 h-16 flex flex-row justify-around items-center bg-[#f4f4f4
        shadow-[0px_0.20000000298023224px_2px_0px_rgba(0,0,0,0.25)] gap-11">
            <div className="flex flex-col w-[44px] h-[44px]
            justify-center items-center">
                <img className="w-6 h-6"
                    src='/icons/calender-icon-off.svg' />
                <div className="w-10 h-4 mt-1 text-center justify-start text-black text-xs font-light font-['Pretendard'] leading-none tracking-wide">캘린더<br /></div>
            </div>

            <div className="flex flex-col w-[44px] h-[44px]
            justify-center items-center">
                <img className="w-6 h-6"
                    src='/icons/review-icon-off.svg' />
                <div className="w-10 h-4 mt-1 text-center justify-start text-black text-xs font-light font-['Pretendard'] leading-none tracking-wide">리뷰<br /></div>
            </div>

            <div className="flex flex-col w-[44px] h-[44px]
            justify-center items-center">
                <img className="w-6 h-6" src='/icons/timetable-icon-off.svg' />
                <div className="w-10 h-4 mt-1 text-center justify-start text-black text-xs font-light font-['Pretendard'] leading-none tracking-wide">시간표<br /></div>
            </div>

            <div className="flex flex-col w-[44px] h-[44px]
            justify-center items-center">
                <img className="w-6 h-6" src='/icons/mypage-icon-off.svg' />
                <div className="w-10 h-4 mt-1 text-center justify-start text-black text-xs font-light font-['Pretendard'] leading-none tracking-wide">프로필<br /></div>
            </div>
        </div>
    )
}

export default LowerNav