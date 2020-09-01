import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please enter a store name</h2>
        <label htmlFor="store-name">Store name</label>
        <input id="store-name" type="text" required />
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
