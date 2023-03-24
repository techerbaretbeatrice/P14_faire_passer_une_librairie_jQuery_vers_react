import "./style.css"


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

export default Pagination