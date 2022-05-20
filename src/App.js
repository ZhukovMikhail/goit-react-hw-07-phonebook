import './App.styled.jsx';
import { Container } from 'App.styled';
import { Contacts } from 'components/Contacts/Contacts.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { NavBar } from 'components/NavBar/NavBar.jsx';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Container>
      <NavBar />
      <Filter />
      <Contacts />
    </Container>
  );
};

export default App;
