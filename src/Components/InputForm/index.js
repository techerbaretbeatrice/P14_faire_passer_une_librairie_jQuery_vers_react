import "./style.css"
import PropTypes from "prop-types"

/**
 * Represents an input
 * @param {string} props - inputLabel
 * @param {string} props - inputName (name of the input and htmlfor of the label )
 * @param {string} props - inputType (type of the input)
 * @returns 
 */

const InputForm = (props) => {
    const { inputLabel, inputName, inputType } = props
    return <div className="input-wrapper">
        <label className="input-label" htmlFor={`${inputName}`}>{inputLabel}</label>
        <input className="input-style" name={`${inputName}`} type={`${inputType}`} id={`${inputName}`} />
    </div>
}

InputForm.propTypes = {
    inputLabel: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    inputType: PropTypes.string,
}

export default InputForm