import { ToastContainer } from 'react-toastify';
import { Container, Title } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => (
  <Container>
    <Title>Phonebook</Title>
    <ContactForm />
    <Title as='h2'>Contacts</Title>
    <Filter />
    <ContactList />
    <ToastContainer />
  </Container>
);

