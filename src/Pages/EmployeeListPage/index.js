import DataTable from "../../Components/DataTable"
import Header from "../../Components/Header"
import Search from "../../Components/Search"
import EntrySelect from "../../Components/EntrySelect"
import "./style.css"
import { useContext } from "react"
import { DataContext } from "../../Context"
import Pagination from "../../Components/Pagination"


const formatDate = (date) => {
    if (!(date instanceof Date)) return ""
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${String(day).length === 2 ? day : "0" + day}/${String(month).length === 2 ? month : "0" + month}/${year}`
}


const EmployeeListPage = () => {
    const { list, setSearch, search, numberPerPage, setNumberPerPage, currentPage, setCurrentPage } = useContext(DataContext)

    //allows to filter employee List by using the letters types in the engine
    const filter = (item) => {
        const searchWord = search.toLowerCase()
        return item.firstname?.toLowerCase().includes(searchWord)
            || item.lastname?.toLowerCase().includes(searchWord)
            || item.street?.toLowerCase().includes(searchWord)
            || item.city?.toLowerCase().includes(searchWord)
            || item.state?.toLowerCase().includes(searchWord)
            || item.department?.toLowerCase().includes(searchWord)
            || item.zipcode?.toLowerCase().includes(searchWord)
            || (item.dateofbirth && formatDate(new Date(item.dateofbirth)).includes(searchWord))
            || (item.startdate && formatDate(new Date(item.startdate)).includes(searchWord))

    }

    // filtered list
    const filteredList = list.filter(filter)

    const startIndex = filteredList.length > 0 ? (numberPerPage * (currentPage - 1)) + 1 : 0
    const stopIndex = numberPerPage * currentPage > filteredList.length ? filteredList.length : numberPerPage * currentPage



    return <div>
        <Header />
        <main>
            <div className="title">
                Current Employee
            </div>
            <div className="entry-parameter">
                <EntrySelect textBefore="Show" textAfter="entries" onSelect={setNumberPerPage} />
                <Search engineLabel=" search:" onSearch={(value) => {
                    setSearch(value)
                    setCurrentPage(1)
                }} enginePlaceholder="search" />
            </div>

            <DataTable
                keys={["firstname", "lastname", "startdate", "department", "dateofbirth", "street", "city", "state", "zipcode"]}
                headerLabelList={["First Name", "Last Name", "Start Date", "Department", "Date of Birth", "Street", "City", "State", "Zip Code"]}
                dataKeys={{
                    firstname: "First Name",
                    lastname: "Last Name",
                    startdate: "Start Date",
                    department: "Department",
                    dateofbirth: "Date of Birth",
                    street: "Street",
                    city: "City",
                    state: "State",
                    zipcode: "Zip Code"


                }}
                tableList={filteredList}
                currentPage={currentPage}
                numberPerPage={numberPerPage}
                defaultSortKey="firstname"
                defaultSortOrder="asc"
                format={(item) => ({ ...item, startdate: item.startdate && formatDate(new Date(item.startdate)), dateofbirth: item.dateofbirth && formatDate(new Date(item.dateofbirth)) })}
                emptyElement={<Empty />}
            />

            <div className="pagination-container">
                <div className="current-page-view">
                    <span>{`Showing ${startIndex} to ${stopIndex} of ${filteredList.length} entries`}</span>
                    {
                        filteredList.length < list.length && <span>{`(filtered from ${list.length} total entries)`}</span>
                    }

                </div>
                <Pagination onChange={setCurrentPage} numberPerPage={numberPerPage} totalNumber={filteredList.length} />
            </div>

        </main>

    </div>



}

const Empty = () => <tr><td colSpan={9}>No result available</td></tr>

export default EmployeeListPage