import React from 'react';
import '../styles/NewItem.css';
import Button from './Button';
import Form from './Form';

const NewItem = (props) => {
  console.log('New Item - props: ', props)
  return (
    <div className="ui input new-item">
      <Form
        onChange={props.onSaveInputChange}
        value={props.newItem}
        placeholder="Add new item"
      >
      <Button
        onClick={props.onSaveSubmit}
        type="submit"
        className="green">
        Save Item
      </Button>
      <Button
        onClick={props.onCancelClick}
        type="button">
        Cancel
      </Button>
      </Form>
    </div>
  );
};

export default NewItem;
