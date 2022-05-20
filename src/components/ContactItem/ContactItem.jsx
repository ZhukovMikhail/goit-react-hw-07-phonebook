import {
  StyledItem,
  StyledButton,
  TextBox,
  EditFormBox,
} from './ContactItem.styled';

import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/createApi';

import PropTypes from 'prop-types';
import { Modal } from './Modal/Modal';

export const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const onEnter = e => {
    document.querySelectorAll('.show').forEach(n => n.classList.remove('show'));
    e.currentTarget.children[1].classList.add('show');
    e.currentTarget.children[2].classList.add('show');
    document
      .querySelectorAll('.vissible')
      .forEach(n => n.classList.remove('vissible'));
    e.currentTarget.classList.add('vissible');
  };

  const handleDelete = e => {
    deleteContact(e.currentTarget.parentElement.id);
  };

  const handleEdit = e => {
    setIsOpenModal(true);
    document.querySelector('body').classList.add('fixed');

    // openModal => getContact{ id }=> form.value = contactValues{id}=> editContact(submitFormValue)
  };

  return (
    <>
      <StyledItem id={id} onClick={onEnter}>
        <TextBox>
          <span>{name}</span>
          <span>{number}</span>
        </TextBox>
        <StyledButton type="button" onClick={handleDelete} disabled={isLoading}>
          {isLoading ? 'Loading' : 'Delete'}
        </StyledButton>
        <StyledButton type="button" onClick={handleEdit}>
          Edit
        </StyledButton>
      </StyledItem>
      <EditFormBox>
        {isOpenModal && (
          <Modal setisModalOpen={setIsOpenModal} contact={contact} />
        )}
      </EditFormBox>
    </>
  );
};

ContactItem.prototype = {
  filteredContacts: PropTypes.array,
  contacts: PropTypes.array,
};
