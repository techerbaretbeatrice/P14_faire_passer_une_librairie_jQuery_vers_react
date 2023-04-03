import "./style.css"
import { Select } from "b8ui"
import "b8ui/dist/index.css"
import PropTypes from "prop-types"

/**
 * Represent a component which controls the number of row entry in the datatable
 * @param {string} props - textAfter : text after the entry module select
 * @param {string} props - textBefore
 * @param {function} props - onSelect : function that permitted to select a value in the entry module select
 * @returns {JSX.Element} 
 */

const EntrySelect = (props) => {
    const { textAfter, textBefore, onSelect } = props
    return <div className="entry-select-container">
        <div className="text-style">{textBefore}</div>
        <div className="entry-values">
            <Select labelSelector="" options={{
                10: 10,
                25: 25,
                50: 50,
                100: 100
            }} onSelect={onSelect} />
        </div>
        <div className="text-style">{textAfter}</div>
    </div>
}

EntrySelect.propTypes = {
    textAfter: PropTypes.string,
    textBefore: PropTypes.string,
    onSelect: PropTypes.func.isRequired
}

export default EntrySelect