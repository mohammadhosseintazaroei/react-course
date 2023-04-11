import React, { Component } from "react";
import ProductContext from "../context/products";

class Navbar extends Component {
  static contextType = ProductContext;

  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Navbar {this.calculateSum()}
          </a>
        </div>
      </nav>
    );
  }
  calculateSum = () => {
    let sum = 0;
    this.context.products.forEach((p) => {
      console.log(p.count);

      sum += p.count;
    });
    return sum;
  };
}

export default Navbar;
