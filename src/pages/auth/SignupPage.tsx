import UpperNav from "../../components/UpperNav.tsx";
import TextInputForm from "../../components/TextInputForm.tsx";
import WideAcceptButton from "../../components/WideAcceptButton.tsx";
import SetPassword from "./SetPassword.tsx";

const SignupPage = () =>{
    const isVerifyed = true;
    return (
        <div>
            <UpperNav text="회원가입" otherBtn="None"/>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">회원가입</div>
                <div className="container-fluid">건국대학교 메일 계정으로 인증해주세요</div>
            </nav>

            <TextInputForm label="이메일" placeholder="konkuk@konkuk.ac.kr" isError={false} isPW={false}/>
            <TextInputForm label="인증번호" placeholder="" isError={false} isPW={false}/>

            <WideAcceptButton text="인증하기" isClickable={true}/>

            <span>인증 메일을 받지 못하셨나요?</span>
            <span>다시 보내기</span>

            {isVerifyed ?(
                <SetPassword/>
            ) : null}
        </div>
    )
}

export default SignupPage