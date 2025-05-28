
const TimeTableGrid = () => {

    const col_count = 7;
    const time_label = [
        "0900", "0930", "1000", "1030", "1100", "1130",
        "1200", "1230", "1300", "1330", "1400", "1430",
        "1500", "1530", "1600", "1630", "1700", "1730",
        "1800", "1830", "1900", "1930", "2000", "2030",
        "2100", "2130", "2200", "2230", "2300", "2330", "2400"
    ];

    return (
        <div>
            <div className="grid gap-1">
                {
                    time_label.map((halfHour, rowIndex) => (
                        Array.from({ length: col_count }).map((_, colIndex) => {
                            return (
                                <div>
                                    {halfHour}
                                    {rowIndex}
                                    {colIndex}
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