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

class FormJabatan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namaDivisi : "",
            namaJabatan : "",
            deskripsi : ""
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  setJabatan= el =>{
      let obj = this.state

      if(obj.namaDivisi == "" || obj.namaJabatan == ""){
          alert("Data wajib diisi !!!")
      }else{
        var indexJabatan = this.props.dataJabatan.map(function(e) { return e.namaJabatan; }).indexOf(obj.namaJabatan);

        if(indexJabatan >=0){
            alert("Nama jabatan sudah ada!! silahkan masukan nama jabatan lain...")
        }else{
            this.props.saveJabatan(obj);
            el.preventDefault()
            this.clear()
            alert("Data berhasil disimpan !!")
            this.props.history.push("/jabatan")
        }
        
      }

  }

  clear = () => {
      this.setState({ 
        namaDivisi : "",
        namaJabatan : "",
        deskripsi : ""
      })
  }

    render() {
        return (
            <>
            <Content>
            <HeaderContent>
            <h3 className="page-title"><b><i className="fas fa-user-tie" />&nbsp;Data Jabatan</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Management Ruangan</li>
            </ol>
            <div className="state-information d-none d-sm-block">
            <Button onClick={() => this.props.history.push("/jabatan")} className="btn btn-primary waves-effect waves-light">
                      <i className="fas fa-angle-double-left " /><span> Kembali</span>
                </Button>
            </div>
          </HeaderContent>

          <IsiBody>
          <Fieldset>
        <Label>Nama Divisi</Label>
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
            <Label>Nama Jabatan</Label>
            <Input type="text" name="namaJabatan" className="form-control" value={this.state.namaJabatan} onChange={this.setValue}/>
          </Fieldset>
          <Fieldset>
            <Label>Deskripsi</Label>
            <Textarea name="deskripsi" value={this.state.deskripsi} onChange={this.setValue}/>
          </Fieldset>
          <Button className="btn btn-primary" onClick={this.setJabatan}>
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
  dataJabatan: state.JReducer.jabatan
})

const mapDispatchToProps = dispatch => {
  return {
    saveJabatan: (data)=> dispatch({type:"SAVE_JABATAN", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormJabatan);