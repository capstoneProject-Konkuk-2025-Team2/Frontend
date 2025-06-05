
import type { Preset } from "../../types/types";

type CellPresetProps = {
    preset: Preset;
}

const CellPreset = ({ preset }: CellPresetProps) => {
    const { eventName, eventDetail, color } = preset;
    return (
        <div className="flex flex-col justify-start items-center w-94 h-64 bg-[#005B3F] rounded-tl-2xl rounded-tr-2xl ml-3 mr-3">
            <div className="flex flex-row justify-around items-center
                w-80 h-14 bg-[#FCFFFF] rounded-2xl shadow-[0px_1px_1px_0px_rgba(24,53,47,1.00)] 
                mt-5">
                <div className="flex justify-center items-center rounded-full w-9 h-9"
                    style={{ backgroundColor: color }}>
                    {/* <div className="flex justify-center items-center rounded-full bg-[#FCF2F1] w-9 h-9"></div> */}
                    <img src="/icons/color-fill-icon.svg" />
                </div>
                <div className="flex flex-col">
                    <div className="justify-start text-Schemes-On-Surface text-base font-medium font-['Roboto'] leading-normal tracking-tight">
                        {eventName}
                    </div>
                    <div className="w-12 justify-start">
                        <span className="text-Schemes-On-Surface text-xs font-normal font-['Roboto'] leading-tight">
                            {eventDetail}
                        </span>
                    </div>

                </div>

                <div>
                    <img src="/icons/check-icon.svg" />
                </div>

                <div>
                    <img src="/icons/trashcan-icon.svg" />
                </div>
            </div>
        </div>
    )
}

export default CellPreset;