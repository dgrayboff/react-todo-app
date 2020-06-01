import React from 'react';
import NewItem from './NewItem';
import '../styles/AddItem.css';

class AddItem extends React.Component {
  state = {
    newItem: '',
    addItem: null,
  };

  onAddItem = () => {
    this.setState({ addItem: true });
  };

  onSaveInputChange = (e) => {
    this.setState({ newItem: e.target.value });
  };

  onSaveSubmit = (e) => {
    e.preventDefault();
    console.log('AddItem - props', this.props);
    if (this.state.newItem !== '') {
      this.props.onSaveSubmit(this.state.newItem);
      this.setState({ newItem: '' });
    }
  };

  onCancelClick = () => {
    console.log('AddItem - onCancelClick');
    this.setState({
      addItem: false,
      newItem: '',
    });
  };

  newItemCheck = () => {
    if (this.state.addItem) {
      return (
        <NewItem
          newItem={this.state.newItem}
          onAddItem={this.onAddItem}
          onSaveInputChange={this.onSaveInputChange}
          onSaveSubmit={this.onSaveSubmit}
          onCancelClick={this.onCancelClick}
        />
      );
    }

    return (
      <button onClick={this.onAddItem} className="ui button add-item-button">
        ADD AN ITEM
      </button>
    );
  };

  render() {
    return (
      <div className="ui container add-item">
        {this.newItemCheck()}
      </div>
    );
  }
}

export default AddItem;
