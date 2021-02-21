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
  Content} from "../../../component"

class FormLantai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama : "",
            deskripsi : ""
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

 
  setLantai= el =>{
      let obj = this.state
      if(obj.nama == ""){
          alert("Nama Lantai wajib diisi !!!")
      }else{
        var indexLantai = this.props.dataLantai.map(function(e) { return e.nama; }).indexOf(obj.nama);

        if(indexLantai >=0){
            alert("Nama lantai sudah ada!!")
        }else{
            this.props.saveLantai(obj);
            this.clear()
            alert("Data berhasil disimpan !!")
            this.props.history.push("/lantai")
        }
        
      }

  }

   clear = () => {
      this.setState({ 
        nama : "",
        deskripsi : ""
      })
  }

    render() {

        return (
            <>
  <Content>
  <HeaderContent>
            <h3 className="page-title"><b><i className="fas fa-chart-line" />&nbsp;Data Lantai</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Management Ruangan</li>
            </ol>
            <div className="state-information d-none d-sm-block">
          <Button onClick={() => this.props.history.push("/lantai")} className="btn btn-primary waves-effect waves-light">
                      <i className="fas fa-angle-double-left " /><span> Kembali</span>
                </Button>
            </div>
  </HeaderContent>
     <IsiBody>
     <Fieldset>
            <Label>Nama Lantai</Label>
            <Input type="text" name="nama" value={this.state.nama} onChange={this.setValue}/>
          </Fieldset>
          <Fieldset>
            <Label>Deskripsi</Label>
            <Textarea name="deskripsi" value={this.state.deskripsi} onChange={this.setValue}/>
          </Fieldset>
          <Button className="btn btn-primary" onClick={this.setLantai}>
            <i className="fa fa-save" />&nbsp;Simpan
          </Button>
        </IsiBody>
    </Content>

            </>
        );
    }
}

const mapStateToProps = state => ({
  dataLantai: state.LReducer.lantai
})

const mapDispatchToProps = dispatch => {
  return {
    saveLantai: (datanya)=> dispatch({type:"SAVE_LANTAI", payload: datanya})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLantai);