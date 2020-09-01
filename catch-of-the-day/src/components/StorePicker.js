import React from "react";

import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  storeNameInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
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
