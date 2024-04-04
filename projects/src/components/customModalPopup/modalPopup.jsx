import "./customModalPopup.css";

export default function Modal({ header, body, footer, closeModal }) {
  return (
    <div className='modal-content'>
      <div className='main-modal'>
        <div className='modal-header'>
          {header ? header : "modal header"}
          <span className='close-modal' onClick={closeModal}>
            &times;
          </span>
        </div>
        <div className='modal-body'>{body ? body : "modal body"}</div>
        <div className='modal-footer'>{footer ? footer : "modal footer"}</div>
      </div>
    </div>
  );
}
