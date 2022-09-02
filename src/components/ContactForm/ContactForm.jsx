import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addContact } from 'redux/contacts-reducer';
import { nanoid } from "nanoid";
import { notify } from 'helpers/notification';
import { ImUser, ImPhone } from "react-icons/im";
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';

export const ContactForm = () => {
  const { items } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const normalisedName = name.toLowerCase();
    const isInContacts = items.find(item => item.name.toLowerCase() === normalisedName);

    if (isInContacts) {
      notify(`${name} is already in contacts`);
    } else {
      const contact = { name, number, id: nanoid() };
      dispatch(addContact(contact));
    };
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

    return (
      <Form onSubmit={handleFormSubmit}>
        <Label><span><ImUser/> Name:</span><Input
          type="text"
          value={name}
          name='name'
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /></Label>
        <Label><span><ImPhone/> Number:</span><Input
          type="tel"
          value={number}
          name='number'
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /></Label>
        <SubmitButton type='submit'>Add contact</SubmitButton>
      </Form>
    )
};