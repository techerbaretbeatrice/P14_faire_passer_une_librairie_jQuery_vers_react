import DataTable from "../../Components/DataTable"
import Header from "../../Components/Header"
import Search from "../../Components/Search"
import EntrySelect from "../../Components/EntrySelect"
import "./style.css"
import { useContext } from "react"
import { DataContext } from "../../Context"
import Pagination from "../../Components/Pagination"



const EmployeeListPage = () => {
    const { list, setSearch, search, numberPerPage, setNumberPerPage, currentPage, setCurrentPage } = useContext(DataContext)


    const filter = (item) => {

        return item.firstname?.toLowerCase().includes(search)
            || item.lastname?.toLowerCase().includes(search)
            || item.street?.toLowerCase().includes(search)
            || item.city?.toLowerCase().includes(search)
            || item.state?.toLowerCase().includes(search)
            || item.zipcode?.toLowerCase().includes(search)

    }







    const filteredList = list.filter(filter)
    console.log(filteredList)


    const startIndex = filteredList.length > 0 ? (numberPerPage * (currentPage - 1)) + 1 : 0
    const stopIndex = numberPerPage * currentPage > filteredList.length ? filteredList.length : numberPerPage * currentPage

    const formatDate = (date) => {
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        return `${String(day).length === 2 ? day : "0" + day}/${String(month).length === 2 ? month : "0" + month}/${year}`
    }

    return <div>
        <Header />
        <main>
            <div className="title">
                Current Employee
            </div>
            <div className="entry-parameter">
                <EntrySelect textBefore="Show" textAfter="entries" onSelect={setNumberPerPage} />
                <Search engineLabel=" search:" onSearch={setSearch} enginePlaceholder="search" />
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