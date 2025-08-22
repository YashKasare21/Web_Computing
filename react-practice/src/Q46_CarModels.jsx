import React, { Component } from "react";

class CarModels extends Component {
  constructor() {
    super();
    this.state = {
      cars: ["Tesla Model S", "BMW X5", "Audi A4"]
    };
  }

  render() {
    return (
      <div>
        <h3>Car Models</h3>
        <ul>
          {this.state.cars.map((car, i) => <li key={i}>{car}</li>)}
        </ul>
      </div>
    );
  }
}

export default CarModels;
