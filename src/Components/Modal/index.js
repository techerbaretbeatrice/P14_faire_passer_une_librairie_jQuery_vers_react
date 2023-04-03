import "./style.css"
import PropTypes from "prop-types"

/**
 * Represents a modal with a message
 * @param {*} props - closeModal, closeModelType, modalTextContain 
 * @returns {JSX.Element}
 */

const Modal = (props) => {

    const { closeModal, closeModelType, modalTextContain } = props
    return <div className="modal-body">
        <span className="close-button" onClick={() => closeModal()}>{closeModelType} </span>
        <div className="window-message-container">
            <p>{modalTextContain} </p>
        </div>

    </div>
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    closeModelType: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    modalTextContain: PropTypes.string.isRequired

}



export default Modal