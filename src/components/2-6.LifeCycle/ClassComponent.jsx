import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { date: new Date() };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerID);
  }

  tick() {
    // console.log("tick");
    this.setState({ date: new Date() });
  }

  handleClick = () => {
    alert(this.state.date);
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleString()}</h2>
      </div>
    );
  }
}
