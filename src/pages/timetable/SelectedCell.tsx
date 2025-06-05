
import type { SelectedCellState } from "../../types/types"

const SelectedCell = ({ selectedCell, setSelectedCell }: SelectedCellState) => {

    return (
        <div className="flex flex-row justify-between">
            <div className="relative top-7 left-6 box-content justify-center
                w-56 text-black text-sm font-semibold font-['Roboto'] leading-none tracking-wide">
                {selectedCell.map((sCell) => {
                    return (
                        <div>
                            {sCell.dayInfo}
                            {sCell.timeInfo}
                        </div>
                    )
                })}
            </div>

            <div className="flex justify-center items-center relative top-7 right-7
                w-20 h-7 bg-[#08AC64] rounded-2xl
                 text-white text-xs font-normal font-[Pretendard]"
                onClick={() => { setSelectedCell([]) }}>
                선택취소
            </div>
        </div>
    )
}

export default SelectedCell;