import { useState } from "react"
import Modal from "../Modal"
import "./style.css"

const SaveButton = (props) => {
    const { actionOnClick } = props
    const [isActionDone, setisActionDone] = useState(false)
    return <><div>
        <button className="submit-button" onClick={() => setisActionDone(true)}>{actionOnClick} </button>
    </div>
        {
            isActionDone && <div><Modal closeModal={() => setisActionDone(false)} closeModelType="Close" modalTextContain="Employee is created!" />
            </div>
        }
    </>


}

/**
 * La responsabilité du composant est multiple
 * c'est un bouton qui ouvre une modal de confirmation
 */

export default SaveButton