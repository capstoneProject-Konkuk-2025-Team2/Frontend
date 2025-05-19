import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LandingPage = () => {
    const [guidePage, setGuidePage] = useState(0)
    const navigate = useNavigate();
    return (
        <div>
            <div>guide이미지 {guidePage}</div>
            <div>
                라디오 버튼
            </div>
            <div>
                <button onClick={()=>{
                    navigate('/login')
                }}>로그인</button>
                <button onClick={()=>{
                    navigate('/signup')
                }}>회원가입</button>
            </div>

            <span>계정이 기억나지 않나요? </span>
            <span>계정 찾기</span>
        </div>
    )
}

export default LandingPage