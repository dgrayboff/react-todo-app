import React from 'react';
import List from './List';
import '../styles/App.css';
import AddItem from './AddItem';

class App extends React.Component {
  state = {
    items: [
      'first item',
      'second item'
    ],
  };

  onSaveSubmit = (newItem) => {
    console.log('App - newItem: ', newItem);
    this.setState({
      items: [newItem, ...this.state.items],
    });
    console.log(this.state.items);
  };

  onRemoveItem = (itemToRemove) => {
    console.log('App - onRemoveItem', itemToRemove);
    this.setState({
      items: this.state.items.filter((item) => item !== itemToRemove),
    });
  };

  render() {
    return (
      <div className="ui container app">
        <List
          items={this.state.items}
          onRemoveItem={this.onRemoveItem}
        />
        <AddItem onSaveSubmit={this.onSaveSubmit} />
      </div>
    );
  }
}

export default App;
