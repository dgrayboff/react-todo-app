import React from 'react';
import '../styles/ListItem.css';

const ListItem = ({ item }) => {
  return (
    <li className="list-item">
      <div className="ui checkbox">
        <input type="checkbox" name="list-item" />
        <label>{item}</label>
      </div>
    </li>
  );
};

export default ListItem;
