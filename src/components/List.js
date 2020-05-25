import React from 'react';
import ListItem from './ListItem';
import '../styles/List.css';

const currDate = () => {
  const curr = new Date();
  const day = curr.getDate();
  const month = curr.getMonth() + 1;
  const year = curr.getFullYear();

  return `${month}/${day}/${year}`;
};

const List = ({ items }) => {
  const renderedList = items.map((item) => {
    return <ListItem item={item} key={item.toString()} />;
  });

  return (
    <div className="ui middle list aligned divided">
      <h2 className="ui header">
        <span>Today - </span>
        {currDate()}
      </h2>

      <div className="item">
        <div className="left floated content">
          <ul>{renderedList}</ul>
        </div>
      </div>
    </div>
  );
};

export default List;
