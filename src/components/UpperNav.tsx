
type UpperNavProps = {
    text: string;
    otherBtn: string;
}

const UpperNav = ({text, otherBtn}:UpperNavProps) =>{
    return (
        <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
            <div>
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