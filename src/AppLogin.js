import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import { Header, Menu, Body, Footer } from "./template/tlogin"

class AppLogin extends Component {
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
       
        <Body page={this.state.currentPage} />
  
      </Router>
    );
  }
}

export default AppLogin;