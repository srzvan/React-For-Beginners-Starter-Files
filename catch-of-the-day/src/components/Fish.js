import React from "react";
import PropTypes from "prop-types";

import { fishType } from "../propTypes";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  static propTypes = {
    details: fishType,
    addToOrder: PropTypes.func,
  };

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
          {isAvailable ? "Add to order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
