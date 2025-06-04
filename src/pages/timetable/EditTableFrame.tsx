
// 스타벅스1 = #08AC64
// 스타벅스2 = #005B3F
// 좀덜흰색 = #FCFFFF

import { useSelectCellStore } from "../../store/store";

const EditTableFrame = () => {
    const { selectedCell, setSelectedCell } = useSelectCellStore();

    const resetSelected = () => {
        setSelectedCell([])
    }

    return (
        <div className="flex flex-col justify-between w-[390px] h-96 bottom-0 absolute 
        bg-white rounded-tl-2xl rounded-tr-2xl 
        shadow-[0px_-0.05000000074505806px_1px_0px_rgba(0,0,0,0.25)] 
        overflow-hidden z-10">

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
                    onClick={resetSelected}>
                    선택취소
                </div>
            </div>

            <div className="flex flex-row justify-around">
                <div className="flex flex-col">
                    <div className="w-32 h-6 text-left justify-start text-black text-xs font-light font-['Pretendard'] leading-7">활동명</div>
                    <input className="w-32 text-black text-sm font-medium font-['Pretendard'] leading-7" placeholder="예: 컴퓨터네트워크2" />
                    <div className="w-36 h-0 outline-1 outline-offset-[-0.50px] outline-emerald-600"></div>
                </div>

                <div className="flex flex-col">
                    <div className="w-32 h-6 text-left justify-start text-black text-xs font-light font-['Pretendard'] leading-7">활동 설명</div>
                    <input className="w-32 text-black text-sm font-medium font-['Pretendard'] leading-7" placeholder="예: 공C487" />
                    <div className="w-36 h-0 outline-1 outline-offset-[-0.50px] outline-emerald-600"></div>
                </div>

                <div className="flex flex-col justify-center">
                    <img src="/icons/plus-icon.svg" />
                </div>
            </div>


            <div className="flex flex-col justify-start items-center w-94 h-64 bg-[#005B3F] rounded-tl-2xl rounded-tr-2xl ml-3 mr-3">
                <div className="flex flex-row justify-between w-80 h-14 bg-[#FCFFFF] rounded-2xl shadow-[0px_1px_1px_0px_rgba(24,53,47,1.00)] mt-5">
                    <div className="rounded-full bg-[#FCFFFF]">
                        <img src="/icons/color-fill-icon.svg" />
                    </div>
                    <div className="flex flex-col">
                        <div>
                            컴네2
                        </div>
                        <div>
                            공삐사치로
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
        </div >
    )
}

export default EditTableFrame;

//         <div className="w-2.5 h-2.5 left-[156px] top-[122px] absolute outline outline-1 outline-offset-[-0.50px] outline-Icon-Default-Default" />
//         <div className="w-2.5 h-2.5 left-[308px] top-[120px] absolute outline outline-1 outline-offset-[-0.50px] outline-Icon-Default-Default" />
//         <div className="w-56 h-11 left-[24px] top-[27px] absolute justify-center text-black text-sm font-semibold font-['Roboto'] leading-none tracking-wide">월 10시~11시, 15시 ~ 17시<br />수 10시~11시</div>
//         <div className="w-6 h-6 left-[335px] top-[113px] absolute">
//             <div className="w-3.5 h-3.5 left-[5px] top-[5px] absolute bg-Schemes-On-Surface" />
//         </div>
//         <div className="w-96 h-64 left-[16px] top-[160px] absolute bg-스타벅스2 rounded-tl-2xl rounded-tr-2xl overflow-hidden">
//             <div className="w-80 h-14 left-[15px] top-[20px] absolute bg-좀덜흰색 rounded-2xl shadow-[0px_1px_1px_0px_rgba(24,53,47,1.00)]" />
//             <div className="w-9 h-9 left-[33px] top-[31px] absolute overflow-hidden">
//                 <div className="w-9 h-9 left-0 top-0 absolute bg-Colors-Green rounded-full" />
//                 <div className="w-9 h-9 left-[-2px] top-[-1.50px] absolute text-center justify-center"></div>
//                 <div className="w-6 h-6 left-[5px] top-[4px] absolute">
//                     <div className="w-5 h-6 left-[2px] top-0 absolute bg-Schemes-On-Surface" />
//                 </div>
//             </div>
//             <div className="left-[87px] top-[30px] absolute justify-start text-Schemes-On-Surface text-base font-medium font-['Roboto'] leading-normal tracking-tight">컴퓨터네트워크2</div>
//             <div className="w-12 left-[89px] top-[52px] absolute justify-start"><span class="text-Schemes-On-Surface text-xs font-normal font-['Roboto'] leading-tight">공 </span><span class="text-Schemes-On-Surface text-xs font-normal font-['Roboto'] leading-tight tracking-tight">B475</span></div>
//             <div data-size="48" className="w-6 h-6 left-[308px] top-[37px] absolute overflow-hidden">
//                 <div className="w-4 h-5 left-[3px] top-[2px] absolute outline outline-1 outline-offset-[-0.50px] outline-Icon-Default-Default" />
//             </div>
//             <div className="w-6 h-6 left-[276px] top-[37px] absolute">
//                 <div className="w-4 h-3 left-[3.85px] top-[5.98px] absolute bg-Schemes-On-Surface" />
//             </div>
//             <div className="w-80 h-14 left-[15px] top-[86px] absolute bg-좀덜흰색 rounded-2xl shadow-[0px_1px_1px_0px_rgba(24,53,47,1.00)]" />
//             <div className="w-9 h-9 left-[33px] top-[97px] absolute overflow-hidden">
//                 <div className="w-9 h-9 left-0 top-0 absolute bg-Colors-Green rounded-full" />
//                 <div className="w-9 h-9 left-[-2px] top-[-1.50px] absolute text-center justify-center"></div>
//                 <div className="w-6 h-6 left-[5px] top-[4px] absolute">
//                     <div className="w-5 h-6 left-[2px] top-0 absolute bg-Schemes-On-Surface" />
//                 </div>
//             </div>
//             <div className="left-[87px] top-[96px] absolute justify-start text-Schemes-On-Surface text-base font-medium font-['Roboto'] leading-normal tracking-tight">컴퓨터네트워크2</div>
//             <div className="w-12 left-[89px] top-[118px] absolute justify-start"><span class="text-Schemes-On-Surface text-xs font-normal font-['Roboto'] leading-tight">공 </span><span class="text-Schemes-On-Surface text-xs font-normal font-['Roboto'] leading-tight tracking-tight">B475</span></div>
//             <div data-size="48" className="w-6 h-6 left-[308px] top-[103px] absolute overflow-hidden">
//                 <div className="w-4 h-5 left-[3px] top-[2px] absolute outline outline-1 outline-offset-[-0.50px] outline-Icon-Default-Default" />
//             </div>
//             <div className="w-6 h-6 left-[276px] top-[103px] absolute">
//                 <div className="w-4 h-3 left-[3.85px] top-[5.98px] absolute bg-Schemes-On-Surface" />
//             </div>
//             <div className="w-80 h-14 left-[15px] top-[152px] absolute bg-좀덜흰색 rounded-2xl shadow-[0px_1px_1px_0px_rgba(24,53,47,1.00)]" />
//             <div className="w-9 h-9 left-[33px] top-[162px] absolute overflow-hidden">
//                 <div className="w-9 h-9 left-0 top-0 absolute bg-Colors-Green rounded-full" />
//                 <div className="w-9 h-9 left-[-2px] top-[-1.50px] absolute text-center justify-center"></div>
//                 <div className="w-6 h-6 left-[5px] top-[4px] absolute">
//                     <div className="w-5 h-6 left-[2px] top-0 absolute bg-Schemes-On-Surface" />
//                 </div>
//             </div>
//             <div className="left-[87px] top-[161px] absolute justify-start text-Schemes-On-Surface text-base font-medium font-['Roboto'] leading-normal tracking-tight">컴퓨터네트워크2</div>
//             <div className="w-12 left-[89px] top-[183px] absolute justify-start"><span class="text-Schemes-On-Surface text-xs font-normal font-['Roboto'] leading-tight">공 </span><span class="text-Schemes-On-Surface text-xs font-normal font-['Roboto'] leading-tight tracking-tight">B475</span></div>
//             <div data-size="48" className="w-6 h-6 left-[308px] top-[168px] absolute overflow-hidden">
//                 <div className="w-4 h-5 left-[3px] top-[2px] absolute outline outline-1 outline-offset-[-0.50px] outline-Icon-Default-Default" />
//             </div>
//             <div className="w-6 h-6 left-[276px] top-[168px] absolute">
//                 <div className="w-4 h-3 left-[3.85px] top-[5.98px] absolute bg-Schemes-On-Surface" />
//             </div>
//             <div className="w-80 h-14 left-[15px] top-[217px] absolute bg-좀덜흰색 rounded-2xl shadow-[0px_1px_1px_0px_rgba(24,53,47,1.00)]" />
//             <div className="w-9 h-9 left-[33px] top-[227px] absolute overflow-hidden">
//                 <div className="w-9 h-9 left-0 top-0 absolute bg-Colors-Green rounded-full" />
//                 <div className="w-9 h-9 left-[-2px] top-[-1.50px] absolute text-center justify-center"></div>
//                 <div className="w-6 h-6 left-[5px] top-[4px] absolute">
//                     <div className="w-5 h-6 left-[2px] top-0 absolute bg-Schemes-On-Surface" />
//                 </div>
//             </div>
//             <div className="left-[87px] top-[226px] absolute justify-start text-Schemes-On-Surface text-base font-medium font-['Roboto'] leading-normal tracking-tight">컴퓨터네트워크2</div>
//             <div className="w-12 left-[89px] top-[248px] absolute justify-start"><span class="text-Schemes-On-Surface text-xs font-normal font-['Roboto'] leading-tight">공 </span><span class="text-Schemes-On-Surface text-xs font-normal font-['Roboto'] leading-tight tracking-tight">B475</span></div>
//             <div data-size="48" className="w-6 h-6 left-[308px] top-[233px] absolute overflow-hidden">
//                 <div className="w-4 h-5 left-[3px] top-[2px] absolute outline outline-1 outline-offset-[-0.50px] outline-Icon-Default-Default" />
//             </div>
//             <div className="w-6 h-6 left-[276px] top-[233px] absolute">
//                 <div className="w-4 h-3 left-[3.85px] top-[5.98px] absolute bg-Schemes-On-Surface" />
//             </div>
//         </div>
//         <div className="w-36 h-0 left-[31px] top-[141px] absolute outline outline-1 outline-offset-[-0.50px] outline-emerald-600"></div>
//         <div className="w-8 h-6 left-[31px] top-[86px] absolute text-center justify-start text-black text-xs font-light font-['Pretendard'] leading-7">활동명</div>
//         <div className="w-24 left-[31px] top-[113px] absolute justify-start text-black text-sm font-medium font-['Pretendard'] leading-7">졸업프로젝트1</div>
//         <div className="w-36 h-0 left-[186.38px] top-[140px] absolute outline outline-1 outline-offset-[-0.50px] outline-emerald-600"></div>
//         <div className="w-16 h-6 left-[186px] top-[86px] absolute justify-start text-black text-xs font-light font-['Pretendard'] leading-7">활동 설명</div>
//         <div className="w-9 left-[186px] top-[112px] absolute justify-start text-black text-sm font-medium font-['Pretendard'] leading-7">미배정</div>
//     </div >
// </div >