import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Fitur } from "../../../component"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        console.log("menu:", this.props.page);
        const { changePage } = this.props
        return (

<>
<div className="left side-menu side-menu-light">
  <div className="slimscroll-menu" id="remove-scroll">
    <div className="user-details">
      <div className="float-left mr-2">
        <img className="thumb-md rounded-circle" />
      </div>
      <div className="user-info">
        <div className="dropdown">
        <font color="#0285b4"><b>ADMIN</b></font>
        </div>
        <p className="text-white"><font color="#0285b4">Administrator</font></p>
      </div>
    </div>
    <div id="sidebar-menu">
      <ul className="metismenu" id="side-menu">
        <li>
        <Link to="/">
          <Fitur redirect={() => changePage("dashboard")}>
            <i className="fa fa-home" /><span> Dashboard </span>
          </Fitur>
          </Link>
        </li>

        <li>
        <Link to="/">
          <Fitur redirect={() => changePage("dashboard")}>
            <i className="fas fa-sign-out-alt" /><span> Logout </span>
          </Fitur>
          </Link>
        </li>

        {/* <li>
          <a href="/home" className="waves-effect"><i className="fas fa-th-list" /><span> Data Master<span className="float-right menu-arrow"><i className="mdi mdi-plus" /></span> </span></a>
          <ul className="submenu">
            <li>
        <Link to="/home">
          <a href="" redirect={() => changePage("home")}>
            <i className="fa fa-list" /><span> Home</span>
          </a>
          </Link>
            </li>
          </ul>
        </li> */}
              
      </ul>
    </div>
    <div className="clearfix" />
  </div>
</div>

            </>
        );
    }
}

export default Menu;