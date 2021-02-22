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

class Karyawan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            namaKaryawan : "",
            jk : "",
            namaDivisi : "",
            namaJabatan : "",
            tglMasuk : "",
            tglSelesai : "",
            act : 0,
            index : "",
            karyawanEdit : {},
            disabled: true,
            selectJabatan : [],
            tampungFilter : this.props.dataKaryawan 
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  searchData= el=>{

    var keyword = el.target.value;
    const dataFilter = this.props.dataKaryawan.filter(x => x.namaKaryawan === keyword);

    if(keyword==""){
      this.setState({
        tampungFilter : this.props.dataKaryawan
    })
    }else{
      this.setState({
        tampungFilter : dataFilter
    })
    }

}

  selectAction= el=>{
    var nama = el.target.value
    const jabatanFilter = this.props.dataJabatan.filter(x => x.namaDivisi === nama);

    this.setState({
        namaDivisi: el.target.value,
        disabled: false,
        selectJabatan : jabatanFilter
    })
}

  setKaryawan= el =>{
      let obj = this.state
  if (this.state.act === 1) {
    this.props.editKaryawan(obj)
    this.setState({
        act: 0,
        tampungFilter : this.props.dataKaryawan
        });
         
        el.preventDefault()
        this.clear()
        alert("Data berhasil diedit !!")
        this.props.history.push("/karyawan")
        
      }


  }

  deleteKaryawan = (indexHapus) => {
    if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){

       if (indexHapus !== -1) {
          this.props.hapusKaryawan({indexHapus});
          this.setState({
            tampungFilter : this.props.dataKaryawan
          })
          this.props.history.push("/karyawan")
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

    const dataEdit=this.props.dataKaryawan[index];
  
    this.setState({
      karyawanEdit: dataEdit,
      selectJabatan : this.props.dataJabatan
    })
  
  }

  reset = ()=> {
    this.setState({
      karyawanEdit :{}
    })
  }

  clear = () => {
      this.setState({ 
        id: "",
            namaKaryawan : "",
            jk : "",
            namaDivisi : "",
            namaJabatan : "",
            tglMasuk : "",
            tglSelesai : ""
      })
  }

  print = ()=>{
    window.print()
  }

    render() {

      if("id" in this.state.karyawanEdit){
        this.setState({
          id: this.state.karyawanEdit.id,
          namaKaryawan: this.state.karyawanEdit.namaKaryawan,
          jk : this.state.karyawanEdit.jk,
        namaDivisi: this.state.karyawanEdit.namaDivisi,
        namaJabatan: this.state.karyawanEdit.namaJabatan,
        tglMasuk : this.state.karyawanEdit.tglMasuk,
        tglSelesai : this.state.karyawanEdit.tglSelesai   
        })
        this.reset();
    }

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
              <Button className="btn btn-success waves-effect waves-light" onClick={this.print}>
                  <i className="fa fa-print" /> Cetak Data</Button>
                  
            </div>
   </HeaderContent>    
    
        <IsiBody>     
        <input type="text" onChange={this.searchData} name="cari" placeholder="Masukan nama karyawan yang dicari" className="form-control"/>
              <table id="datatable" className="table table-striped table-bordered dt-responsive nowrap" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                <thead>
                  <tr>
                    <th><b>ID</b></th>
                    <th><b>Nama Karyawan</b></th>
                    <th><b>JK</b></th>
                    <th><b>Nama Divisi</b></th>
                    <th><b>Nama Jabatan</b></th>
                    <th><b>Tgl Masuk</b></th>
                    <th><b>Tgl Keluar</b></th>
                    <th width={150}><b>Aksi</b></th>
                  </tr>
                </thead>
                <tbody>
                {
                    this.state.tampungFilter.map((b, index) => {
                        return (
<tr key={index}>
       <td>{b.id}</td>
       <td>{b.namaKaryawan}</td>
       <td>{b.jk}</td>
       <td>{b.namaDivisi}</td>
       <td>{b.namaJabatan}</td>
       <td>{b.tglMasuk}</td>
       <td>{b.tglSelesai}</td>
       <td>
       <button onClick={() =>{this.getEdit(index)} }  data-toggle="modal" data-target="#bb" className="btn btn-primary waves-effect waves-light"><span data-toggle="tooltip" data-original-title="Ubah"><font color="white"><i className="fas fa-pencil-alt" /></font></span></button>
       <button onClick={() =>{this.deleteKaryawan(index)} } data-toggle="tooltip" className="btn btn-danger waves-effect waves-light tombol-hapus" data-original-title="Hapus"><span className="icon-label"><i className="fa fa-trash" /> </span><span className="btn-text" /></button>
                    
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
        <h6 className="modal-title"><font color="white">Form Data Karyawan</font></h6>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
        <div className="modal-body">
        <Fieldset>
        <Label>Nama Divisi</Label>
                  <Select value={this.state.namaDivisi} onChange={this.selectAction} name="namaDivisi">
                  <Option value="">-- Pilih Nama Divisi--</Option>
                  {
                                this.props.dataDivisi.map(
                                    (Item, idx) =>
                                    <option value={Item.namaDivisi} key={idx}>{Item.namaDivisi}</option>
                                )
                            }
                  </Select>
                </Fieldset>

                <Fieldset>
        <Label>Nama Jabatan</Label> 
                  <select value={this.state.namaJabatan} disabled={(this.state.disabled)? "disabled" : ""} onChange={this.setValue} name="namaJabatan" className="custom-select">
                  <Option value="">-- Pilih Nama Jabatan--</Option>
                  {
                                this.state.selectJabatan.map(
                                    (Item, idx) =>
                                    <option value={Item.namaJabatan} key={idx}>{Item.namaJabatan}</option>
                                )
                            }
                  </select>
                </Fieldset>

          <Fieldset>
            <Label>ID Karyawan</Label>
            <Input type="text" name="id" value={this.state.id} onChange={this.setValue}/>
          </Fieldset>

          <Fieldset>
            <Label>Nama Karyawan</Label>
            <Input type="text" name="namaKaryawan" value={this.state.namaKaryawan} onChange={this.setValue}/>
          </Fieldset>

          <Fieldset>
            <Label>Jenis Kelamin</Label>
            <br/>
            <Radio type="radio" checked={this.state.jk==="L"?"checked":""} name='jk' value="L" onChange={this.setValue}/>Laki-laki &nbsp;
            <Radio type="radio" checked={this.state.jk==="P"?"checked":""} name='jk' value="P" onChange={this.setValue}/>Perempuan
          </Fieldset>

          <Fieldset>
            <Label>Tanggal Masuk</Label>
            <Input type="date" name="tglMasuk" value={this.state.tglMasuk} onChange={this.setValue}/>
          </Fieldset>

          <Fieldset>
            <Label>Tanggal Selesai Bekerja</Label>
            <Input type="date" name="tglSelesai" value={this.state.tglSelesai} onChange={this.setValue}/>
          </Fieldset>
         
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary mr-1" data-dismiss="modal" value="close">
            <i className="fas fa-times" />&nbsp;Keluar
          </button>
          <Button className="btn btn-primary" onClick={this.setKaryawan}>
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
  dataJabatan: state.JReducer.jabatan,
  dataKaryawan: state.KReducer.karyawan
})

const mapDispatchToProps = dispatch => {
  return {
    saveKaryawan: (data)=> dispatch({type:"SAVE_KARYAWAN", payload: data}),
    hapusKaryawan: (dataKaryawanBaru)=> dispatch({type:"HAPUS_KARYAWAN", payload: dataKaryawanBaru}),
    editKaryawan: (data)=> dispatch({type:"EDIT_KARYAWAN", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Karyawan);