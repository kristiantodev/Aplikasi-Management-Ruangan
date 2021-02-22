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

class FormRuangan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namaLantai : "",
            namaRuangan : "",
            kondisiRuangan:"",
            deskripsi : ""
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  setRuangan= el =>{
      let obj = this.state
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
            this.props.history.push("/ruangan")
        }
      
  }

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
        return (
            <>
            <Content>
            <HeaderContent>
            <h3 className="page-title"><b><i className="fas fa-school" />&nbsp;Data Ruangan</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Management Ruangan</li>
            </ol>
            <div className="state-information d-none d-sm-block">
            <Button onClick={() => this.props.history.push("/ruangan")} className="btn btn-primary waves-effect waves-light">
                      <i className="fas fa-angle-double-left " /><span> Kembali</span>
                </Button>
            </div>
            </HeaderContent>
            <IsiBody>
            <Fieldset>
        <Label>Nama Lantai<font color="red">*</font></Label>
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
            <Label>Nama Ruangan<font color="red">*</font></Label>
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
          <Button className="btn btn-primary" onClick={this.setRuangan}>
            <i className="fa fa-save" />&nbsp;Simpan
          </Button>
        </IsiBody>
    </Content>


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
    saveRuangan: (data)=> dispatch({type:"SAVE_RUANGAN", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRuangan);