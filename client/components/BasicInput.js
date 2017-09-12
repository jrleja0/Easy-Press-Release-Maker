import React from 'react';

const Input = props => {
  const { name, handleChange, query, type, placeholder } = props;

  return (
    <div className="inline">
      <label htmlFor={name}>{name}</label>
      <div className="inline-block input-width">
        <input onChange={handleChange} value={query} type={type}className="form-control" id={name} placeholder={
          placeholder ? placeholder : name
        } />
      </div>
    </div>
  );
};

const Checkbox = props => {
  const { checkboxLabel } = props;

  return (
    <div className="inline-block">
      <div className="form-check">
        <label className="form-check-label">{checkboxLabel}</label>
        <input className="form-check-input" type="checkbox" />
      </div>
    </div>
  );
};

const BasicInput = props => {
  return (
    <div className="form-group row">
      <Input {...props} />
    </div>
  );
};

const BasicInputWithCheckbox = props => {
  return (
    <div className="form-group row">
    <Input {...props} />
    <Checkbox checkboxLabel={props.checkboxLabel} />
  </div>
  );
};

export { BasicInput, BasicInputWithCheckbox };
