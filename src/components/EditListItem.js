import React from 'react';
// import NewItem from './NewItem';

const EditListItem = (props) => {
  console.log('EditListItem props: ', props);
  return (
    <div>
      <input type="text" value={props.itemValue}/>
    </div>
  );
};

export default EditListItem;
