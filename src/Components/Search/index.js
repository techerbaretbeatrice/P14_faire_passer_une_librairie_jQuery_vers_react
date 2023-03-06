import "./style.css"
import { useState } from "react"

const Search = (props) => {
    const { engineLabel, enginePlaceholder } = props
    const [value, setValue] = useState("")
    const [inEdit, setInEdit] = useState(false)

    const onInputChange = (value) => {
        setValue(value)
        setInEdit(true)
    }

    const onItemClick = () => {
        setInEdit(false)
        setValue("")
    }

    return <><div className="research-container">
        <label className="label-container" htmlFor="research"> {engineLabel} </label>
        <div className="edit-container">
            <input value={value} className="input-container" placeholder={enginePlaceholder} onChange={(evt) => onInputChange(evt.currentTarget.value)} ></input>

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


export default Search