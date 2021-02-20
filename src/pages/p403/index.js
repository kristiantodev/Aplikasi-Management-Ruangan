import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import logo from '../../error.png';
import { Button } from "../../component"

class p403 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        const { username, password, role } = this.state
        return (
            <>

    <div className="page-content-wrapper">
      <div className="row">
        <div className="col-12">
          <div className="card m-b-20">
            <div className="card-body">
                <center><img src={logo} height="475" alt="Logo"/><br/>
                <Button onClick={() => this.props.history.push("/")} className="btn btn-primary waves-effect waves-light">
                      <i className="fas fa-angle-double-left " /><span> Kembali ke Halaman Login</span>
                </Button>
                </center>
                
            </div>
          </div>
        </div>
      </div>
    </div>

            </>
        );
    }
}

const mapStateToProps = state => ({
    checkLogin: state.AReducer.isLogin,
    dataUser: state.UReducer.users
  })
  
  const mapDispatchToProps = dispatch => {
    return {
      submitLogin: (data) => dispatch({ type: "LOGIN_SUCCESS", payload: data })
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(p403);