import React, { Component } from "react";
import Product from "./product";

export default class Products extends Component {
  state = {
    products: [
      { id: 1, count: 1, productName: "laptop" },
      { id: 2, count: 3, productName: "phone" },
      { id: 3, count: 2, productName: "airpod" },
      { id: 4, count: 7, productName: "toy" },
    ],
  };
  render() {
    return (
      <>
        {this.state.products.map((product, index) => (
          <Product
            onDelete={this.handleDelete}
            id={product.id}
            key={index}
            productName={product.productName}
            count={product.count}
          />
        ))}
      </>
    );
  }

  handleDelete = (productId) => {
    const newProducts = this.state.products.filter(p => p.id !== productId)
    this.setState({products: newProducts})
  };
}
