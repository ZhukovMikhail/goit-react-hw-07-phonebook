import { BackDrop } from './Modal.styled';
import {
  useEditContactMutation,
  useGetContactByIdQuery,
} from 'redux/createApi';
import { MyForm } from 'components/Form/Form';
import { useDispatch } from 'react-redux';
import { selector } from 'redux/modalSlice';
import PropTypes from 'prop-types';

export const Modal = ({ id }) => {
  const dispatch = useDispatch();
  const [editContact, { isLoading }] = useEditContactMutation();

  const { data: contact } = useGetContactByIdQuery(id, {
    refetchOnMountOrArgChange: 1,
  });

  isLoading && dispatch(selector(false));
  isLoading && document.querySelector('body').classList.remove('fixed');
  return (
    <>
      <BackDrop>
        {contact && (
          <MyForm
            mutator={editContact}
            initialFormValues={{ name: contact.name, number: contact.number }}
            btn1="Edit Contact"
            btn2="Reload Data"
            id={contact.id}
            name="Edit Contact"
          />
        )}
      </BackDrop>
    </>
  );
};

MyForm.propTypes = {
  id: PropTypes.string,
};
