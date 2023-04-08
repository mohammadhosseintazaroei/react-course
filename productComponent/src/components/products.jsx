import React, { Component } from "react";
import Product from "./product";
import { Button } from "bootstrap";

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
        <button onClick={this.handleReset} className="btn btn-primary">
          Reset
        </button>
        {this.state.products.map((product, index) => (
          <Product
            onDelete={this.handleDelete}
            onIncrement={this.handleIncreamente}
            onDecreamente={this.handleDecreamente}
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
    const newProducts = this.state.products.filter((p) => p.id !== productId);
    this.setState({ products: newProducts });
  };
  handleIncreamente = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };
  handleDecreamente = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    this.setState({ products: newProducts });
  };
  handleReset = () => {
    const newProducts = this.state.products.map((product) => {
      product.count = 0;
      return product;
    });
    console.log(newProducts);
    this.setState({ products: newProducts });
  };
}
