import React, { Component } from 'react';
import { connect } from "react-redux"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getTanggal = () => {
      let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  return (today = dd + '/' + mm + '/' + yyyy);
    };

    render() {
        return (
            <div className="content-page">
            {/* Start content */}
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="page-title-box">
                      <h3 className="page-title"><b><i className="fa fa-home" />&nbsp;Sistem Management Ruangan</b></h3>
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item active">PT Paramadaksa Teknologi Nusantara</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="page-content-wrapper">
                  <div className="row">
                    <div className="col-xl-3 col-md-6">
                      <div className="card bg-secondary mini-stat position-relative">
                        <div className="card-body">
                          <div className="mini-stat-desc">
                            <h6 className="verti-label text-white-50">nexSOFT</h6>
                            <div className="text-white">
                              <h6 className="mt-0 text-white-50">Nama</h6>
                              <h4 className="mb-3 mt-0"><b> 
                                {this.props.dataUserLogin.nama}</b></h4>
                            </div>
                            <div className="mini-stat-icon">
                              <i className="fas fa-user display-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="card bg-primary mini-stat position-relative">
                        <div className="card-body">
                          <div className="mini-stat-desc">
                            <h6 className="verti-label text-white-50">nexSOFT</h6>
                            <div className="text-white">
                              <h6 className="mt-0 text-white-50">Tanggal</h6>
                              <h4 className="mb-3 mt-0"><b>{this.getTanggal()}</b></h4>
                            </div>
                            <div className="mini-stat-icon">
                              <i className="fas fa-clock  display-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card bg-secondary mini-stat position-relative">
                        <div className="card-body">
                          <div className="mini-stat-desc">
                            <h6 className="verti-label text-white-50">nexSOFT</h6>
                            <div className="text-white">
                              <h6 className="mt-0 text-white-50">Email</h6>
                              <h5 className="mb-3 mt-0"><b>
                              {this.props.dataUserLogin.email}</b></h5>
                            </div>
                            <div className="mini-stat-icon">
                              <i className="fab fa-black-email display-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
          
        );
    }
}

const mapStateToProps = state => ({
  checkLogin: state.AReducer.isLogin,
  dataUserLogin: state.AReducer.userLogin
})

const mapDispatchToProps = dispatch => {
  return {
    keluar: () => dispatch({ type: "LOGOUT_SUCCESS" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);