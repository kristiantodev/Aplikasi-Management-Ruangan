import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Fitur } from "../../../component"
import { connect } from "react-redux"
import logo from '../../../adm.jpg';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    doLogout = () => {
      if(window.confirm("yakin ingin keluar dari sistem ?")){
        this.props.logoutAction()
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
        <img src={logo} className="thumb-md rounded-circle" />
      </div>
      <div className="user-info">
        <div className="dropdown">
        <font color="#0285b4"><b>{this.props.dataUserLogin.nama}</b></font>
        </div>
        <p className="text-white"><font color="#0285b4">{this.props.dataUserLogin.role }</font></p>
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
          <a href="/lantai" className="waves-effect"><i className="fas fa-th-list" /><span> Data Master<span className="float-right menu-arrow"><i className="mdi mdi-plus" /></span> </span></a>
          <ul className="submenu">
            <li>
        <Link to="/lantai">
          <Fitur onClick={() => this.props.history.push("/lantai")}>
            <i className="fas fa-chart-line" /><span> Lantai</span>
          </Fitur>
          </Link>
            </li>

            <li>
        <Link to="/ruangan">
          <Fitur onClick={() => this.props.history.push("/ruangan")}>
            <i className="fas fa-school" /><span> Ruangan</span>
          </Fitur>
          </Link>
            </li>
          
          </ul>
        </li>

        <li>
        <Link to="/">
          <Fitur redirect={() => { this.doLogout()}}>
            <i className="fas fa-sign-out-alt" /><span> Logout </span>
          </Fitur>
          </Link>
        </li>
              
      </ul>
    </div>
    <div className="clearfix" />
  </div>
</div>

            </>
        );
    }
}

const mapStateToProps = state => ({
  dataUserLogin: state.AReducer.userLogin
})

const mapDispatchToProps = dispatch => {
  return {
    logoutAction: () => dispatch({ type: "LOGOUT_SUCCESS"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);