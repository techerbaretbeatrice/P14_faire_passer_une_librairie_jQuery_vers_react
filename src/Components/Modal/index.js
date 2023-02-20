import "./style.css"

const Modal = (props) => {
    const { closeModal, closeModelType, modalTextContain } = props
    return <div className="modal-body">
        <div className="window-message-container">
            <span className="close-button" onClick={() => closeModal()}>{closeModelType} </span>
            <p>{modalTextContain} </p>
        </div>

    </div>
}

export default Modal