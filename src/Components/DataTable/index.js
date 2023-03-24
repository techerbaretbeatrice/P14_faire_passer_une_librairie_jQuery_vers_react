
import "./style.css"
import UpAndDownArrows from "../UpAndDownArrows/index "
import { useState } from "react"

const Row = ({ row, keys }) => keys.map((key) => <td className="row-cell" key={key}>{row[key]}</td>)

const DataTable = (props) => {
    const {
        tableList,
        keys,
        currentPage,
        numberPerPage,
        defaultSortKey,
        defaultSortOrder,
        dataKeys,
        emptyElement,
        format = (item) => item,
    } = props
    console.log(tableList)
    const [sortKey, setSortKey] = useState(defaultSortKey)
    const [sortOrder, setSortOrder] = useState(defaultSortOrder)

    const paginate = (item, index) => {
        // avec le nombre par page, et le numero de page, savoir quel index sera sur la page
        // page = 1, nb par page = 5 => 0,1,2,3,4 nombres plus petit que 5 x 1 et plus grand ou egal à 5 x 0
        // page = 2, nb par page = 5 => 5,6,7,8,9 nombres plus petit que 5 x 2 et plus grand ou egal à 5 x 1
        // page = 3, nb par page = 5 => 10,11,12,13,14 nombres plus petit que 5 x 3 et plus grand ou egal à 5 x 2
        // => si on remplace par les variables => nombre plus petit que numberPerPage x currentPage et plus grand ou egal à numberPerPage x (currentPage-1)
        // page = 1, nb par page = 10 => 0,1,2,3,4,5,6,7,8,9
        // page = 2, nb par page = 10 => 10,11,12,13,14,15,16,17,18,19
        if (index < numberPerPage * currentPage && index >= numberPerPage * (currentPage - 1)) return true
    }


    const sortedList = Array.from(tableList).sort((a, b) => {
        const valueA = a[sortKey] instanceof Date ? a[sortKey] : a[sortKey]?.toLowerCase() || "";
        const valueB = b[sortKey] instanceof Date ? a[sortKey] : b[sortKey]?.toLowerCase() || "";
        const ALowerThanB = valueA < valueB
        const AGreaterThanB = valueA > valueB
        if (sortOrder === "asc" && ALowerThanB) {
            return -1
        }
        if (sortOrder === "desc" && AGreaterThanB) {
            return -1
        }
        return 1
    }
    )

    const paginatedList = sortedList.filter(paginate)
    const changeOrder = (key, order) => {

        setSortOrder(order)
        setSortKey(key)

    }

    return <div className="data-table">
        <table className="table">
            <thead className="table-head">
                <tr className="table-header">{Object.entries(dataKeys).map(([key, value]) => (
                    <th className="header-label" key={`${key}`}>
                        <div className="header-label-cell">
                            {value}
                            <UpAndDownArrows
                                isUpActive={key === sortKey && sortOrder === "asc"}
                                isDownActive={key === sortKey && sortOrder === "desc"}
                                onUp={() => changeOrder(key, "asc")}
                                onDown={() => changeOrder(key, "desc")} />
                        </div>
                    </th>
                )
                )}
                </tr>

            </thead>
            <tbody className="table-body">
                {
                    paginatedList.length === 0 && emptyElement
                }
                {
                    paginatedList.map(item => format(item)).map(
                        (item, index) => (<tr className="body-table-row" key={`${item}-${index}`}>
                            <Row row={item} keys={keys}></Row>
                        </tr>)
                    )

                }

            </tbody>
        </table>
    </div>
}

export default DataTable