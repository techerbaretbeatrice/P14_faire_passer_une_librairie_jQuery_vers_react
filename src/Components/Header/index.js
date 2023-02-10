import { Link } from "react-router-dom"
import "./style.css"

const Header = () => {
    return <header>
        <div className="logo"> HRnet</div>
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/employeeList"}>Current Employees</Link></li>
            </ul>
        </nav>
    </header>
}

export default Header