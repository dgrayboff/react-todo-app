import React from 'react';
import '../styles/ListItem.css';

class ListItem extends React.Component {
  state = {
    checked: false,
  };

  handleCheckClick = () => {
    console.log('ListItem - handleCheckClick');
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const { item, onRemoveItem } = this.props;

    return (
      <li className="list-item">
        <div className="ui checkbox">
          <input
            type="checkbox"
            name="list-item"
            onChange={this.handleCheckClick}
            checked={this.state.checked}
          />
          <label>{item}</label>
        </div>

        <div className="ui icon buttons">
          <button
            onClick={onRemoveItem}
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
      </li>
    );
  }
}

export default ListItem;
