import { useContext, useState } from "react"
import DatePicker from "react-datepicker";
import { DataContext } from "../../Context"
import EmployeeObj from "../../Models"
import AdressField from "../AdressField"
import InputForm from "../InputForm"
import SaveButton from "../SaveButton"
import { Select } from "b8ui"
import "./style.css"
import "react-datepicker/dist/react-datepicker.css";
import "b8ui/dist/index.css"

/**
 * Represents a form 
 * @returns {JSX.Element}
 */

const Form = () => {
    const { addEmployee } = useContext(DataContext)
    const [startDate, setStartDate] = useState(new Date());
    const [dateOfBirth, setDateOfbirth] = useState(new Date());
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const form = evt.currentTarget
        const firstName = form.firstname.value
        const lastName = form.lastname.value
        const street = form.street.value
        const city = form.city.value
        const state = form.state.value
        const zipCode = form.zipcode.value
        const department = form.department.value
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
        setStartDate(new Date())
        setDateOfbirth(new Date())

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
                options={{
                    Alabama: "AL",
                    Alaska: "AK",
                    "American Samoa": "AS",
                    Arizona: "AZ",
                    Arkansas: "AR",
                    California: "CA",
                    Colorado: "CO",
                    Connecticut: "CT",
                    Delaware: "DE",
                    "District of Comlumbia": "DC",
                    Florida: "FL",
                    Georgia: "GA",
                }
                }
                labelSelector="state"
            />
            <Select label="Departement" labelSelector="department" options={{
                "Sales": "Sales",
                "Marketing": "Marketing",
                "Engineering": "Engineering",
                "Legal": "Legal",
                "Human Resources": "Human Resources"

            }} selectHeight="select-height" />
            <SaveButton actionOnClick="Save" />
        </form>
    </div>
}

export default Form