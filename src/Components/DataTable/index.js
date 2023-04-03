
import "./style.css"
import UpAndDownArrows from "../UpAndDownArrows/index "
import { useState } from "react"
import PropTypes from "prop-types"

/**
 * Represents a row in the datatable body
 * @param {Array} keys - Array from keys to identifiate cells in the row 
 * @returns datas in the row in datatable body
 */

const Row = ({ row, keys }) => keys.map((key) => <td className="row-cell" key={key}>{row[key]}</td>)

/**
 * Represent the datatable component
 * @param {array} props - tableList 
 * @param {array} props - keys
 * @param {number} props - currentPage
 * @param {number} props - numberPerPage 
 * @param {string} props - defaultSortKey
 * @param {string} props - defaultSortOrder
 * @param {object} props - dataKeys
 * @param {JSX.Element} props - emptyElement
 * @param {Function} props - format
 * @returns {JSX.Element} datatable  displays a list of rows which can be ordered in a ascendant or a descendant way
 */
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
    const [sortKey, setSortKey] = useState(defaultSortKey)
    const [sortOrder, setSortOrder] = useState(defaultSortOrder)

    const paginate = (item, index) => {
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

DataTable.propTypes = {
    tableList: PropTypes.array.isRequired,
    keys: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    numberPerPage: PropTypes.number.isRequired,
    defaultSortKey: PropTypes.string.isRequired,
    defaultSortOrder: PropTypes.string.isRequired,
    dataKeys: PropTypes.object.isRequired,
    format: PropTypes.func.isRequired,

}

export default DataTable