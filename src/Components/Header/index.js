import { Link } from "react-router-dom"
import "./style.css"

/**
 * Represents the header pages with the loge and navigation
 * @returns {JSX.Element}
 */

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