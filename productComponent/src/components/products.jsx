import React, { Component } from "react";
import Product from "./product";
import ProductContext from "../context/products";

export default class Products extends Component {
  static contextType = ProductContext;
  constructor(props) {
    super(props);
    console.log("Products - construct");
  }

  componentDidMount() {
    console.log("Products - componentDidMount");
  }

  render() {
    console.log("Products - render");
    return (
      <>
        <button onClick={this.context.onReset} className="btn btn-primary">
          Reset
        </button>
        {this.context.products.map((product, index) => (
          <Product
            id={product.id}
            key={index}
            productName={product.productName}
            count={product.count}
          />
        ))}
      </>
    );
  }
}
