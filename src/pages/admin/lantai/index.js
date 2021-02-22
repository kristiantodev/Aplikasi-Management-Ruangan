import React, { Component } from 'react';
import { connect } from "react-redux"
import { 
  Input,
  Button,
  Textarea,
  Label,
  Fieldset,
  IsiBody,
  HeaderContent, 
  Content,
  Modal} from "../../../component"

class Lantai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama : "",
            deskripsi : "",
            act : 0,
            index : "",
            lantaiEdit : {},
            tampungFilter : this.props.dataLantai
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  searchData= el=>{

    var keyword = el.target.value;
    const lantaiFilter = this.props.dataLantai.filter(x => x.nama === keyword);

    if(keyword==""){
      this.setState({
        tampungFilter : this.props.dataLantai
    })
    }else{
      this.setState({
        tampungFilter : lantaiFilter
    })
    }

}

  setLantai= el =>{
      let obj = this.state

  if (this.state.act === 1) {

      this.props.editLantai(obj)
      this.setState({
        act: 0,
        tampungFilter : this.props.dataLantai
      })
  
      this.clear()
      alert("Data berhasil diedit !!")
      this.props.history.push("/lantai")

    }

  }

  deleteLantai = (indexHapus) => {
    if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){

       if (indexHapus !== -1) {
          this.props.hapusLantai({indexHapus});
          this.setState({
            tampungFilter : this.props.dataLantai
          })
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

  print = ()=>{
    window.print()
  }

  refresh = ()=>{
    this.setState({
      tampungFilter : this.props.dataLantai
    })
  }

  clearData = ()=>{

    if(window.confirm("Apakah anda yakin ingin menghapus semua data ini ?")){

    this.props.hapusAllLantai();
    this.setState({
      tampungFilter : this.props.dataLantai
    })
    alert("Silahkan tekan tombol refresh untuk update")
    this.props.history.push("/lantai")
  }

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
  <Content>
  <HeaderContent>
            <h3 className="page-title"><b><i className="fas fa-chart-line" />&nbsp;Data Lantai</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Management Ruangan</li>
            </ol>
            <div className="state-information d-none d-sm-block">
            <Button className="btn btn-primary" onClick={() => this.props.history.push("/formlantai")}>
                     <i className="fa fa-plus" />&nbsp;Tambah Data
            </Button>
              <Button className="btn btn-success waves-effect waves-light" onClick={this.print}>
                  <i className="fa fa-print" /> Cetak Data</Button>
                  <Button className="btn btn-danger" onClick={() => this.clearData()}>
                     <i className="fa fa-trash" />&nbsp;Clear Data
               </Button>
          <Button onClick={this.refresh} className="btn btn-primary waves-effect waves-light">
                      <i className="fas fa-redo" /><span> Refresh Page</span>
                </Button>
            </div>
  </HeaderContent>
     <IsiBody>
       <input type="text" onChange={this.searchData} name="cari" placeholder="Masukan nama lantai yang dicari" className="form-control"/>
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
                    this.state.tampungFilter.map((b, index) => {
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
                <tr>
                  <td colSpan="4"><b>Total data : {this.props.dataLantai.length}</b></td>
                </tr>
                </tbody>
              </table>
        </IsiBody>
    </Content>

<Modal id="bb">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header bg-primary">
        <h6 className="modal-title"><font color="white">Form Data Lantai</font></h6>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
        <div className="modal-body">
          <Fieldset>
            <Label>Nama Lantai<font color="red">*</font></Label>
            <Input type="text" name="nama" value={this.state.nama} onChange={this.setValue}/>
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
          <Button className="btn btn-primary" onClick={this.setLantai}>
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
  dataLantai: state.LReducer.lantai
})

const mapDispatchToProps = dispatch => {
  return {
    hapusLantai: (dataLantaiBaru)=> dispatch({type:"HAPUS_LANTAI", payload: dataLantaiBaru}),
    editLantai: (data)=> dispatch({type:"EDIT_LANTAI", payload: data}),
    hapusAllLantai: ()=> dispatch({type:"HAPUS_ALL_LANTAI"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lantai);