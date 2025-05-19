type WideAcceptButtonProps = {
    text: string;
    isClickable: boolean;
}

const WideAcceptButton = ({text, isClickable}:WideAcceptButtonProps)=>{
    return(
        <div className="w-full flex justify-center items-center">
            {/*자주 사용할 버튼 형식*/}
            {text}
        </div>
    )
}

export default WideAcceptButton;