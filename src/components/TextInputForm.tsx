type TextInputFormProps = {
    label: string;
    placeholder?: string;
    isError: boolean;
    isPW: boolean;
}

const TextInputForm = ({label, placeholder, isError, isPW}: TextInputFormProps) => {
    return (
        <form>
            {/* input label */}
            <div className="w-32 h-6 text-left justify-start text-black text-xs font-light font-['Pretendard'] leading-7">{label}</div>
            
            {/* 비밀번호 입력 구분 */}
            {!isPW ?
                (
                // <input placeholder={placeholder}/>
                <div className="w-44 h-6 text-center justify-start">
                    
                    <span className="flex flex-row text-black text-sm font-medium font-['Pretendard'] leading-7">
                        <input className="w-full text-black text-sm font-medium font-['Pretendard'] leading-7" placeholder={placeholder}/>
                        @konkuk.ac.kr
                    </span>
                    
                </div>
                )
                :
                <input className="text-black text-sm font-medium font-['Pretendard'] leading-7" placeholder={placeholder}/>
            }
            {/* input 아래 초록/빨강 바 */}
            {!isError ? <div className="w-72 h-0 outline outline-1 outline-offset-[-0.50px] outline-emerald-600"></div> 
            : <div className="w-72 h-0 outline outline-1 outline-offset-[-0.50px] outline-red-700"></div>}

        </form>
    )
}

export default TextInputForm