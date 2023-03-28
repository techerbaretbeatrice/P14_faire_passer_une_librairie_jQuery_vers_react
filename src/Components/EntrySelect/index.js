import "./style.css"
import { Select } from "b8ui"
import "b8ui/dist/index.css"

const EntrySelect = (props) => {
    const { textAfter, textBefore, onSelect } = props
    return <div className="entry-select-container">
        <div className="text-style">{textBefore}</div>
        <div className="entry-values">
            <Select labelSelector="" options={{
                10: 10,
                15: 15,
                20: 20
            }} onSelect={onSelect} />
        </div>
        <div className="text-style">{textAfter}</div>
    </div>
}

export default EntrySelect