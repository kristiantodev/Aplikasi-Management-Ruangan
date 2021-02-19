import React, { Component } from 'react';
import { connect } from "react-redux"

class Laporan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {

        return (
            <>
            <div className="content-page">
  {/* Start content */}
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <h3 className="page-title"><b><i className="fas fa-handshake" />&nbsp;Data Laporan</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Management Ruangan</li>
            </ol>
            <div className="state-information d-none d-sm-block">
              <a data-toggle="modal" data-target="#bb">
                <button type="button" className="btn btn-primary waves-effect waves-light">
                  <i className="fa fa-print" /> Cetak Data</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end row */}
    <div className="page-content-wrapper">
      <div className="row">
        <div className="col-12">
          <div className="card m-b-20">
            <div className="card-body">
              
             
            </div>
          </div>
        </div> {/* end col */}
      </div> {/* end row */}
    </div>
    {/* end page content*/}
  </div> {/* container-fluid */}
</div>


            </>
        );
    }
}

export default Laporan;