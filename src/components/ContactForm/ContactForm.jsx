import { useState } from 'react';
import { Form, Label, Text, Input, AddContactBtn } from './ContactForm.styled';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit }) => {

  const [formInput, setFormInput] = useState({ name: '', number: '' });
  const { name, number } = formInput;

  const handleNameInput = event => {
    const { name, value } = event.currentTarget;
    setFormInput(state => ({ ...state, [name]: value }));
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setFormInput({ name: '', number: '' });
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Label>
        <Text>Name</Text>

        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleNameInput}
          value={name}
        />
      </Label>

      <Label>
        <Text>Number</Text>
        <Input
          placeholder="+XX XXX XXX XX XX"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNameInput}
          value={number}
        />
      </Label>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
