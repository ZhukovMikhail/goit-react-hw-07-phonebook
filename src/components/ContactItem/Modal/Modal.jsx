import { StyledButton, ModalOverlay, BackDrop } from './Modal.styled';
import {
  useEditContactMutation,
  useGetContactByIdQuery,
} from 'redux/createApi';
import { MyForm } from 'components/Form/Form';

export const Modal = ({ setisModalOpen, contact }) => {
  const [editContact, { isLoading }] = useEditContactMutation();

  const { data } = useGetContactByIdQuery(contact.id);

  const onCloseBtn = () => {
    setisModalOpen(false);
    document.querySelector('body').classList.remove('fixed');
  };
  isLoading && setisModalOpen(false);
  isLoading && document.querySelector('body').classList.remove('fixed');
  return (
    <>
      <BackDrop></BackDrop>
      <ModalOverlay>
        {data && (
          <MyForm
            mutateContact={editContact}
            initialValues={data}
            btn1="Edit Contact"
            btn2="Reload Data"
            id={data.id}
          />
        )}
        <StyledButton onClick={onCloseBtn}>&times;</StyledButton>
      </ModalOverlay>
    </>
  );
};
