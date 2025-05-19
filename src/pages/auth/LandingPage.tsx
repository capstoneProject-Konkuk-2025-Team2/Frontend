import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LandingPage = () => {
    const [guidePage, setGuidePage] = useState(0)
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[390px] h-[648px] bg-[#08AC64]">guide이미지 {guidePage}</div>
            <div className="w-[66px] h-[48px] flex justify-center gap-1.5 mt-5">
                <div className="w-[12px] h-[12px] rounded-full bg-[#005B3F]"></div>
                <div className="w-[12px] h-[12px] rounded-full bg-[#D9D9D9]"></div>
                <div className="w-[12px] h-[12px] rounded-full bg-[#D9D9D9]"></div>
                <div className="w-[12px] h-[12px] rounded-full bg-[#D9D9D9]"></div>
            </div>
            <div>
                <button className="w-[150px] 
                h-[44px] rounded-[10px] ml-[39px] mr-[6px]
                bg-[#43BB6B] text-[#FCFFFF] text-center font-pretendard text-sm font-bold leading-7" onClick={()=>{
                    navigate('/login')  
                }}>로그인</button>
                <button  className="w-[150px] 
                h-[44px] rounded-[10px] mr-[39px] ml-[6px]
                bg-[#43BB6B] text-[#FCFFFF] text-center font-pretendard text-sm font-bold leading-7" onClick={()=>{
                    navigate('/signup')
                }}>회원가입</button>
            </div>
            <div className="w-[390px] flex justify-center mt-4">
                <span className="text-[#000] text-center font-pretendard text-sm font-normal leading-7">계정이 기억나지 않나요? </span>
                <span className="text-[#000] text-center font-pretendard text-sm font-bold leading-7">계정 찾기</span>
            </div>
            
        </div>
    )
}

export default LandingPage