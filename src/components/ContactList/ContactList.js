import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => (
        <li className="ContactList__item" key={id}>
          <p>
            {name}: <span>{number}</span>
          </p>
          <button
            className="ContactList__btn"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func,
};