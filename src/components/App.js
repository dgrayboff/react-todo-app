import React from 'react';
import List from './List';
import '../styles/App.css';
import AddItem from './AddItem';

// TODO: change items array values into individual objects with an id value
class App extends React.Component {
  state = {
    items: ['Make coffee', 'Scroll reddit', 'Pick up groceries'],
    newItem: '',
    addItem: null,
  };

  onSaveSubmit = (e) => {
    e.preventDefault();
    if (this.state.newItem !== '') {
      this.setState({
        items: [this.state.newItem, ...this.state.items],
        newItem: '',
      });
    }
  };

  onRemoveItem = (itemToRemove) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item !== itemToRemove),
    }));
  };

  onAddItem = () => {
    this.setState({ addItem: true });
  };

  onSaveInputChange = (e) => {
    this.setState({ newItem: e.target.value });
  };

  onCancelClick = () => {
    this.setState({
      addItem: false,
      newItem: '',
    });
  };

  onEditItemSubmit = (newItem, prev) => {
    this.setState((prevState) => ({
      items: [
        ...prevState.items.map((item) =>
          (item === prev ? newItem : item))
      ]
    }));
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
