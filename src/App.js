import './App.styled.jsx';
import { Container } from 'App.styled';
import { MyForm } from 'components/Form/Form.jsx';
import { Contacts } from 'components/Contacts/Contacts.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateContactMutation } from 'redux/createApi';

const App = () => {
  const [addContact] = useCreateContactMutation();
  const initialFormValues = { name: '', number: '' };

  return (
    <Container>
      <h1>Phonebook</h1>
      <MyForm
        mutateContact={addContact}
        initialValues={initialFormValues}
        btn1="Add Contact"
        btn2="Clear Form"
      />
      <h2>Contacts:</h2>
      <Filter />
      <Contacts />
    </Container>
  );
};

export default App;
