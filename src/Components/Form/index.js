import AdressField from "../AdressField"
import InputForm from "../InputForm"
import Select from "../Select"
import "./style.css"

const Form = () => {
    return <div className="form-container">
        <form >
            <InputForm inputLabel="First Name" inputName="firstname" inputType="text" />
            <InputForm inputLabel="Last Name" inputName="lastname" inputType="text" />
            <InputForm inputLabel="Date of Birth" inputName="dateofbirth" inputType="date" />
            <InputForm inputLabel="Start Date" inputName="startdate" inputType="date" />
            <AdressField optionsList={["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "Guyana", "Peru"]} />
            <Select selectorLabel="" optionsList={["select dropdown", "Sales", "Marketing", "ingineering", "Legal"]} selectHeight="select-height" />

        </form>
    </div>
}

export default Form