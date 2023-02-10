import Header from "../../Components/Header"
import SaveButton from "../../Components/SaveButton"
import "./style.css"

const HomePage = () => {
    return <div>
        <Header />
        <main>
            <div className="title">
                Create Employee
            </div>
            <div className="form-container">
                <form >
                    <div className="input-wrapper">
                        <label htmlFor="firstname">First Name</label>
                        <input name='firstname' type="text" id="firstname" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastname">Last Name</label>
                        <input name='lastname' type="password" id="lastname" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="dateofbirth">Date Of Birth</label>
                        <input type="date" name='dateofbirth' id="dateofbirth" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="startdate">Start Date</label>
                        <input type="date" name='startdate' id="startdate" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="address">Address</label>
                        <input type="text" name='address' id="address" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="city">City</label>
                        <input type="text" name='city' id="city" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="zipcode">Zip Code</label>
                        <input type="text" name='zipcode' id="zipcode" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="state">State</label>
                        <select>
                            <option value="Argentina">Argentina</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Chile">Chile</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Venezuela">Venezuela</option>
                        </select>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="department">Department</label>
                        <select>
                            <option>Select dropdown</option>
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Ingineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>
                    </div>
                </form>
            </div>
            <SaveButton />
        </main>
    </div>
}

export default HomePage