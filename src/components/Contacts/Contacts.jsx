import { StyledContList } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/createApi';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const Contacts = () => {
  const filter = useSelector(getFilter);

  const { data: contacts = [] } = useGetContactsQuery();

  const filteredContacts = contacts.filter(contact => {
    return contact.name
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase());
  });

  const shownContacts = filter !== '' ? filteredContacts : contacts;

  return (
    <StyledContList>
      {shownContacts.map(contact => {
        return <ContactItem contact={contact} key={contact.id} />;
      })}
    </StyledContList>
  );
};

Contacts.prototype = {
  filteredContacts: PropTypes.array,
  contacts: PropTypes.array,
};
