import React from 'react';
import List from './List';
import '../styles/App.css';
import AddItem from './AddItem';

class App extends React.Component {
  state = {
    items: [
      {
        val: 'first item',
        checked: false,
      },
      {
        val: 'second item',
        checked: false,
      },
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
      items: this.state.items.filter((item) => item.val !== itemToRemove),
    });
  };

  handleCheck = (item) => {
    console.log('App - handleCheck', item);
    // this.setState({
    //   items.find(item => im)
    // })
  };

  render() {
    return (
      <div className="ui container app">
        <List
          items={this.state.items}
          onRemoveItem={this.onRemoveItem}
          handleCheck={this.handleCheck}
        />
        <AddItem onSaveSubmit={this.onSaveSubmit} />
      </div>
    );
  }
}

export default App;
