import React from "react";
import PropTypes from "prop-types";

import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  storeNameInput = React.createRef();

  static propTypes = {
    history: PropTypes.object,
  };

  goToStore = event => {
    event.preventDefault();
    const storeName = this.storeNameInput.current.value;

    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store name</h2>
        <label htmlFor="store-name">Store name</label>
        <input ref={this.storeNameInput} id="store-name" type="text" defaultValue={getFunName()} required />
        <button type="submit">
          Visit store
          <span role="img" aria-label="Pointing finger emoji">
            👉
          </span>
        </button>
      </form>
    );
  }
}

export default StorePicker;
