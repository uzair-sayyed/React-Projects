import Modal from "./modalPopup";
import { useState } from "react";
import "./customModalPopup.css";

export default function ControlModal() {
  const [showModal, setShowModal] = useState(false);
  function handleOpenModal() {
    setShowModal(true);
    console.log(showModal);
  }
  function handleCloseModal() {
    setShowModal(false);
    console.log(showModal);
  }
  return (
    <div className='modal-overlay'>
      {!showModal && (
        <button className='modal-open-button' onClick={handleOpenModal}>
          Open Modal
        </button>
      )}
      {showModal && (
        <Modal
          header={<h2>Customized Header</h2>}
          body={<p>customized body</p>}
          footer={<h2>Customized Footer</h2>}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
}
