import Header from "../../Components/Header"
import Form from "../../Components/Form"
import "./style.css"

/**
 * Represents homepage: header and form to create a new employee
 * @returns {JSX.Element}
 */

const HomePage = () => {


    return <div>
        <Header />
        <main>
            <div className="title">
                Create Employee
            </div>
            <Form />

        </main>
    </div>
}

export default HomePage