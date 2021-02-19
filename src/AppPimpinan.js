import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Header, Menu, Body, Footer } from "./template/pimpinan"

class AppPimpinan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "dashboard"
    }
  }

  goToPage = page => {
    this.setState({
      currentPage: page
    })
  }

  render() {
    return (
      <Router>
        <Header />
        <Menu page={this.state.currentPage} changePage={this.goToPage} />
        <Body page={this.state.currentPage} />
        <Footer />
      </Router>
    );
  }
}

export default AppPimpinan;