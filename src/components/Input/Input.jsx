import React from 'react';

// styleSheet
import './Input.scss';

import PropTypes from 'prop-types';

const Input = (props) => {
  const { id, name, type, value, className, labelText, placeholder, handleChange } = props;

  return (
    <div className="form-row">
      {/* define the label if given  */}
      {labelText && (
        <label htmlFor={name} className="form-label">
          {labelText}
        </label>
      )}
      {/* define the input  */}
      <input
        id={id}
        name={name}
        type={type}
        defaultValue={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`'form-input' ${className}`}
        autoComplete="false"
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  className: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
};

export default Input;
