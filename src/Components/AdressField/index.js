import "./style.css"
import InputForm from "../InputForm"
import Select from "../Select"

const AdressField = (props) => {
    const { optionsList, selectorLabel } = props
    return <div className="adress-container">
        <fieldset className="adress-field">
            <legend> Adress</legend>
            <div className="field-container">
                <InputForm inputLabel="Street" inputName="street" inputType="text" />
                <InputForm inputLabel="City" inputName="city" inputType="text" />
                <Select selectorLabel={selectorLabel} optionsList={optionsList} selectHeight="select-height" />
                <InputForm inputLabel="Zip Code" inputName="zipcode" inputType="text" />
            </div>
        </fieldset>

    </div>
}

export default AdressField

