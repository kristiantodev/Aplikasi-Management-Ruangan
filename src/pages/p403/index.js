import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import logo from '../../img.png';
import { Button } from "../../component"

class p403 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            role : ""
        }
    }

    setValueInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      doLogin = userObj => {
        const { username, password, role } = userObj
        console.log("user", username)
        console.log("pass", password)
        console.log("role", role)

        let find = this.props.dataUser.filter(user => {
          return user.username === username && user.password === password && user.role === role
        })

        let dataLogin = this.props.dataUser.filter(user => {
            return user.username === username 
        })
    
        if(find.length > 0){
            this.props.submitLogin({userData: dataLogin[0]})
            alert("Selamat datang "+username+" Anda berhasil login!!")
        }else{
             alert("Username atau Password atau Role Salah !!")
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
              
              <br/><br/><br/><br/><br/><br/><br/>
                <center><img height="175" alt="Logo"/><br/></center>
                <h2><center>FORM LOGIN<br/>
                APLIKASI MANAGEMEN RUANGAN</center></h2>

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