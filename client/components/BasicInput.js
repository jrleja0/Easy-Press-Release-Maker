import React from 'react';

const Input = props => {
  const { name, handleChange, inputData, type, placeholder, inputStyle } = props;

  return (
    <td className={inputStyle ? `${inputStyle} input-basic` : 'input-basic'}>
      <div>
        <label htmlFor={name}>{name}</label>
      </div>
      <div>
        <input onChange={handleChange} value={inputData} type={type} className="form-control" id={name} placeholder={
        placeholder ? placeholder : name
        } />
      </div>
    </td>
  );
};

const Checkbox = props => {
  const { checkboxLabel } = props;

  return (
    <td className="checkbox-basic">
      <div className="form-check">
        <div>
          <label className="form-check-label">{checkboxLabel}</label>
        </div>
        <div>
          <input className="form-check-input" type="checkbox" />
        </div>
      </div>
    </td>
  );
};

const TextArea = props => {
  const { name, handleChange, inputData, type, placeholder, inputStyle } = props;

  return (
    <td className={inputStyle ? `${inputStyle} input-basic` : 'input-basic'}>
      <div>
        <label htmlFor={name}>{name}</label>
      </div>
      <div>
        <textarea rows="16" onChange={handleChange} value={inputData} type={type} className="form-control" id={name} placeholder={
        placeholder ? placeholder : name
        } />
      </div>
    </td>
  );
};

const BasicInput = props => {
  return (
    <tr className="form-group">
      <Input {...props} />
    </tr>
  );
};

const BasicInputWithCheckbox = props => {
  return (
    <tr className="form-group">
      <Input {...props} />
      <Checkbox checkboxLabel={props.checkboxLabel} />
    </tr>
  );
};

const BasicTextArea = props => {
  return (
    <tr className="form-group">
      <TextArea {...props} />
    </tr>
  );
};

export { BasicInput, BasicInputWithCheckbox, BasicTextArea };
