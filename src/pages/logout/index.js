import React, { Component } from 'react';
import logo from '../../logout.png';
import { Button } from "../../component"

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        return (
            <>

    <div className="page-content-wrapper">
      <div className="row">
        <div className="col-12">
          <div className="card m-b-20">
            <div className="card-body">
                <center><img src={logo} height="475" alt="Logo"/><br/>
                <Button onClick={() => this.props.history.push("/")} className="btn btn-primary waves-effect waves-light">
                      <i className="fas fa-angle-double-left " /><span> Login Kembali</span>
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
  
  export default Logout;