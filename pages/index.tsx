import React, { Component } from "react";
import Router from "next/router";
import HomePage from "../pages-components/Homepage";

export default class Index extends Component {
  // componentDidMount = () => {
  //   Router.push("/components");
  // };

  render() {
    return (
      <HomePage />
    );
  }
}
