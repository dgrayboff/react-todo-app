import React from 'react';
import Form from './Form';
import Button from './Button';

const EditListItem = ({ updating, onEditChange, handleEditSubmit }) => {
  return (
    <Form
      value={updating}
      onChange={onEditChange}
      >
      <Button
        onClick={handleEditSubmit}
        type="submit"
        className="green">
        Update Item
    </Button>
    {/* <Button
      onClick={props.onCancelClick}
      type="button">
      Cancel
    </Button> */}
    </Form>
  );
};

export default EditListItem;
