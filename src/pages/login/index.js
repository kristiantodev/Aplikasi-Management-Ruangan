import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import logo from '../../img.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }

    setValueInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      setValue= el=>{
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    setRegister = el =>{
        let obj = this.state
        this.props.register(obj);
        el.preventDefault()
        this.clear()
        alert("Data berhasil disimpan !!")
    }

    

    clear = () => {
        this.setState({ 
            username:"",
            password:"",
            phone:"",
            email:"",
            role:"",})
    }

      doLogin = userObj => {
        const { username, password } = userObj
        console.log("user", username)
        console.log("pass", password)

        let find = this.props.dataUser.filter(user => {
          return user.username === username && user.password === password
        })

        let dataLogin = this.props.dataUser.filter(user => {
            return user.username === username 
        })
    
        if(find.length > 0){
            this.props.submitLogin({userData: dataLogin[0]})
            alert("Selamat datang "+username+" Anda berhasil login!!")
        }else{
             alert("Username atau Password Salah !!")
        }
        
      }

    render() {
        const { username, password } = this.state
        if (this.props.checkLogin)
            return <Redirect to="/" />

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
                <input type="text" className="form-control  round"  placeholder="Masukan Username" name="username" onChange={this.setValueInput}/><br/>
            <input type="password" className="form-control  round"  placeholder="Masukan Password" name="password" onChange={this.setValueInput}/><br/>
            <button className="btn btn-primary waves-effect waves-light form-control" onClick={() => this.doLogin({username, password})}><i className="fa fa-check" /> Login</button>

            </div>
          </div>
        </div> {/* end col */}
      </div> {/* end row */}
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
      submitLogin: (data) => dispatch({ type: "LOGIN_SUCCESS", payload: data }),
      keluar: () => dispatch({ type: "LOGOUT_SUCCESS" }),
      register: (data)=> dispatch({type:"REGISTER", payload: data})
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);