import { useState } from 'react';

function useModal(modal) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedForm, setSelectedForm] = useState({});

  function toggleModal(modal, user) {
    setIsVisible(!isVisible);
    setSelectedUser(user);
  }
  function toggleFormModal(modal, form) {
    setIsVisible(!isVisible);
    setSelectedForm(form);
  }
  function closeModal() {
    setIsVisible(!isVisible);
    setSelectedUser({});
  }

  // any other funtion that needs to be used with any modal can be added here
  function sendData(data) {
    // axios call to update the user info from the modal
  }

  return {
    isVisible,
    selectedUser,
    toggleModal,
    sendData,
    selectedForm,
    toggleFormModal,
  };
}

export default useModal;
