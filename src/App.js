import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import 'index.css';
import ContactList from 'components/ContactList/ContactList';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(window.localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts([contact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
