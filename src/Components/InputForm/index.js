import "./style.css"

const InputForm = (props) => {
    const { inputLabel, inputName, inputType } = props
    return <div className="input-wrapper">
        <label className="input-label" htmlFor={`${inputName}`}>{inputLabel}</label>
        <input className="input-style" name={`${inputName}`} type={`${inputType}`} id={`${inputName}`} />
    </div>
}

export default InputForm