import Select from "../Select"
import "./style.css"

const EntrySelect = (props) => {
    const { textAfter, textBefore } = props
    return <div className="entry-select-container">
        <div className="text-before">{textBefore}</div>
        <div className="entry-values">
            <Select selectorLabel="" optionsList={[10, 15, 20]} />
        </div>
        <div className="text-after">{textAfter}</div>
    </div>
}

export default EntrySelect