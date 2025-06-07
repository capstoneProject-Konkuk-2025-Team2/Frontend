import UpperNav from "../../components/UpperNav";

const SetAcademicInfoPage = () => {

    return(
       <div>
            <UpperNav text="회원가입" otherBtn="None" />
                        <nav>
                <div className="w-28 h-12 text-center justify-start text-Schemes-On-Surface text-xl font-semibold font-['Pretendard'] leading-7">재학 상태</div>
                <div className="w-96 h-8 text-center justify-start text-black text-base font-medium font-['Pretendard'] leading-7">건국대학교 메일 계정으로 인증해주세요</div>
            </nav>
        </div>
    )
}

export default SetAcademicInfoPage;