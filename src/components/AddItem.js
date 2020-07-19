import React from 'react';
import NewItem from './NewItem';
import Button from './Button';
import '../styles/AddItem.css';

const AddItem = ({ onSaveSubmit, onAddItem, onSaveInputChange, onCancelClick, addItem, newItem }) => {
  const newItemCheck = () => {
    if (addItem) {
      return (
        <NewItem
          newItem={newItem}
          onAddItem={onAddItem}
          onSaveInputChange={onSaveInputChange}
          onSaveSubmit={onSaveSubmit}
          onCancelClick={onCancelClick}
        />
      );
    }

    return (
      <Button onClick={onAddItem} className="add-item-button">
        ADD AN ITEM
      </Button>
    );
  };

  return (
    <div className="ui container add-item">
      {newItemCheck()}
    </div>
  );
}

export default AddItem;
