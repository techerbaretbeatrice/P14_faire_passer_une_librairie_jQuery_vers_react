import Header from "../../Components/Header"
import SaveButton from "../../Components/SaveButton"
import Form from "../../Components/Form"
import "./style.css"

const HomePage = () => {
    return <div>
        <Header />
        <main>
            <div className="title">
                Create Employee
            </div>
            <Form />
            <SaveButton actionOnClick="Save" />
        </main>
    </div>
}

export default HomePage