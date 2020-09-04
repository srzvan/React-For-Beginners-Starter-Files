import React from "react";

import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const quantity = this.props.order[key];
    const isAvailable = fish && fish.status === "available";

    // the order is persisted using localStorage
    // the fishes are persisted using firebase
    //
    // because localStorage is local it will
    // be used to render the order immediately
    // even though the fishes did not sync yet
    // (the fishes are initialiazed through
    // a network request against the firebase DB)

    // make sure the fish is loaded before rendering
    if (!fish) return null;
    // returning null doesn't render anything

    if (!isAvailable) {
      return <li key={key}>Sorry, {fish ? fish.name : "fish"} is no longer available</li>;
    }

    return (
      <li key={key}>
        {quantity} lbs {fish.name}
        {formatPrice(quantity * fish.price)}
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((previousTotal, key) => {
      const fish = this.props.fishes[key];
      const quantity = this.props.order[key];
      const isAvailable = fish && fish.status === "available";

      if (isAvailable) {
        return previousTotal + quantity * fish.price;
      }

      return previousTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
