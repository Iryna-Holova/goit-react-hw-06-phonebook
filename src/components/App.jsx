import { useState } from 'react';
import { nanoid } from "nanoid";
import { ToastContainer } from 'react-toastify';
import { notify } from 'helpers/notification';
import { useLocalStorage } from 'hooks/localStorage';
import { Container, Title } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleSubmit = ({ name, number }) => {
    const normalisedName = name.toLowerCase();
    const isInContacts = contacts.find(contact => contact.name.toLowerCase() === normalisedName);

    if (isInContacts) {
      notify(`${name} is already in contacts`);
    } else {
      const contact = { name, number, id: nanoid() };

      setContacts(prevContacts => [...prevContacts, contact]);
    };
  }

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={handleSubmit} />
      <Title as='h2'>Contacts</Title>
      <Filter currentValue={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      <ToastContainer />
    </Container>
  )
};

export default App;

