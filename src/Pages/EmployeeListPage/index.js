import DataTable from "../../Components/DataTable"
import Header from "../../Components/Header"
import Search from "../../Components/Search"
import EntrySelect from "../../Components/EntrySelect"
import "./style.css"
import { useContext } from "react"
import { DataContext } from "../../Context"

const EmployeeListPage = () => {
    const { list } = useContext(DataContext)

    return <div>
        <Header />
        <main>
            <div className="title">
                Current Employee
            </div>
            <div className="entry-parameter">
                <EntrySelect textBefore="Show" textAfter="entries" />
                <Search engineLabel=" search:" />
            </div>

            <DataTable
                headerLabelList={["firstname", "lastname", "dateofbirth", "startdate", "street", "city", "state", "zipcode", "department"]}
                tableList={list}
            />


        </main>
    </div>

}

export default EmployeeListPage