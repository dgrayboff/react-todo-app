import React from 'react';
import Form from './Form';

const EditListItem = (props) => {
  console.log('EditListItem props: ', props);
  return (
    <Form value={props.itemValue}/>
  );
};

export default EditListItem;
