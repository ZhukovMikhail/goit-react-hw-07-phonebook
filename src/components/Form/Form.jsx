import { Formik, ErrorMessage } from 'formik';
import { StyledForm, Item, StyledButton } from 'components/Form/Form.styled';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContact, getContacts } from 'redux/contactSlice';
// import { v4 as uuidv4 } from 'uuid';
import { notify, isContactDubled, schema } from 'utils/utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { useGetContactsQuery } from 'redux/createApi';

export const MyForm = ({ mutateContact, initialValues, btn1, btn2, id }) => {
  const { data: contacts = [] } = useGetContactsQuery();

  const handleSubmit = (values, { resetForm }) => {
    if (
      (isContactDubled(contacts, values, 'name') ||
        isContactDubled(contacts, values, 'number')) &&
      btn1 === 'Add Contact'
    ) {
      notify();
      return;
    }
    // dispatch(addContact({ id: uuidv4(), ...values }));
    mutateContact({ id, ...values });
    resetForm();
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ handleReset }) => (
          <StyledForm>
            <label htmlFor="">
              Name
              <Item type="text" name="name" />
              <ErrorMessage name="name" />
            </label>
            <label htmlFor="">
              Number
              <Item type="tel" name="number" />
              <ErrorMessage name="number" />
            </label>
            <StyledButton type="submit">{btn1}</StyledButton>
            <StyledButton type="button" onClick={() => handleReset()}>
              {btn2}
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

MyForm.propTypes = {
  values: PropTypes.object,
  contacts: PropTypes.array,
};
