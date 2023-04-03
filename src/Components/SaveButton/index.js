import { useState } from "react"
import Modal from "../Modal"
import "./style.css"
import Icon from "../icon"

const SaveButton = (props) => {
    const { actionOnClick } = props
    const [isActionDone, setisActionDone] = useState(false)
    return <><div>
        <button className="submit-button" onClick={() => setisActionDone(true)}>{actionOnClick} </button>
    </div>
        {
            isActionDone && <div><Modal closeModal={() => setisActionDone(false)} closeModelType={<Icon />} modalTextContain="Employee is created!" />
            </div>
        }
    </>


}

export default SaveButton