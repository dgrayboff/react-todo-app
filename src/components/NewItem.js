import React from 'react';
import '../styles/NewItem.css';

const NewItem = (props) => {
  return (
    <div className="ui input new-item">
      <form className="ui form">
        <input
          onChange={props.onSaveInputChange}
          value={props.newItem}
          type="text"
          placeholder="Add new item"
        />

        <button
          onClick={props.onSaveSubmit}
          className="ui green button"
          type="submit"
        >
          Save Item
        </button>

        <button
          onClick={props.onCancelClick}
          className="ui button"
          type="button"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NewItem;
