import { useChatBotPageStore } from "../store/store"

const ChatBotFrame = () => {

    const { openChatBotPage } = useChatBotPageStore();

    return (
        <div>
            {/* <div className="absolute bottom-0 w-97 h-194 
                    p-7 flex flex-col justify-center items-center 
                    gap-2.5 z-20 bg-[#DDE9F6]"> */}
            <div className="absolute bottom-0 w-97 h-194 
                    p-7 flex flex-col justify-center items-center 
                    gap-2.5 z-20 bg-[#DDE9F6]">
                        
                <div className="absolute top-5 right-5"
                    onClick={openChatBotPage}>
                    <img src="/public/icons/X-icon.svg" />
                </div>
                
                <div>
                    <div>
                        날짜 및 분리선
                    </div>
                </div>


                <div>
                    <div>
                        챗봇 예시 답안
                    </div>
                </div>


                <div>
                    <div>
                        챗봇 예시 질문
                    </div>
                </div>

                <div>
                    <input placeholder="챗봇 예시 입력"/>
                </div>
            </div>
        </div>
    )
}

export default ChatBotFrame;