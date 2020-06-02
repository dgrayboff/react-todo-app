import React from 'react';
import Button from './Button';

const Form = (props) => {
  return (
    <form className="ui form">
      <input
        onChange={props.onChange}
        value={props.value}
        type="text"
        placeholder={props.placeholder}
      />

      <Button
        onClick={props.onSaveSubmit}
        type="submit"
        className="green">
        {props.saveCopy}
      </Button>
      <Button
        onClick={props.onCancelClick}
        type="button">
        {props.cancelCopy}
      </Button>
    </form>
  );
};

export default Form;
