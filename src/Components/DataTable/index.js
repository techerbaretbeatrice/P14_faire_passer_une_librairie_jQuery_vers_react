import "./style.css"

const DataTable = (props) => {
    const { headerLabelList, tableList, propertyList } = props
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
                            {propertyList.map((item, index) => (<div className="row-cell" key={`${item}-${index}`}>{item}</div>))}
                        </div>)
                    )

                }

            </div>
        </div>
    </div>
}

export default DataTable