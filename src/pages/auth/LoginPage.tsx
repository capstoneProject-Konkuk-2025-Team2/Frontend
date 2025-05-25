import UpperNav from "../../components/UpperNav.tsx";
import TextInputForm from "../../components/TextInputForm.tsx";
import WideAcceptButton from "../../components/WideAcceptButton.tsx";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const loginRequest = () =>{
        navigate('/main/timetable')
    }
    return (
        <div className="flex flex-col justify-center items-center">
           <UpperNav text="" otherBtn="None"/>

            <nav>
                <div className="w-28 h-12 text-center justify-start text-Schemes-On-Surface text-xl font-semibold font-['Pretendard'] leading-7">로그인</div>
                <div className="w-96 h-8 text-center justify-start text-black text-base font-medium font-['Pretendard'] leading-7">건국대학교 이메일 계정으로 로그인 해주세요.</div>
            </nav>

            <TextInputForm label="이메일" placeholder="konkuk" isError={false} isPW={false}/>
            <TextInputForm label="비밀번호" placeholder="* * * *" isError={false} isPW={true}/>

            <div className="w-[390px] flex justify-center mt-4">
                <span className="text-[#000] text-center font-pretendard text-sm font-normal leading-7">비밀번호를 잊어버렸어요</span>
                <span className="text-[#000] text-center font-pretendard text-sm font-normal leading-7"> &nbsp; | &nbsp; </span>
                <span className="text-[#000] text-center font-pretendard text-sm font-normal leading-7"
                    onClick={()=>{
                        navigate('/auth/signup')
                    }}>새로 가입하고 싶어요</span>
            </div>

            <WideAcceptButton text="로그인" isClickable={true} handleClick={loginRequest}/>

        </div>
    )
}

export default LoginPage