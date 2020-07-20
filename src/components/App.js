import React from 'react';
import List from './List';
import '../styles/App.css';
import AddItem from './AddItem';

class App extends React.Component {
  state = {
    items: ['Make coffee', 'Scroll reddit', 'Pick up groceries'],
    newItem: '',
    addItem: null,
  };

  onSaveSubmit = (e) => {
    e.preventDefault();
    console.log('App - e: ', e);
    if (this.state.newItem !== '') {
      this.setState({
        items: [this.state.newItem, ...this.state.items],
        newItem: '',
      });
    }
  };

  onRemoveItem = (itemToRemove) => {
    console.log('App - onRemoveItem', itemToRemove);
    this.setState({
      items: this.state.items.filter((item) => item !== itemToRemove),
    });
  };

  onAddItem = () => {
    this.setState({ addItem: true });
  };

  onSaveInputChange = (e) => {
    this.setState({ newItem: e.target.value });
  };

  onCancelClick = () => {
    console.log('AddItem - onCancelClick');
    this.setState({
      addItem: false,
      newItem: '',
    });
  };

  onEditItemSubmit = (newItem, prev) => {
    console.log('App - onEditItemSubmit prev: ', prev);
    console.log('App - onEditItemSubmit newItem: ', newItem);
    console.log(this.state.items);
  };

  render() {
    return (
      <div className="ui container app">
        <List
          items={this.state.items}
          onRemoveItem={this.onRemoveItem}
          onEditItemSubmit={this.onEditItemSubmit}
        />
        <AddItem
          onSaveSubmit={this.onSaveSubmit}
          onAddItem={this.onAddItem}
          onSaveInputChange={this.onSaveInputChange}
          onCancelClick={this.onCancelClick}
          addItem={this.state.addItem}
          newItem={this.state.newItem}
        />
      </div>
    );
  }
}

export default App;
