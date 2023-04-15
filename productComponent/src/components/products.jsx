import React, { Component } from "react";
import Product from "./product";
import ProductContext from "../context/products";

export default class Products extends Component {
  static contextType = ProductContext;

  render() {
    
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
