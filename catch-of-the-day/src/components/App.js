import React from "react";

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = fish => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes };

    // 2. Add the new fish to fishes
    //    using a timestamped key
    //    to distinguish between fishes
    fishes[`fish${Date.now()}`] = fish;

    // 3. Update state
    this.setState({ fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
