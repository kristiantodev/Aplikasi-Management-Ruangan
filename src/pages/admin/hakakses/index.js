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
            tampungFilter : this.props.dataHakAkses
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  searchData= el=>{

    var keyword = el.target.value;
    const dataFilter = this.props.dataHakAkses.filter(x => x.id === keyword);

    if(keyword==""){
      this.setState({
        tampungFilter : this.props.dataHakAkses
    })
    }else{
      this.setState({
        tampungFilter : dataFilter
    })
    }

}

deleteHakAkses = (indexHapus) => {
    if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){

       if (indexHapus !== -1) {
          this.props.hapusHakAkses({indexHapus});
          this.setState({
            tampungFilter : this.props.dataHakAkses
        })
          this.props.history.push("/hakakses")
       }else{
          alert("Gagal dihapus!!");
       }
  
    }
  
  } 

    render() {

        return (
            <>
           
  <Content> 
    <HeaderContent>
            <h3 className="page-title"><b><i className="fas fa-key" />&nbsp;Hak Akses Ruangan</b></h3>
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
        <input type="text" onChange={this.searchData} name="cari" placeholder="Masukan ID karyawan yang dicari" className="form-control"/>
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
                    <th><b>Aksi</b></th>
                  </tr>
                </thead>
                <tbody>
                {
                    this.state.tampungFilter.map((b, index) => {
                        return (
<tr key={index}>
       <td>{b.id}</td>
       <td>{b.namaKaryawan}</td>
       <td>{b.namaDivisi}</td>
       <td>{b.namaJabatan}</td>
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
       <td>
       <button data-toggle="modal" data-target="#bb" className="btn btn-primary waves-effect waves-light"><font color="white"><i className="fas fa-pencil-alt" /></font></button>
       <button onClick={() =>{this.deleteHakAkses(index)} } className="btn btn-danger waves-effect waves-light"><span className="icon-label"><i className="fa fa-trash" /> </span></button>
       <button data-toggle="modal" data-target="#bb" className="btn btn-success waves-effect waves-light"><font color="white"><i className="fas fa-folder-open" /> Detail</font></button>
                    
       </td>
      </tr>                
                          
                        )
                    })
                }
                <tr>
                  <td colSpan="9"><b>Total data : {this.props.dataHakAkses.length}</b></td>
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
    saveHakAkses: (data)=> dispatch({type:"SAVE_HAK_AKSES", payload: data}),
    hapusHakAkses: (dataHakBaru)=> dispatch({type:"HAPUS_HAK_AKSES", payload: dataHakBaru})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HakAkses);