import "./style.css"
import InputForm from "../InputForm"
import { Select } from "b8ui"


const AdressField = (props) => {
    const { options, labelSelector } = props
    return <div className="adress-container">
        <fieldset className="adress-field">
            <legend> Adress</legend>
            <div className="field-container">
                <InputForm inputLabel="Street" inputName="street" inputType="text" />
                <InputForm inputLabel="City" inputName="city" inputType="text" />
                <Select labelSelector={labelSelector} options={options} selectHeight="select-height" />
                <InputForm inputLabel="Zip Code" inputName="zipcode" inputType="number" />
            </div>
        </fieldset>

    </div>
}

export default AdressField

