import React, { Component } from "react";
import image from "../icons/example.svg";
import SVGInline from "react-svg-inline";
import Button from "../components/Button";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Button>test me</Button>
        <div className="illustration-container">
          <SVGInline svg={image} width="600px" height="600px" />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
