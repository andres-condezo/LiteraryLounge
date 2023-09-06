import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/gr';
import '../css/modal.css';

const Modal = ({ children, modalState, setModalState }) => {
  const handleModalcontainerClick = (e) => {
    e.stopPropagation();
  };
  if (modalState === false) return null;

  return ReactDom.createPortal(
    <>
      {modalState && (
        <div
          className="modal__overlay"
          aria-hidden="true"
          onClick={() => {
            setModalState(!modalState);
          }}
        >
          <div
            className="modal__container"
            aria-hidden="true"
            onClick={handleModalcontainerClick}
          >
            <div className="modal__header">
              <button
                className="modal__close-btn"
                type="button"
                onClick={() => {
                  setModalState(!modalState);
                }}
              >
                <GrFormClose className="close-btn-icon" />
              </button>
            </div>
            <div className="modal__main">{children}</div>
          </div>
        </div>
      )}
    </>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default Modal;
