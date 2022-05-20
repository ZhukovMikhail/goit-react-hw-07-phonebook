import { StyledItem, StyledButton, TextBox } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/createApi';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { selector, contactId } from 'redux/modalSlice';
import { Modal } from 'components/Modal/Modal';
import { useSelector } from 'react-redux';

export const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;

  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const dispatch = useDispatch();
  const modalSelector = useSelector(state => state.modal.selector);
  const modalIdSelector = useSelector(state => state.modal.contactId);

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
    const id = e.currentTarget.parentElement.id;
    dispatch(selector('edit'));
    dispatch(contactId(id));

    document.querySelector('body').classList.add('fixed');
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
        <StyledButton type="button" onClick={handleEdit} disabled={isLoading}>
          Edit
        </StyledButton>
      </StyledItem>
      {modalSelector === 'edit' && id === modalIdSelector && (
        <Modal id={id}></Modal>
      )}
    </>
  );
};

ContactItem.prototype = {
  filteredContacts: PropTypes.array,
  contacts: PropTypes.array,
  modalSelector: PropTypes.string,
  modalIdSelector: PropTypes.number,
};
