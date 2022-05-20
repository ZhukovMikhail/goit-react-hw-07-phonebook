import { useCreateContactMutation } from 'redux/createApi';
import { BackDrop } from 'components/Modal/Modal.styled';
import { StyledButton } from 'components/Button/Button.Styled.jsx';
import { MyForm } from 'components/Form/Form.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { selector } from 'redux/modalSlice';
import PropTypes from 'prop-types';

export const NavBar = () => {
  const modalSelector = useSelector(state => state.modal.selector);
  const dispatch = useDispatch();
  const [addContact] = useCreateContactMutation();
  const addContactModal = e => {
    dispatch(selector('add'));
  };

  return (
    <>
      <h1>Phonebook</h1>
      {!modalSelector && (
        <StyledButton onClick={addContactModal}>AddContact</StyledButton>
      )}
      {modalSelector === 'add' && (
        <BackDrop>
          {/* <ModalOverlay> */}
          <MyForm
            mutator={addContact}
            initialFormValues={{ name: '', number: '' }}
            btn1="Add Contact"
            btn2="Clear Form"
            name="AddContact"
          />
          {/* </ModalOverlay> */}
        </BackDrop>
      )}
    </>
  );
};

MyForm.propTypes = {
  modalSelector: PropTypes.string,
};
