import { useChatBotPageStore } from "../store/store"

const ChatBotFrame = () =>{

    const {isChatBotOpen} = useChatBotPageStore();

    return(
        <>
        {
            isChatBotOpen ? (
                <div>
                    445
                </div>
            ) : null
        }
        </>
    )
}

export default ChatBotFrame;