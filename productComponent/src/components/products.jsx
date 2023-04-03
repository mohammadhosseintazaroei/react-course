import React, { Component } from "react";
import Product from "./product";

export default class Products extends Component {
  render() {
    return (
      <>
        <Product productName={"phone"}/> 
        <Product productName={"laptop"}/> 
        <Product productName={"airpods"}/>
      </>
    );
  }
}
