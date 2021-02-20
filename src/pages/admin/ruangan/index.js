import React, { Component } from 'react';
import { connect } from "react-redux"

class Ruangan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namaLantai : "",
            namaRuangan : "",
            kondisiRuangan:"",
            deskripsi : "",
            act : 0,
            index : "",
            ruanganEdit : {}
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  setRuangan= el =>{
      let obj = this.state
  if (this.state.act === 0) {

      if(obj.namaLantai == "" || obj.namaRuangan == "" || obj.kondisiRuangan == ""){
          alert("Data wajib diisi !!!")
      }else{
        var indexRuang = this.props.dataRuangan.map(function(e) { return e.namaRuangan; }).indexOf(obj.namaRuangan);

        if(indexRuang >=0){
            alert("Nama Ruangan sudah ada!!")
        }else{
            this.props.saveRuangan(obj);
            el.preventDefault()
            this.clear()
            alert("Data berhasil disimpan !!")
        }
        
      }
      
  }else{

      this.props.editRuangan(obj)
      this.setState({
        act: 0
      });
      el.preventDefault()
      this.clear()
      alert("Data berhasil diedit !!")

  }

  }

  deleteRuangan = (indexHapus) => {
    if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){

       if (indexHapus !== -1) {
          this.props.hapusRuangan({indexHapus});
          this.props.history.push("/ruangan")
       }else{
          alert("Gagal dihapus!!");
       }
  
    }
  
  } 

  getEdit = (index) => {
    this.setState({
      act: 1,
      index: index
    });

    const dataEdit=this.props.dataRuangan[index];
  
    this.setState({
      ruanganEdit: dataEdit
    })
  
  }

  reset = ()=> {
    this.setState({
      ruanganEdit :{}
    })
  }

  clear = () => {
      this.setState({ 
        namaLantai : "",
            namaRuangan : "",
            kondisiRuangan:"",
            deskripsi : "",
      })
  }

    render() {

      if("namaRuangan" in this.state.ruanganEdit){
        this.setState({
        namaLantai: this.state.ruanganEdit.namaLantai,
        namaRuangan: this.state.ruanganEdit.namaRuangan,
        kondisiRuangan: this.state.ruanganEdit.kondisiRuangan,
        deskripsi : this.state.ruanganEdit.deskripsi    
        })
        this.reset();
    }

        return (
            <>
            <div className="content-page">
  {/* Start content */}
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <h3 className="page-title"><b><i className="fas fa-school" />&nbsp;Data Ruangan</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Management Ruangan</li>
            </ol>
            <div className="state-information d-none d-sm-block">
              <a data-toggle="modal" data-target="#bb">
                <button type="button" className="btn btn-primary waves-effect waves-light">
                  <i className="fa fa-plus" /> Tambah Data</button>
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
              
              <table id="datatable" className="table table-striped table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                <thead>
                  <tr>
                    <th width={9}><b>No</b></th>
                    <th><b>Nama Lantai</b></th>
                    <th><b>Nama Ruangan</b></th>
                    <th><b>Kondisi Ruangan</b></th>
                    <th><b>Deskripsi</b></th>
                    <th width={150}><b>Aksi</b></th>
                  </tr>
                </thead>
                <tbody>
                {
                    this.props.dataRuangan.map((b, index) => {
                        return (
<tr key={index}>
      <td>{index+1}</td>
       <td>{b.namaLantai}</td>
       <td>{b.namaRuangan}</td>
       <td>{b.kondisiRuangan}</td>
       <td>{b.deskripsi}</td>
       <td>
       <button onClick={() =>{this.getEdit(index)} }  data-toggle="modal" data-target="#bb" className="btn btn-primary waves-effect waves-light"><span data-toggle="tooltip" data-original-title="Ubah"><font color="white"><i className="fas fa-pencil-alt" /></font></span></button>
       <button onClick={() =>{this.deleteRuangan(index)} } data-toggle="tooltip" className="btn btn-danger waves-effect waves-light tombol-hapus" data-original-title="Hapus"><span className="icon-label"><i className="fa fa-trash" /> </span><span className="btn-text" /></button>
                    
       </td>
      </tr>                
                          
                        )
                    })
                }
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

{/* Modal */}
<div className="modal fade text-left" id="bb" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel16" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header bg-primary">
        <h6 className="modal-title"><font color="white">Form Data Ruangan</font></h6>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
        <div className="modal-body">
        <fieldset className="form-group floating-label-form-group">
        <label>Nama Lantai</label>
                  <select id="select" value={this.state.namaLantai} onChange={this.setValue} name="namaLantai" className="custom-select">
                  <option value="">-- Pilih Nama Lantai--</option>
                  {
                                this.props.dataLantai.map(
                                    (Item, idx) =>
                                    <option value={Item.nama}>{Item.nama}</option>
                                )
                            }
                  </select>
                </fieldset>
          <fieldset className="form-group floating-label-form-group">
            <label>Nama Ruangan</label>
            <input type="text" name="namaRuangan" className="form-control" value={this.state.namaRuangan} onChange={this.setValue}/>
          </fieldset>
          <fieldset className="form-group floating-label-form-group">
        <label>Kondisi Ruangan</label>
                  <select id="select" value={this.state.kondisiRuangan} onChange={this.setValue} name="kondisiRuangan" className="custom-select">
                  <option value="">-- Pilih Kondisi Ruangan--</option>
                  <option value="Terpakai">Terpakai</option>
                  <option value="Kosong">Kosong</option>
                  </select>
                </fieldset>
          <fieldset className="form-group floating-label-form-group">
            <label>Deskripsi</label>
            <textarea name="deskripsi" className="form-control" value={this.state.deskripsi} onChange={this.setValue}/>
          </fieldset>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary mr-1" data-dismiss="modal" value="close">
            <i className="fas fa-times" />&nbsp;Keluar
          </button>
          <button className="btn btn-primary" onClick={this.setRuangan}>
            <i className="fa fa-save" />&nbsp;Simpan
          </button>
        </div>
    </div>
  </div>
</div>


            </>
        );
    }
}

const mapStateToProps = state => ({
  dataLantai: state.LReducer.lantai,
  dataRuangan: state.RReducer.ruangan
})

const mapDispatchToProps = dispatch => {
  return {
    saveRuangan: (data)=> dispatch({type:"SAVE_RUANGAN", payload: data}),
    hapusRuangan: (dataRuanganBaru)=> dispatch({type:"HAPUS_RUANGAN", payload: dataRuanganBaru}),
    editRuangan: (data)=> dispatch({type:"EDIT_RUANGAN", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ruangan);