import React, { Component } from "react";
import Product from "./product";
import { Button } from "bootstrap";

export default class Products extends Component {

  render() {
    return (
      <>
        <button onClick={this.props.onReset} className="btn btn-primary">
          Reset
        </button>
        {this.props.products.map((product, index) => (
          <Product
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
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
