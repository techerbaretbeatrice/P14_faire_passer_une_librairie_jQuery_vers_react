import "./style.css"

const Modal = (props) => {

    const { closeModal, closeModelType, modalTextContain } = props
    return <div className="modal-body">
        <span className="close-button" onClick={() => closeModal()}>{closeModelType} </span>
        <div className="window-message-container">
            <p>{modalTextContain} </p>
        </div>

    </div>
}



export default Modal