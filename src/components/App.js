import React from 'react';
import List from './List';
import '../styles/App.css';
import AddItem from './AddItem';

class App extends React.Component {
  state = {
    items: ['first item', 'second item'],
    // itemEdited: null,
  };

  onSaveSubmit = (newItem) => {
    console.log('App - newItem: ', newItem);
    this.setState({
      items: [newItem, ...this.state.items],
    });
  };

  onRemoveItem = (itemToRemove) => {
    console.log('App - onRemoveItem', itemToRemove);
    this.setState({
      items: this.state.items.filter((item) => item !== itemToRemove),
    });
  };

  // onEditItem = (itemToEdit) => {
  //   console.log('App - onEditItem: ', itemToEdit);
  //   this.setState({ itemEdited: itemToEdit });
  // };

  render() {
    return (
      <div className="ui container app">
        <List
          items={this.state.items}
          onRemoveItem={this.onRemoveItem}
          // onEditItem={this.onEditItem}
        />
        <AddItem onSaveSubmit={this.onSaveSubmit} />
      </div>
    );
  }
}

export default App;
