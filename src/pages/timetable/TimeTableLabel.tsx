
const TimeTableLabel = () => {


    return (
        <div className="w-full h-8 flex justify-center items-center gap-5">
            <div className="p-2 bg-Background-Brand-Default rounded-lg flex justify-center items-center gap-2">
                <div className="justify-center text-Text-Brand-On-Brand text-base font-normal font-['Inter'] leading-none">월</div>
            </div>
            <div className="p-2 bg-Background-Brand-Tertiary rounded-lg flex justify-center items-center gap-2">
                <div className="justify-center text-Text-Brand-Tertiary text-base font-normal font-['Inter'] leading-none">화</div>
            </div>
            <div className="p-2 bg-Background-Brand-Tertiary rounded-lg flex justify-center items-center gap-2">
                <div className="justify-center text-Text-Brand-Tertiary text-base font-normal font-['Inter'] leading-none">수</div>
            </div>
            <div className="p-2 bg-Background-Brand-Tertiary rounded-lg flex justify-center items-center gap-2">
                <div className="justify-center text-Text-Brand-Tertiary text-base font-normal font-['Inter'] leading-none">목</div>
            </div>
            <div className="p-2 bg-Background-Brand-Tertiary rounded-lg flex justify-center items-center gap-2">
                <div className="justify-center text-Text-Brand-Tertiary text-base font-normal font-['Inter'] leading-none">금</div>
            </div>
            <div className="p-2 bg-Background-Brand-Tertiary rounded-lg flex justify-center items-center gap-2">
                <div className="justify-center text-Text-Brand-Tertiary text-base font-normal font-['Inter'] leading-none">토</div>
            </div>
            <div className="p-2 bg-Background-Brand-Tertiary rounded-lg flex justify-center items-center gap-2">
                <div className="justify-center text-Text-Brand-Tertiary text-base font-normal font-['Inter'] leading-none">일</div>
            </div>
        </div>
    )
}

export default TimeTableLabel