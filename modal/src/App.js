import React, { useState } from 'react';
import Modal from 'react-modal';

// Make sure to set app element to indicate where the modal is being used for accessibility
Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Hello Modal!</h2>
        <p>This is a simple modal example.</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default App;
