import UpperNav from "../../components/UpperNav.tsx";
import TextInputForm from "../../components/TextInputForm.tsx";
import WideAcceptButton from "../../components/WideAcceptButton.tsx";

const LoginPage = () => {
    return (
        <div>
           <UpperNav text="로그인" otherBtn="None"/>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">로그인</div>
                <div className="container-fluid">건국대학교 메일 계정으로 로그인해주세요</div>
            </nav>

            <TextInputForm label="이메일" placeholder="konkuk@konkuk.ac.kr" isError={false} isPW={false}/>
            <TextInputForm label="비밀번호" placeholder="" isError={false} isPW={false}/>

            <WideAcceptButton text="로그인" isClickable={true}/>
        </div>
    )
}

export default LoginPage