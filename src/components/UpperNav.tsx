import {useNavigate} from "react-router-dom";
type UpperNavProps = {
    text: string;
    otherBtn: string;
}

const UpperNav = ({text, otherBtn}:UpperNavProps) =>{
    const navigate = useNavigate()
    return (
        <div className="w-[390px] flex flex-row justify-between items-center">
            <div onClick={()=>{
                navigate(-1)
            }}>
                <img src={"/icons/arrow-left.svg"} alt="arrow-left"/>
            </div>
            <div>
                {text}
            </div>
            <div>
                {otherBtn === "next" ? <img src="" alt=""/> : null}
            </div>
        </div>
    )
}

export default UpperNav