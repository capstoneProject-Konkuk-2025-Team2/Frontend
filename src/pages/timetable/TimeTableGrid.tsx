
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

const TimeTableGrid = () => {

    const time_label = [
        "0900", "0930", "1000", "1030", "1100", "1130",
        "1200", "1230", "1300", "1330", "1400", "1430",
        "1500", "1530", "1600", "1630", "1700", "1730",
        "1800", "1830", "1900", "1930", "2000", "2030",
        "2100", "2130", "2200", "2230", "2300", "2330", "2400"
    ];

    const day_label = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    return (
        <div>
            <div className="grid grid-cols-7 rounded-[4px] overflow-hidden">
                {
                    time_label.map((halfHour, rowIndex) => (
                        day_label.map((day, colIndex) => {
                            return (
                                <div className="w-13 h-19 border-solid border-[#D7D7D9] border-1 bg-[#f5f5f5]">
                                    <p>{halfHour}</p>
                                    <p>{day}</p>
                                </div>
                            )
                        })
                    ))
                }
            </div>
        </div>
    )
}

export default TimeTableGrid