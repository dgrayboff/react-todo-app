import React from 'react';
import '../styles/ListItem.css';
import EditListItem from './EditListItem';
import Button from './Button';

class ListItem extends React.Component {
  state = {
    checked: false,
    edit: false,
    updating: null
  };

  componentDidMount() {
    this.setState({ updating: this.props.item });
  }

  handleCheckClick = () => {
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
    this.props.onEditItemSubmit(this.state.updating, this.props.item);
  };

  onEditChange = (e) => {
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
            <EditListItem
              updating={this.state.updating}
              onEditChange={this.onEditChange}
              handleEditSubmit={this.handleEditSubmit}
            />
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
            <Button onClick={this.handleEditItem} className="basic">
              <i className="edit outline icon"></i>
            </Button>
            <Button onClick={onRemoveItem} className="basic">
              <i className="close icon"></i>
            </Button>
          </div>
        </div>
      </li>
    );
  }
}

export default ListItem;
