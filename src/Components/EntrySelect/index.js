import Select from "../Select"
import "./style.css"

const EntrySelect = (props) => {
    const { textAfter, textBefore, onSelect } = props
    return <div className="entry-select-container">
        <div className="text-style">{textBefore}</div>
        <div className="entry-values">
            <Select selectorLabel="" optionsList={{
                10: 10,
                15: 15,
                20: 20
            }} onSelect={onSelect} />
        </div>
        <div className="text-style">{textAfter}</div>
    </div>
}

export default EntrySelect