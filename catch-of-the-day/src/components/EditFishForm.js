import React from "react";
import PropTypes from "prop-types";

import { fishType } from "../propTypes";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: fishType,
    index: PropTypes.string.isRequired,
    updateFish: PropTypes.func.isRequired,
  };

  handleChange = event => {
    // 1. Take a copy of the current fish
    const updatedFish = { ...this.props.fish, [event.currentTarget.name]: event.currentTarget.value };

    // 2. Update fish using the passed updateFish fn
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
        <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
        <select type="text" name="status" onChange={this.handleChange} value={this.props.fish.status}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} />
        <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove fish</button>
      </div>
    );
  }
}

export default EditFishForm;
