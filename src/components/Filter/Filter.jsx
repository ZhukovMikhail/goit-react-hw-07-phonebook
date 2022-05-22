import { StyledLabel, StyledImput } from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/createApi';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputHandler = e => {
    const { value } = e.currentTarget;
    dispatch(filterContact(value));
  };
  const { data: contacts } = useGetContactsQuery();

  return (
    <>
      {contacts?.length !== 0 ? (
        <>
          <h2>Contacts:</h2>
          <StyledLabel>
            Find my contacts by name
            <StyledImput type="text" name="filter" onChange={inputHandler} />
          </StyledLabel>
        </>
      ) : (
        <h2>Contact list is empty:</h2>
      )}
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  contacts: PropTypes.array,
};
