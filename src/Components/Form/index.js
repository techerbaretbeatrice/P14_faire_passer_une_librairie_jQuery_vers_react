import { useContext, useState } from "react"
import DatePicker from "react-datepicker";
import { DataContext } from "../../Context"
import EmployeeObj from "../../Models"
import AdressField from "../AdressField"
import InputForm from "../InputForm"
import SaveButton from "../SaveButton"
import Select from "../Select"
import "./style.css"

import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
    const { addEmployee } = useContext(DataContext)
    const [startDate, setStartDate] = useState(new Date());
    const [dateOfBirth, setDateOfbirth] = useState(new Date());
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const form = evt.currentTarget
        const firstName = form.firstname.value
        console.log(firstName)
        const lastName = form.lastname.value
        console.log(lastName)
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
        form.reset()
    }
    return <div className="form-container">
        <form onSubmit={handleSubmit}>
            <InputForm inputLabel="First Name" inputName="firstname" inputType="text" />
            <InputForm inputLabel="Last Name" inputName="lastname" inputType="text" />
            <div className="input-wrapper">
                <label className="input-label">Date of Birth</label>
                <div className="date-picker-container">
                    <DatePicker dateFormat="dd/MM/yyyy" selected={dateOfBirth} onChange={(date) => setDateOfbirth(date)} />
                </div>
            </div>
            <div className="input-wrapper">
                <label className="input-label">Start Date</label>
                <div className="date-picker-container">
                    <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
            </div>
            <AdressField
                optionsList={{
                    Argentina: "AR",
                    Bolivia: "BO",
                    Chile: "CHI",
                    Colombia: "CO",
                    Ecuador: "ECU",
                    Guyana: "GU",
                    Peru: "PE"
                }
                }
                selectorLabel="state"
            />
            <Select selectorLabel="department" optionsList={{
                "Sales": "Sales",
                "Marketing": "Marketing",
                "Engineering": "Engineering",
                "Legal": "Legal"

            }} selectHeight="select-height" />
            <SaveButton actionOnClick="Save" />
        </form>
    </div>
}

export default Form