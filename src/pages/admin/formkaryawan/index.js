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

class FormKaryawan extends Component {
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
            disabled: true,
            selectJabatan : [] 
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
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

      if(obj.namaDivisi == "" || obj.namaJabatan == "" || obj.id == "" || obj.namaKaryawan == "" || obj.jk == ""){
          alert("Data wajib diisi !!!")
      }else{
        var indexKaryawan = this.props.dataKaryawan.map(function(e) { return e.id; }).indexOf(obj.id);

        if(indexKaryawan >=0){
            alert("ID Karyawan sudah ada!! silahkan masukan ID lain...")
        }else{
            this.props.saveKaryawan(obj);
            el.preventDefault()
            this.clear()
            alert("Data berhasil disimpan !!")
            this.props.history.push("/karyawan")
        }
        
      }
    
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
            <Button onClick={() => this.props.history.push("/karyawan")} className="btn btn-primary waves-effect waves-light">
                      <i className="fas fa-angle-double-left " /><span> Kembali</span>
                </Button>
                  
            </div>
   </HeaderContent>    
    
        <IsiBody>     
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
         
          <Button className="btn btn-primary" onClick={this.setKaryawan}>
            <i className="fa fa-save" />&nbsp;Simpan
          </Button>
  </IsiBody>  
  </Content>      


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
    saveKaryawan: (data)=> dispatch({type:"SAVE_KARYAWAN", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormKaryawan);