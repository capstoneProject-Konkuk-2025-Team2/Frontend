import TextInputForm from "../../components/TextInputForm.tsx";
import WideAcceptButton from "../../components/WideAcceptButton.tsx";

const SetPassword = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">비밀번호 설정</div>
            </nav>
            <TextInputForm label="비밀번호" placeholder="" isError={false} isPW={true}/>
            <TextInputForm label="비밀번호 재확인" placeholder="" isError={false} isPW={true}/>

            <WideAcceptButton text="계속하기" isClickable={true}/>

        </div>
    )
}

export default SetPassword