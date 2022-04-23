import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ value, onChange }) => (
  <label className="Filter__label">
    Find contacts by name
    <input
      className="Filter__input"
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
