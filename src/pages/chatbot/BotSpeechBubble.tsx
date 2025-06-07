type BotSpeechBubbleProps = {
    text : string;
}

const BotSpeechBubble = ({text}:BotSpeechBubbleProps) =>{

    return(
                <div>
                    <div className="w-93 h-44 bg-[#FCFFFF] rounded-tr-[50px] rounded-br-[50px] p-3">
                        <div>
                            {text}
                        </div>
                    </div>
                </div>
    )
}

export default BotSpeechBubble;