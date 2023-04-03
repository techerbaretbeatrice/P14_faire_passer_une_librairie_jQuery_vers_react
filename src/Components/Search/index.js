import "./style.css"
import { useState } from "react"
import PropTypes from "prop-types"

/**
 * Represesents a search engine 
 * @param {string} props - engineLabel
 * @param {string} props - enginePlaceholder
 * @param {func} props - onSearch
 * @returns {JSX.Element}
 */

const Search = (props) => {
    const { engineLabel, enginePlaceholder, onSearch } = props
    const [value, setValue] = useState("")
    const [inEdit, setInEdit] = useState(false)

    const onInputChange = (value) => {
        setValue(value)
        onSearch(value)
        setInEdit(true)
    }

    const onItemClick = () => {
        setValue("")
        onSearch("")
        setInEdit(false)
    }

    return <><div className="research-container">
        <label className="label-container" htmlFor="research"> {engineLabel} </label>
        <div className="edit-container">
            <input value={value} className="input-container" name="research" placeholder={enginePlaceholder} onChange={(evt) => onInputChange(evt.currentTarget.value)} ></input>

            {inEdit && <div className="icon-container"><XIcon onClick={() => onItemClick()} position="position" />
            </div>
            }
        </div>
    </div>
    </>
}

const XIcon = (props) => (

    <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={props.onClick}
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16">

        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            fill="#000" />

    </svg>
);

Search.propTypes = {
    engineLabel: PropTypes.string,
    enginePlaceholder: PropTypes.string,
    onSearch: PropTypes.func,
}

export default Search