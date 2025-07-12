type BotSpeechBubbleProps = {
    text: string;
}

const BotSpeechBubble = ({ text }: BotSpeechBubbleProps) => {

    return (
        <div className="flex flex-col w-full justify-start">
            <div className="w-[90%] h-full bg-[#FCFFFF] rounded-tr-[50px] rounded-br-[50px] p-3">
                <div>
                    {text}
                </div>
            </div>
        </div>
    )
}

export default BotSpeechBubble;