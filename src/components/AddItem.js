import React from 'react';
import NewItem from './NewItem';
import Button from './Button';
import '../styles/AddItem.css';

const AddItem = ({ onSaveSubmit, onAddItem, onSaveInputChange, onCancelClick, addItem, newItem }) => {
  const newItemCheck = () => {
    if (addItem) {
      return (
        <NewItem
          newItem={newItem}
          onAddItem={onAddItem}
          onSaveInputChange={onSaveInputChange}
          onSaveSubmit={onSaveSubmit}
          onCancelClick={onCancelClick}
        />
      );
    }

    return (
      <Button onClick={onAddItem} className="add-item-button">
        ADD AN ITEM
      </Button>
    );
  };

  return (
    <div className="ui container add-item">
      {newItemCheck()}
    </div>
  );
}

// class AddItem extends React.Component {
//   state = {
//     newItem: '',
//     addItem: null,
//   };

//   onAddItem = () => {
//     this.setState({ addItem: true });
//   };

//   onSaveInputChange = (e) => {
//     this.setState({ newItem: e.target.value });
//   };

//   onSaveSubmit = (e) => {
//     e.preventDefault();
//     console.log('AddItem - props', this.props);
//     if (this.state.newItem !== '') {
//       this.props.onSaveSubmit(this.state.newItem);
//       this.setState({ newItem: '' });
//     }
//   };

//   onCancelClick = () => {
//     console.log('AddItem - onCancelClick');
//     this.setState({
//       addItem: false,
//       newItem: '',
//     });
//   };

//   newItemCheck = () => {
//     if (this.props.addItem) {
//       return (
//         <NewItem
//           newItem={this.state.newItem}
//           onAddItem={this.onAddItem}
//           onSaveInputChange={this.onSaveInputChange}
//           onSaveSubmit={this.onSaveSubmit}
//           onCancelClick={this.onCancelClick}
//         />
//       );
//     }

//     return (
//       <Button onClick={this.onAddItem} className="add-item-button">
//         ADD AN ITEM
//       </Button>
//     );
//   };

//   render() {
//     return <div className="ui container add-item">{this.newItemCheck()}</div>;
//   }
// }

export default AddItem;
