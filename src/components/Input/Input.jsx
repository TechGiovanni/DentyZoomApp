import React from 'react';

// styleSheet
import './Input.scss';

import PropTypes from 'prop-types';

const Input = (props) => {
  const { id, name, type, value, className, labelText, placeholder, handleChange, style } = props;

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
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`'form-input' ${className}`}
        style={style}
        autoComplete="false"
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  style: PropTypes.object
};

export default Input;
