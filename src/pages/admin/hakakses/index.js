import React, { Component } from 'react';
import { connect } from "react-redux"
import { 
    Radio,
    Select,
    Input,
    Button,
    Option,
    Label,
    Fieldset,
    IsiBody,
    HeaderContent, 
    Content,
    Modal} from "../../../component"

class HakAkses extends Component {
    constructor(props) {
        super(props);
        this.state = {
             
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }
    render() {

        return (
            <>
           
  <Content> 
    <HeaderContent>
            <h3 className="page-title"><b><i className="fas fa-users" />&nbsp;Data Karyawan</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Management Ruangan</li>
            </ol>
            <div className="state-information d-none d-sm-block">
            <Button className="btn btn-primary" onClick={() => this.props.history.push("/formkaryawan")}>
                     <i className="fa fa-plus" />&nbsp;Tambah Data
            </Button>
                  
            </div>
   </HeaderContent>    
    
        <IsiBody>     
        <input type="text" name="cari" placeholder="Masukan ID karyawan yang dicari" className="form-control"/>
              <table id="datatable" className="table table-striped table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                <thead>
                  <tr>
                    <th><b>ID Karyawan</b></th>
                    <th><b>Nama</b></th>
                    <th><b>Divisi</b></th>
                    <th><b>Jabatan</b></th>
                    <th><b>Akses</b></th>
                    <th><b>Tgl Berlaku</b></th>
                    <th><b>Tgl Berakhir</b></th>
                    <th><b>Status</b></th>
                  </tr>
                </thead>
                <tbody>
                {
                    this.props.dataHakAkses.map((b, index) => {
                        return (
<tr key={index}>
       <td>{b.id}</td>
       <td></td>
       <td></td>
       <td></td>
       <td>{b.hak_akses.map((l, idl) => {
           return (
               <ul  key={idl}>
               <li>
                   {l.namaLantai}
                   {l.namaRuangan.map((r, idr)=>{
                       return(
                           <ul  key={idr}>
                           <li>{r.ruangan}</li>
                           </ul>
                       )
                   })}
                </li>
                </ul>
           )
       })}</td>
       <td>{b.tglBerlaku}</td>
       <td>{b.tglBerakhir}</td>
       <td>{b.status}</td>
      </tr>                
                          
                        )
                    })
                }
                <tr>
                  <td colSpan="8"><b>Total data : {this.props.dataHakAkses.length}</b></td>
                </tr>
                </tbody>
              </table>
  </IsiBody>  
  </Content>      

            </>
        );
    }
}

const mapStateToProps = state => ({
  dataDivisi: state.DReducer.divisi,
  dataJabatan: state.JReducer.jabatan,
  dataKaryawan: state.KReducer.karyawan,
  dataHakAkses : state.HAReducer.hakakses
})

const mapDispatchToProps = dispatch => {
  return {
    saveHakAkses: (data)=> dispatch({type:"SAVE_HAK_AKSES", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HakAkses);