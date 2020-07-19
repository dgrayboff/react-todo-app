import React from 'react';
import '../styles/ListItem.css';
import EditListItem from './EditListItem';
import Form from './Form';
import Button from './Button';

class ListItem extends React.Component {
  state = {
    checked: false,
    edit: false,
    updating: this.props.item
  };

  handleCheckClick = () => {
    console.log('ListItem - handleCheckClick');
    this.setState({
      checked: !this.state.checked,
    });
  };

  handleEditItem = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  handleEditSubmit = (e) => {
    e.preventDefault();
    this.props.onEditItemSubmit(this.state.updating);
  };


  onEditChange = (e) => {
    console.log('onEditChange: ', e.target.value)
    console.log('onEditChange item prop: ', this.props.item)
    this.setState({
      updating: e.target.value
    })
  };

  render() {
    const { item, onRemoveItem } = this.props;

    return (
      <li className="list-item">
        <div className="list-item-inner">
          {this.state.edit ? (
            // <EditListItem
            //   itemValue={item}
            //   onEditChange={() => this.onEditChange(item)}
            // />
            <Form
              value={this.state.updating}
              onChange={this.onEditChange}
              >
              <Button
              onClick={this.handleEditSubmit}
              type="submit"
              className="green">
              Update Item
            </Button>
            {/* <Button
              onClick={props.onCancelClick}
              type="button">
              Cancel
            </Button> */}
              </Form>
          ) : (
            <div className="ui checkbox">
              <input
                type="checkbox"
                name="list-item"
                onChange={this.handleCheckClick}
                checked={this.state.checked}
              />
              <label>{item}</label>
            </div>
          )}

          <div className="ui icon buttons">
            <button
              onClick={this.handleEditItem}
              className="ui basic button"
              type="button"
            >
              <i className="edit outline icon"></i>
            </button>
            <button
              onClick={onRemoveItem}
              className="ui basic button"
              type="button"
            >
              <i className="close icon"></i>
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;
