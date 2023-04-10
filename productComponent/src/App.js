import React, { Component } from "react";
import Navbar from "./components/navbar";
import Products from "./components/products";

export default class App extends Component {
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
        <Navbar products={this.state.products} />
        <Products
          products={this.state.products}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
        />
      </>
    );
  }

  handleDelete = (productId) => {
    const newProducts = this.state.products.filter((p) => p.id !== productId);
    this.setState({ products: newProducts });
  };
  handleIncrement = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };
  handleDecrement = (productId) => {
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
    this.setState({ products: newProducts });
  };
}
