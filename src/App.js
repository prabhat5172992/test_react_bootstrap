import React, { Component } from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import { getData } from "./utils/service";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Carousel from "./components/carousel";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: null,
      show: false
    };
  }
  flagData = () => {
    const data = getData();
    data.then(result => {
      this.setState({
        countries: result
      });
    });
  };
  render() {
    console.log("All countries data", this.state.countries);
    return (
      <div style={{ background: "#efd6d0" }}>
        <Navbar />
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <h1>Get all Countries Data!</h1>
          <Button
            variant="outline-primary"
            onClick={() => {
              this.setState({ show: true });
              this.flagData();
            }}
          >
            Get Data
          </Button>
        </div>
        <div style={{ marginTop: 20, textAlign: "center" }}>
          {!this.state.countries && this.state.show ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : null}
        </div>
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <Carousel data={this.state.countries} />
        </div>
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <Card data={this.state.countries} />
        </div>
      </div>
    );
  }
}
