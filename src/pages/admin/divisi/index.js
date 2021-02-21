import React, { Component } from 'react';
import { connect } from "react-redux"

class Divisi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namaDivisi : "",
            deskripsi : "",
            act : 0,
            index : "",
            divisiEdit : {}
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  setDivisi= el =>{
      let obj = this.state
  if (this.state.act === 0) {

      if(obj.namaDivisi == ""){
          alert("Nama Divisi wajib diisi !!!")
      }else{
        var indexDivisi = this.props.dataDivisi.map(function(e) { return e.namaDivisi; }).indexOf(obj.namaDivisi);

        if(indexDivisi >=0){
            alert("Nama divisi sudah ada!! Silahkan masukan nama lain...")
        }else{
            this.props.saveDivisi(obj);
            this.clear()
            alert("Data berhasil disimpan !!")
            this.props.history.push("/divisi")
        }
        
      }
      
  }else{

      this.props.editDivisi(obj)
      this.setState({
        act: 0
      });
      this.clear()
      alert("Data berhasil diedit !!")
      this.props.history.push("/divisi")
  }

  }

  deleteDivisi = (indexHapus) => {
    if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){

       if (indexHapus !== -1) {
          this.props.hapusDivisi({indexHapus});
          this.props.history.push("/divisi")
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

    const dataEdit=this.props.dataDivisi[index];
  
    this.setState({
      divisiEdit: dataEdit
    })
  
  }

  reset = ()=> {
    this.setState({
      divisiEdit :{}
    })
  }

  clear = () => {
      this.setState({ 
        namaDivisi : "",
        deskripsi : ""
      })
  }

    render() {

      if("namaDivisi" in this.state.divisiEdit){
        this.setState({
        namaDivisi: this.state.divisiEdit.namaDivisi,
        deskripsi : this.state.divisiEdit.deskripsi    
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
            <h3 className="page-title"><b><i className="fab fa-pied-piper-alt" />&nbsp;Data Divisi</b></h3>
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
                    <th><b>Nama Divisi</b></th>
                    <th><b>Deskripsi</b></th>
                    <th width={150}><b>Aksi</b></th>
                  </tr>
                </thead>
                <tbody>
                {
                    this.props.dataDivisi.map((b, index) => {
                        return (
<tr key={index}>
      <td>{index+1}</td>
       <td>{b.namaDivisi}</td>
       <td>{b.deskripsi}</td>
       <td>
       <button onClick={() =>{this.getEdit(index)} }  data-toggle="modal" data-target="#bb" className="btn btn-primary waves-effect waves-light"><span data-toggle="tooltip" data-original-title="Ubah"><font color="white"><i className="fas fa-pencil-alt" /></font></span></button>
       <button onClick={() =>{this.deleteDivisi(index)} } data-toggle="tooltip" className="btn btn-danger waves-effect waves-light tombol-hapus" data-original-title="Hapus"><span className="icon-label"><i className="fa fa-trash" /> </span><span className="btn-text" /></button>
                    
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
        <h6 className="modal-title"><font color="white">Form Data Divisi</font></h6>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
        <div className="modal-body">
          <fieldset className="form-group floating-label-form-group">
            <label>Nama Divisi</label>
            <input type="text" name="namaDivisi" className="form-control" value={this.state.namaDivisi} onChange={this.setValue}/>
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
          <button className="btn btn-primary" onClick={this.setDivisi}>
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
  dataDivisi: state.DReducer.divisi
})

const mapDispatchToProps = dispatch => {
  return {
    saveDivisi: (data)=> dispatch({type:"SAVE_DIVISI", payload: data}),
    hapusDivisi: (dataDivisiBaru)=> dispatch({type:"HAPUS_DIVISI", payload: dataDivisiBaru}),
    editDivisi: (data)=> dispatch({type:"EDIT_DIVISI", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Divisi);