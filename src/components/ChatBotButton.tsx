import { useChatBotPageStore } from "../store/store"

const ChatBotButton = () => {
    const {isChatBotOpen, openChatBotPage} = useChatBotPageStore();

    const openChatBot = () => {
        openChatBotPage();
        console.log(isChatBotOpen)
    }

    return (
        <div className="absolute right-2 bottom-20 w-24 h-24 
        p-7 inline-flex justify-center items-center gap-2.5 z-10"
            onClick={openChatBot}>
            <img className="w-11 h-11" src="https://placehold.co/45x45" />
        </div>
    )
}

export default ChatBotButton