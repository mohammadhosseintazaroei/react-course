import { Component } from "react";

export default class Product extends Component {
  render() {
    const productName = "iphone 11";
    const tagList = [
      <li>tag list item one</li>,
      <li>tag list item two</li>,
      <li>tag list item three</li>,
    ];
    const dataList = [
      "data list item one",
      "data list item two",
      "data list item three",
    ];
    const mapedList = dataList.map((item, i) => <li key={i}>{item}</li>);
    return (
      <>
        <span className="m-2 text-info">{productName}</span>
        <span className="m-2 badge bg-primary">{this.format()}</span>
        <button className="m-2 btn btn-sm btn-success">
          {this.h6Tag("+")}
        </button>
        <button className="m-2 btn btn-sm btn-warning">
          {this.h6Tag("-")}
        </button>
        <button className="m-2 btn btn-sm btn-danger ">delete</button>
        <ul>
          {tagList}
          ---------
          {mapedList}
        </ul>
      </>
    );
  }
  format() {
    return 2 + 2;
  }
  h6Tag(value) {
    return <h6>{value}</h6>;
  }
}
