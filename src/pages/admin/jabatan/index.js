import React, { Component } from 'react';
import { connect } from "react-redux"
import { 
  Select,
  Input,
  Button,
  Textarea,
  Label,
  Fieldset,
  IsiBody,
  HeaderContent, 
  Content,
  Modal} from "../../../component"

class Jabatan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namaDivisi : "",
            namaJabatan : "",
            deskripsi : "",
            act : 0,
            index : "",
            jabatanEdit : {},
            tampungFilter : this.props.dataJabatan
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  searchData= el=>{

    var keyword = el.target.value;
    const dataFilter = this.props.dataJabatan.filter(x => x.namaJabatan === keyword);

    if(keyword==""){
      this.setState({
        tampungFilter : this.props.dataJabatan
    })
    }else{
      this.setState({
        tampungFilter : dataFilter
    })
    }

}


  setJabatan= el =>{
      let obj = this.state
  if (this.state.act === 1) {
      
    this.props.editJabatan(obj)
      this.setState({
        act: 0,
        tampungFilter : this.props.dataJabatan
      });
      el.preventDefault()
      this.clear()
      alert("Data berhasil diedit !!")
      this.props.history.push("/jabatan")
      
  }

  }

  deleteJabatan = (indexHapus) => {
    if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){

       if (indexHapus !== -1) {
          this.props.hapusJabatan({indexHapus});
          this.setState({
            tampungFilter : this.props.dataJabatan
          })
          this.props.history.push("/jabatan")
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

    const dataEdit=this.props.dataJabatan[index];
  
    this.setState({
      jabatanEdit: dataEdit
    })
  
  }

  print = ()=>{
    window.print()
  }

  reset = ()=> {
    this.setState({
      jabatanEdit :{}
    })
  }

  clear = () => {
      this.setState({ 
        namaDivisi : "",
        namaJabatan : "",
        deskripsi : ""
      })
  }

    render() {

      if("namaJabatan" in this.state.jabatanEdit){
        this.setState({
        namaDivisi: this.state.jabatanEdit.namaDivisi,
        namaJabatan: this.state.jabatanEdit.namaJabatan,
        deskripsi : this.state.jabatanEdit.deskripsi    
        })
        this.reset();
    }

        return (
            <>
            <Content>
            <HeaderContent>
            <h3 className="page-title"><b><i className="fas fa-user-tie" />&nbsp;Data Jabatan</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Management Ruangan</li>
            </ol>
            <div className="state-information d-none d-sm-block">
            <Button className="btn btn-primary" onClick={() => this.props.history.push("/formjabatan")}>
                     <i className="fa fa-plus" />&nbsp;Tambah Data
            </Button>
              <Button className="btn btn-success waves-effect waves-light" onClick={this.print}>
                  <i className="fa fa-print" /> Cetak Data</Button>
                 
            </div>
          </HeaderContent>

          <IsiBody>
          <input type="text" onChange={this.searchData} name="cari" placeholder="Masukan nama jabatan yang dicari" className="form-control"/>
              <table id="datatable" className="table table-striped table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                <thead>
                  <tr>
                    <th width={9}><b>No</b></th>
                    <th><b>Nama Divisi</b></th>
                    <th><b>Nama Jabatan</b></th>
                    <th><b>Deskripsi</b></th>
                    <th width={150}><b>Aksi</b></th>
                  </tr>
                </thead>
                <tbody>
                {
                    this.state.tampungFilter.map((b, index) => {
                        return (
<tr key={index}>
      <td>{index+1}</td>
       <td>{b.namaDivisi}</td>
       <td>{b.namaJabatan}</td>
       <td>{b.deskripsi}</td>
       <td>
       <button onClick={() =>{this.getEdit(index)} }  data-toggle="modal" data-target="#bb" className="btn btn-primary waves-effect waves-light"><span data-toggle="tooltip" data-original-title="Ubah"><font color="white"><i className="fas fa-pencil-alt" /></font></span></button>
       <button onClick={() =>{this.deleteJabatan(index)} } data-toggle="tooltip" className="btn btn-danger waves-effect waves-light tombol-hapus" data-original-title="Hapus"><span className="icon-label"><i className="fa fa-trash" /> </span><span className="btn-text" /></button>
                    
       </td>
      </tr>                
                          
                        )
                    })
                }
                <tr>
                  <td colSpan="5"><b>Total data : {this.props.dataJabatan.length}</b></td>
                </tr>
                </tbody>
              </table>
          </IsiBody>
    </Content>

<Modal id="bb">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header bg-primary">
        <h6 className="modal-title"><font color="white">Form Data Jabatan</font></h6>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
        <div className="modal-body">
        <Fieldset>
        <Label>Nama Divisi<font color="red">*</font></Label>
                  <Select  value={this.state.namaDivisi} onChange={this.setValue} name="namaDivisi">
                  <option value="">-- Pilih Nama Divisi--</option>
                  {
                                this.props.dataDivisi.map(
                                    (Item, idx) =>
                                    <option value={Item.namaDivisi} key={idx}>{Item.namaDivisi}</option>
                                )
                            }
                  </Select>
                </Fieldset>
          <Fieldset>
            <Label>Nama Jabatan<font color="red">*</font></Label>
            <Input type="text" name="namaJabatan" className="form-control" value={this.state.namaJabatan} onChange={this.setValue}/>
          </Fieldset>
          <Fieldset>
            <Label>Deskripsi</Label>
            <Textarea name="deskripsi" value={this.state.deskripsi} onChange={this.setValue}/>
          </Fieldset>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary mr-1" data-dismiss="modal" value="close">
            <i className="fas fa-times" />&nbsp;Keluar
          </button>
          <Button className="btn btn-primary" onClick={this.setJabatan}>
            <i className="fa fa-save" />&nbsp;Simpan
          </Button>
        </div>
    </div>
  </div>
  </Modal>


            </>
        );
    }
}

const mapStateToProps = state => ({
  dataDivisi: state.DReducer.divisi,
  dataJabatan: state.JReducer.jabatan
})

const mapDispatchToProps = dispatch => {
  return {
    saveJabatan: (data)=> dispatch({type:"SAVE_JABATAN", payload: data}),
    hapusJabatan: (dataJabatanBaru)=> dispatch({type:"HAPUS_JABATAN", payload: dataJabatanBaru}),
    editJabatan: (data)=> dispatch({type:"EDIT_JABATAN", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jabatan);