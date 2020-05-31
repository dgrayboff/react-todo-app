import React from 'react';
import '../styles/ListItem.css';

const ListItem = ({ item, onRemoveItem, handleCheck }) => {
  return (
    <li className="list-item">
      <div className="ui checkbox">
        <input type="checkbox" name="list-item" onChange={handleCheck}/>
        <label>{item}</label>
      </div>

      <div className="ui icon buttons">
      <button
          onClick={onRemoveItem}
          className="ui basic button"
          type="button"
        >
          <i className="close icon"></i>
        </button>
      </div>

    </li>
  );
};

export default ListItem;
