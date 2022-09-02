import { useState } from 'react';
import PropTypes from "prop-types";
import { ImUser, ImPhone } from "react-icons/im";
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';

const ContactForm = ({onSubmit}) => {
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

    onSubmit({name, number});
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

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};