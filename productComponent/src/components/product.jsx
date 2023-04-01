import { Component } from "react";
import "./product.css"
export default class Product extends Component {
  count = 0;
  imageUrl = "https://picsum.photos/200"
  render() {
    return (
      <>
        <span className="m-2 text-info">product name</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button className="m-2 btn btn-sm btn-success">+</button>
        <button className="m-2 btn btn-sm btn-warning">-</button>
        <button className="m-2 btn btn-sm btn-danger ">delete</button>
        <img src={this.imageUrl} /*style={{borderRadius:"50%"}} */ alt="" />
      </>
    );
  }

  format() {
    if (this.count == 0) {
      return "zero";
    } else {
      return this.count;
    }
  }
}
