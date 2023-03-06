
import "./style.css"

const Row = ({ row, keys }) => keys.map((key) => <div key={key}>{row[key]}</div>)

const DataTable = (props) => {
    const { headerLabelList, tableList } = props
    console.log(tableList)
    return <div className="data-table">
        <div className="table">
            <div className="table-head">
                <div className="table-header">{headerLabelList.map((item, index) => (
                    <div className="header-label" key={`${item}-${index}`}>{item}</div>
                )
                )}
                </div>

            </div>
            <div className="table-body">
                {
                    tableList.map(
                        (item, index) => (<div className="body-table-row" key={`${item}-${index}`}>
                            <Row row={item} keys={headerLabelList}></Row>
                        </div>)
                    )

                }

            </div>
        </div>
    </div>
}

export default DataTable