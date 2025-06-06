import { useChatBotPageStore } from "../store/store"

const ChatBotFrame = () => {
    const { openChatBotPage } = useChatBotPageStore();

    return (
        <div>
            <div className="absolute bottom-0 w-97 h-194 
                    p-7 flex flex-col justify-between items-center
                    gap-2.5 z-20 bg-[#DDE9F6]">

                <div className="absolute top-5 right-5"
                    onClick={openChatBotPage}>
                    <img src="/icons/X-icon.svg" />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="w-32 h-10 text-center justify-center text-[#0076FE] text-xs font-normal font-['Pretendard'] leading-normal tracking-wide">2025년 6월 11일</div>
                    <div className="w-72 h-0 outline outline-1 outline-offset-[-0.50px] outline-[#0076FE]"></div>
                </div>


                <div>
                    <div className="w-93 h-44 bg-[#FCFFFF] rounded-tr-[50px] rounded-br-[50px] p-3">
                        <div>
                            챗봇답변
                        </div>
                    </div>
                </div>


                <div>
                    <div className="w-93 h-16 bg-[#FCFFFF] rounded-tl-[50px] rounded-bl-[50px] p-3">
                        <div>
                            챗봇 예시 질문
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-row justify-between w-92 h-11 bg-[#0076FE] text-[#FCFFFF] rounded-[500px] m-4 pl-4">
                        <input placeholder="챗봇 예시 입력" />

                        <div className="w-10 h-10 bg-[#FCFFFF] rounded-[500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30)] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] inline-flex justify-center items-center overflow-hidden m-1">
                            <div className="p-4 flex justify-center items-center">
                                <button className="w-6 h-6">
                                    <img className="w-6 h-6"
                                        src="/icons/blue-sending-icon.svg" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ChatBotFrame;