import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { formatPrice } from "../helpers";

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object.isRequired,
    order: PropTypes.object.isRequired,
    removeFromOrder: PropTypes.func.isRequired,
  };

  renderOrder = key => {
    const fish = this.props.fishes[key];
    const quantity = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 250, exit: 250 },
    };

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
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>Sorry, {fish ? fish.name : "fish"} is no longer available</li>
        </CSSTransition>
      );
    }

    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition classNames="count" key={quantity} timeout={{ enter: 250, exit: 250 }}>
                <span>{quantity}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(quantity * fish.price)}
            <button style={{ fontSize: "1.5em" }} onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
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
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
