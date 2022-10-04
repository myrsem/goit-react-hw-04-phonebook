import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/ContactFilter/ContactFilter';
import Phonebook from 'components/Phonebook/Phonebook';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const contacts = localStorage.getItem('contacts');
      const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
        setContacts(parseContacts);
      }
    isFirstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const id = nanoid();
    const contactItem = {
      id,
      name,
      number,
    };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : setContacts(prevState => [...prevState, contactItem]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContactList = () => {
    const normilizedValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedValue)
    );
  };

  const deleteContact = e => {
    const contactId = e.currentTarget.id;
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact}></ContactForm>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      {contacts.length > 0 ? (
        <ContactList
          contacts={filteredContactList()}
          onDeleleButton={deleteContact}
        />
      ) : (
        <p
          style={{
            fontWeight: 600,
          }}
        >
          Contact list is empty
        </p>
      )}
    </Phonebook>
  );
};

export default App;
