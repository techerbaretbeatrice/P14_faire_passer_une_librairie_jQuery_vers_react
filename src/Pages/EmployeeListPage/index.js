import DataTable from "../../Components/DataTable"
import Header from "../../Components/Header"
import Search from "../../Components/Search"
import EntrySelect from "../../Components/EntrySelect"
import "./style.css"

const EmployeeListPage = () => {
    const data = {
        "employee": [
            {
                "nom": "pierre",
                "age": 15,
                "id": 0,

            },

            {
                "nom": "jean",
                "age": 12,
                "id": 1,

            },
            {
                "nom": "marc",
                "age": 16,
                "id": 2,

            },

        ],
    }

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
                headerLabelList={["nom", "age", "adresse"]}
                tableList={Array.from(data.employee)}
                propertyList={["jean", 12, "5 rue de vienne", "2", "3"]}
            />


        </main>
    </div>

}

export default EmployeeListPage