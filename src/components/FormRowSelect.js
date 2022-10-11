import React from 'react';

const FormRowSelect = ({ options, value, name, type, handleJobInput }) => {
  return (
    <div className="from-row">
      <label htmlFor={type} className="form-label">
        {type}
      </label>
      <select
        name={name}
        id={type}
        value={value}
        onChange={handleJobInput}
        className="form-select"
      >
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
