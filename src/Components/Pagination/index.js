import "./style.css"
import PropTypes from "prop-types"

/**
 * Represents a module of pagination
 * @param {number} props - numberperPage 
 * @param {number} props - totalNumber
 * @param {function} props - onChange
 * @returns 
 */


const Pagination = (props) => {
    const { numberPerPage, totalNumber, onChange } = props;

    const numberOfPage = totalNumber % numberPerPage === 0 ? totalNumber / numberPerPage : Math.floor(totalNumber / numberPerPage) + 1

    const pageNumbers = []

    for (let i = 1; i <= numberOfPage; i++) {
        pageNumbers.push(i)
    }

    return <ul className="pagination">
        {pageNumbers.map(number => <li key={`page_${number}`} onClick={() => onChange(number)} className="item-pagination">{number}</li>)}
    </ul>
}

Pagination.propTypes = {
    numberPerPage: PropTypes.number.isRequired,
    totalNumber: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Pagination