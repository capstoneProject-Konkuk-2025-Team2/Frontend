import TextInputForm from "../../components/TextInputForm.tsx";
import WideAcceptButton from "../../components/WideAcceptButton.tsx";

const SetPassword = () => {
    const confirmPW = () =>{
        
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="w-28 h-12 text-left justify-start text-Schemes-On-Surface text-xl font-semibold font-['Pretendard'] leading-7">비밀번호 설정</div>
            </nav>
            <TextInputForm label="비밀번호" placeholder="" isError={false} isPW={true}/>
            <TextInputForm label="비밀번호 재확인" placeholder="" isError={false} isPW={true}/>

            <WideAcceptButton text="계속하기" isClickable={false} handleClick={confirmPW}/>

        </div>
    )
}

export default SetPassword