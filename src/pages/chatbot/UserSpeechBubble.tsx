
type UserSpeechBubbleProps = {
    text : string;
}

const UserSpeechBubble = ({text}:UserSpeechBubbleProps) =>{

    return(
        
                <div>
                    <div className="w-92 min-h-16 bg-[#FCFFFF] rounded-tl-[50px] rounded-bl-[50px] p-3 mr-0">
                        <div>
                            {text}
                        </div>
                    </div>
                </div>
    )
}

export default UserSpeechBubble;