import { useContext } from "react"
import { DataContext } from "../../Context"
import EmployeeObj from "../../Models"
import AdressField from "../AdressField"
import InputForm from "../InputForm"
import SaveButton from "../SaveButton"
import Select from "../Select"
import "./style.css"

const Form = () => {
    const { addEmployee } = useContext(DataContext)
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const form = evt.currentTarget
        const firstName = form.firstname.value
        console.log(firstName)
        const lastName = form.lastname.value
        console.log(lastName)
        const dateOfBirth = form.dateofbirth.value
        console.log(dateOfBirth)
        const startDate = form.startdate.value
        console.log(startDate)
        const street = form.street.value
        console.log(street)
        const city = form.city.value
        console.log(city)
        const state = form.state.value
        console.log(state)
        const zipCode = form.zipcode.value
        console.log(zipCode)
        const department = form.department.value
        console.log(department)
        const newEmployee = new EmployeeObj({
            firstname: firstName,
            lastname: lastName,
            dateofbirth: dateOfBirth,
            startdate: startDate,
            street: street,
            city: city,
            state: state,
            zipcode: zipCode,
            department: department

        })
        addEmployee(newEmployee)
    }
    return <div className="form-container">
        <form onSubmit={handleSubmit}>
            <InputForm inputLabel="First Name" inputName="firstname" inputType="text" />
            <InputForm inputLabel="Last Name" inputName="lastname" inputType="text" />
            <InputForm inputLabel="Date of Birth" inputName="dateofbirth" inputType="date" />
            <InputForm inputLabel="Start Date" inputName="startdate" inputType="date" />
            <AdressField optionsList={["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "Guyana", "Peru"]} selectorLabel="state" />
            <Select selectorLabel="department" optionsList={["select dropdown", "Sales", "Marketing", "ingineering", "Legal"]} selectHeight="select-height" />
            <SaveButton actionOnClick="Save" />
        </form>
    </div>
}

export default Form