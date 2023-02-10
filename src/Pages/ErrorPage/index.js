import { Link } from "react-router-dom"
import Header from "../../Components/Header"
import "./style.css"

const ErrorPage = () => {
    return <div>
        <Header />
        <main>
            <div className="error-message">404 error</div>
            <p className="link-home"><Link to={"/"}>Retourner à la page d' accueil</Link></p>
        </main>
    </div>
}

export default ErrorPage