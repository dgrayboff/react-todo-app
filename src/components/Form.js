import React from 'react';

const Form = (props) => {
  return (
    <form className="ui form">
      <input
        onChange={props.onChange}
        value={props.value}
        type="text"
        placeholder={props.placeholder}
      />
      {props.children}
    </form>
  );
};

export default Form;
