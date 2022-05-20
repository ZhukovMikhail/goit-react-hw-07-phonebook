import { StyledContList } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/createApi';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useMemo } from 'react';

export const Contacts = () => {
  const filter = useSelector(getFilter);

  const { data: contacts = [] } = useGetContactsQuery();

  const filteredContacts = useMemo(() => {
    return contacts.filter(contact => {
      // console.log('filter');
      return contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    });
  }, [contacts, filter]);

  const shownContacts = filter !== '' ? filteredContacts : contacts;

  return (
    <StyledContList>
      {shownContacts.map(contact => {
        // console.log('map');
        return <ContactItem contact={contact} key={contact.id} />;
      })}
    </StyledContList>
  );
};

Contacts.prototype = {
  filteredContacts: PropTypes.array,
  filter: PropTypes.string,
  contacts: PropTypes.array,
};
