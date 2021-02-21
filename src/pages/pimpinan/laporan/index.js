import React, { Component } from 'react';
import { connect } from "react-redux"

class Laporan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    print = ()=>{
      window.print()
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
                <button type="button" className="btn btn-primary waves-effect waves-light" onClick={this.print}>
                  <i className="fa fa-print" /> Cetak Data</button>
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
              
            <table id="datatable" className="table table-striped table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                <thead>
                  <tr>
                    <th width={9}><b>No</b></th>
                    <th><b>Nama Assets</b></th>
                    <th><b>Jumlah</b></th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td align="center">1</td>
                    <td>Lantai</td>
                    <td>{this.props.dataLantai.length} Lantai</td>
                  </tr>
                  <tr>
                    <td align="center">2</td>
                    <td>Ruangan</td>
                    <td>{this.props.dataRuangan.length} Ruangan</td>
                  </tr>
                  <tr>
                    <td align="center">3</td>
                    <td>Divisi</td>
                    <td>{this.props.dataDivisi.length} Divisi</td>
                  </tr>
                  <tr>
                    <td align="center">4</td>
                    <td>Jabatan</td>
                    <td>{this.props.dataJabatan.length} Jabatan</td>
                  </tr>
                  <tr>
                    <td align="center">5</td>
                    <td>Karyawan</td>
                    <td>Total : {this.props.datakaryawan.length} Karyawan</td>
                  </tr>
                  <tr>
                    <td align="center"></td>
                    <td>Laki-laki</td>
                    <td>{this.props.datakaryawan.filter(x => x.jk === "L").length} Karyawan</td>
                  </tr>
                  <tr>
                    <td align="center"></td>
                    <td>Perempuan</td>
                    <td>{this.props.datakaryawan.filter(x => x.jk === "P").length} Karyawan</td>
                  </tr>
                  <tr>
                    <td align="center">6</td>
                    <td>Detail Hak Akses</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
             
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

const mapStateToProps = state => ({
  dataDivisi: state.DReducer.divisi,
  dataRuangan : state.RReducer.ruangan,
  dataLantai : state.LReducer.lantai,
  dataJabatan: state.JReducer.jabatan,
  datakaryawan: state.KReducer.karyawan
})

const mapDispatchToProps = dispatch => {
  return {
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Laporan);