import React from 'react';
import NewItem from './NewItem';
import '../styles/AddItem.css';

class AddItem extends React.Component {
  state = {
    newItem: '',
    addItem: null,
  };

  // Render <NewItem /> on click
  onAddItem = () => {
    this.setState({ addItem: true });
  };

  onSaveInputChange = (e) => {
    console.log('AddItem - onSaveInputChange: ', e.target.value);
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

  onCancelClick = (e) => {
    console.log('AddItem - onCancelClick');
    e.preventDefault();
  };

  render() {
    const newItemCheck = this.state.addItem ? (
      <NewItem
        newItem={this.state.newItem}
        onAddItem={this.onAddItem}
        onSaveInputChange={this.onSaveInputChange}
        onSaveSubmit={this.onSaveSubmit}
        onCancelClick={this.onCancelClick}
      />
    ) : (
      ''
    );

    return (
      <div className="ui container add-item">
        {newItemCheck}

        <button onClick={this.onAddItem} className="ui button add-item-button">
          ADD AN ITEM
        </button>
      </div>
    );
  }
}

export default AddItem;
