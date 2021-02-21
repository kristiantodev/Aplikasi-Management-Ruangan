import React, { Component } from 'react';
import { connect } from "react-redux"

class Lantai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama : "",
            deskripsi : "",
            act : 0,
            index : "",
            lantaiEdit : {}
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  setLantai= el =>{
      let obj = this.state
  if (this.state.act === 0) {

      if(obj.nama == ""){
          alert("Nama Lantai wajib diisi !!!")
      }else{
        var indexLantai = this.props.dataLantai.map(function(e) { return e.nama; }).indexOf(obj.nama);

        if(indexLantai >=0){
            alert("Nama lantai sudah ada!!")
        }else{
            this.props.saveLantai(obj);
            el.preventDefault()
            this.clear()
            alert("Data berhasil disimpan !!")
        }
        
      }
      
  }else{

      this.props.editLantai(obj)
      this.setState({
        act: 0
      });
      el.preventDefault()
      this.clear()
      alert("Data berhasil diedit !!")

  }

  }

  deleteLantai = (indexHapus) => {
    if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){

       if (indexHapus !== -1) {
          this.props.hapusLantai({indexHapus});
          this.props.history.push("/lantai")
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

    const dataEdit=this.props.dataLantai[index];
  
    this.setState({
      lantaiEdit: dataEdit
    })
  
  }

  reset = ()=> {
    this.setState({
      lantaiEdit :{}
    })
  }

  clear = () => {
      this.setState({ 
        nama : "",
        deskripsi : ""
      })
  }

    render() {

      if("nama" in this.state.lantaiEdit){
        this.setState({
        nama: this.state.lantaiEdit.nama,
        deskripsi : this.state.lantaiEdit.deskripsi    
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
            <h3 className="page-title"><b><i className="fas fa-chart-line" />&nbsp;Data Lantai</b></h3>
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
                    <th><b>Deskripsi</b></th>
                    <th width={150}><b>Aksi</b></th>
                  </tr>
                </thead>
                <tbody>
                {
                    this.props.dataLantai.map((b, index) => {
                        return (
<tr key={index}>
      <td>{index+1}</td>
       <td>{b.nama}</td>
       <td>{b.deskripsi}</td>
       <td>
       <button onClick={() =>{this.getEdit(index)} }  data-toggle="modal" data-target="#bb" className="btn btn-primary waves-effect waves-light"><span data-toggle="tooltip" data-original-title="Ubah"><font color="white"><i className="fas fa-pencil-alt" /></font></span></button>
       <button onClick={() =>{this.deleteLantai(index)} } data-toggle="tooltip" className="btn btn-danger waves-effect waves-light tombol-hapus" data-original-title="Hapus"><span className="icon-label"><i className="fa fa-trash" /> </span><span className="btn-text" /></button>
                    
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
        <h6 className="modal-title"><font color="white">Form Data Lantai</font></h6>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
        <div className="modal-body">
          <fieldset className="form-group floating-label-form-group">
            <label>Nama Lantai</label>
            <input type="text" name="nama" className="form-control" value={this.state.nama} onChange={this.setValue}/>
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
          <button className="btn btn-primary" onClick={this.setLantai}>
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
  dataLantai: state.LReducer.lantai
})

const mapDispatchToProps = dispatch => {
  return {
    saveLantai: (data)=> dispatch({type:"SAVE_LANTAI", payload: data}),
    hapusLantai: (dataLantaiBaru)=> dispatch({type:"HAPUS_LANTAI", payload: dataLantaiBaru}),
    editLantai: (data)=> dispatch({type:"EDIT_LANTAI", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lantai);