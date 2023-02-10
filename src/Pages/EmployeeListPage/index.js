import Header from "../../Components/Header"
import "./style.css"

const EmployeeListPage = () => {
    return <div>
        <Header />
        <main>
            <div className="title">
                Current Employee
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Start Date</th>
                            <th>Department</th>
                            <th>Date of Birth</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Zip Code</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>techer</td>
                            <td>beatrice</td>
                            <td>02/01/2022</td>
                            <td>marketing</td>
                            <td>17/17/1977</td>
                            <td>5 rue de la croix au chat</td>
                            <td>saint-brieuc</td>
                            <td>22000</td>
                            <td>France</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </div>

}

export default EmployeeListPage