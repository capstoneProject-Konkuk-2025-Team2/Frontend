type TextInputFormProps = {
    label: string;
    placeholder?: string;
    isError: boolean;
    isPW: boolean;
}

const TextInputForm = ({label, placeholder, isError, isPW}: TextInputFormProps) => {

    return (
        <form>
            {label}
            {isPW ?
                <input placeholder={placeholder}/>
                :
                <input placeholder={placeholder}/>
            }
        </form>
    )
}

export default TextInputForm