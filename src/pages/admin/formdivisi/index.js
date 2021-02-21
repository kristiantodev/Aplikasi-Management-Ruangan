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

class FormDivisi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namaDivisi : "",
            deskripsi : ""
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
  }

  setDivisi= el =>{
      let obj = this.state

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

  }

 
  clear = () => {
      this.setState({ 
        namaDivisi : "",
        deskripsi : ""
      })
  }


    render() {
        return (
            <>
    <Content>
    <HeaderContent>
            <h3 className="page-title"><b><i className="fab fa-pied-piper-alt" />&nbsp;Data Divisi</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Management Ruangan</li>
            </ol>
            <div className="state-information d-none d-sm-block">
            <Button onClick={() => this.props.history.push("/divisi")} className="btn btn-primary waves-effect waves-light">
                      <i className="fas fa-angle-double-left" /><span> Kembali</span>
                </Button>
            </div>
    </HeaderContent>
    <IsiBody>
    <Fieldset>
            <Label>Nama Divisi</Label>
            <Input type="text" name="namaDivisi" value={this.state.namaDivisi} onChange={this.setValue}/>
          </Fieldset>
          <Fieldset>
            <Label>Deskripsi</Label>
            <Textarea name="deskripsi" value={this.state.deskripsi} onChange={this.setValue}/>
          </Fieldset>
          <Button className="btn btn-primary" onClick={this.setDivisi}>
            <i className="fa fa-save" />&nbsp;Simpan
          </Button>
          </IsiBody>
    </Content>

            </>
        );
    }
}

const mapStateToProps = state => ({
  dataDivisi: state.DReducer.divisi
})

const mapDispatchToProps = dispatch => {
  return {
    saveDivisi: (data)=> dispatch({type:"SAVE_DIVISI", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDivisi);