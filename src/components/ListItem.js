import React from 'react';
import '../styles/ListItem.css';
import EditListItem from './EditListItem';

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
