import React, { Component } from 'react';
import { connect } from "react-redux"
import { 
  Select,
  Option,
  Input,
  Button,
  Textarea,
  Label,
  Fieldset,
  IsiBody,
  HeaderContent, 
  Content,
  Modal} from "../../../component"

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

  print = ()=>{
    window.print()
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
            <Content>
            <HeaderContent>
            <h3 className="page-title"><b><i className="fas fa-school" />&nbsp;Data Ruangan</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Management Ruangan</li>
            </ol>
            <div className="state-information d-none d-sm-block">
              <a data-toggle="modal" data-target="#bb">
                <button type="button" className="btn btn-primary waves-effect waves-light">
                  <i className="fa fa-plus" /> Tambah Data</button>
              </a>
              <button type="button" className="btn btn-success waves-effect waves-light" onClick={this.print}>
                  <i className="fa fa-print" /> Cetak Data</button>
                  <Button className="btn btn-danger" onClick={this.props.hapusAllRuangan}>
            <i className="fa fa-trash" />&nbsp;Clear Data
          </Button>
            </div>
            </HeaderContent>
            <IsiBody>
              
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
        </IsiBody>
    </Content>

<Modal id="bb">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header bg-primary">
        <h6 className="modal-title"><font color="white">Form Data Ruangan</font></h6>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
        <div className="modal-body">
        <Fieldset>
        <Label>Nama Lantai</Label>
                  <Select value={this.state.namaLantai} onChange={this.setValue} name="namaLantai">
                  <Option value="">-- Pilih Nama Lantai--</Option>
                  {
                                this.props.dataLantai.map(
                                    (Item, idx) =>
                                    <option value={Item.nama} key={idx}>{Item.nama}</option>
                                )
                            }
                  </Select>
                </Fieldset>
          <Fieldset>
            <Label>Nama Ruangan</Label>
            <Input type="text" name="namaRuangan"value={this.state.namaRuangan} onChange={this.setValue}/>
          </Fieldset>
          <Fieldset>
        <Label>Kondisi Ruangan</Label>
                  <Select value={this.state.kondisiRuangan} onChange={this.setValue} name="kondisiRuangan">
                  <Option value="">-- Pilih Kondisi Ruangan--</Option>
                  <Option value="Terpakai">Terpakai</Option>
                  <Option value="Kosong">Kosong</Option>
                  </Select>
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
          <Button className="btn btn-primary" onClick={this.setRuangan}>
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
  dataLantai: state.LReducer.lantai,
  dataRuangan: state.RReducer.ruangan
})

const mapDispatchToProps = dispatch => {
  return {
    saveRuangan: (data)=> dispatch({type:"SAVE_RUANGAN", payload: data}),
    hapusRuangan: (dataRuanganBaru)=> dispatch({type:"HAPUS_RUANGAN", payload: dataRuanganBaru}),
    editRuangan: (data)=> dispatch({type:"EDIT_RUANGAN", payload: data}),
    hapusAllRuangan: ()=> dispatch({type:"HAPUS_ALL_RUANGAN"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ruangan);