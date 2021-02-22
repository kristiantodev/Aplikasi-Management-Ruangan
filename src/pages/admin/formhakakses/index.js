import React, { Component } from 'react';
import { connect } from "react-redux"
import { 
    Select,
    Input,
    Button,
    Option,
    Label,
    Fieldset,
    IsiBody,
    HeaderContent, 
    Content,
    Check} from "../../../component"

class FormHakAkses extends Component {
    constructor(props) {
        super(props);
        this.state = {
             id : "",
             namaKaryawan : "",
             namaDivisi : "",
             namaJabatan : "",
             tglBerlaku : "",
             tglBerakhir : "",
             selectData : {},
             basement : ""
        }
    }

    setValue= el=>{
      this.setState({
          [el.target.name]: el.target.value
      })
    }


    selectValue= el=>{
    
    var indexKaryawan = this.props.dataKaryawan.map(function(e) { return e.id; }).indexOf(el.target.value);
    const namaKaryawan=this.props.dataKaryawan[indexKaryawan].namaKaryawan;
    const namaDivisi=this.props.dataKaryawan[indexKaryawan].namaDivisi;
    const namaJabatan = this.props.dataKaryawan[indexKaryawan].namaJabatan;

    this.setState({
        namaKaryawan : namaKaryawan,
        namaDivisi : namaDivisi,
        namaJabatan : namaJabatan
    })

      }


    setCheck = (el) => {
      
    }

    render() {

        return (
            <>
           
  <Content> 
    <HeaderContent>
            <h3 className="page-title"><b><i className="fas fa-key" />&nbsp;Data Hak Akses Ruangan</b></h3>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Sistem Management Ruangan</li>
            </ol>
            <div className="state-information d-none d-sm-block">
            <Button onClick={() => this.props.history.push("/hakakses")} className="btn btn-primary waves-effect waves-light">
                      <i className="fas fa-angle-double-left " /><span> Kembali</span>
                </Button>
                  
            </div>
   </HeaderContent>    
    
        <IsiBody>     
        <Fieldset>
        <Label>Karyawan<font color="red">*</font></Label>
                  <Select onChange={this.selectValue} name="id">
                  <Option value="">-- Pilih Karyawan--</Option>
                  {
                                this.props.dataKaryawan.map(
                                    (Item, idx) =>
                                    <option value={Item.id} key={idx}>{Item.id} - {Item.namaKaryawan}</option>
                                )
                            }
                  </Select>
                </Fieldset>

            <Input type="hidden" value={this.state.namaKaryawan} name="namaKaryawan" onChange={this.setValue}/>
            <Input type="hidden" value={this.state.namaDivisi} name="namaDivisi" onChange={this.setValue}/>
            <Input type="hidden" value={this.state.namaJabatan} name="namaJabatan" onChange={this.setValue}/>

          <Fieldset>
            <Label>Tanggal Berlaku<font color="red">*</font></Label>
            <Input type="date" value={this.state.tglBerlaku} name="tglBerlaku" onChange={this.setValue}/>
          </Fieldset>

          <Fieldset>
            <Label>Tanggal Berakhir<font color="red">*</font></Label>
            <Input type="date" name="tglBerakhir" value={this.state.tglBerakhir} onChange={this.setValue}/>
          </Fieldset>

          <Fieldset>
            <Label>Hak Akses<font color="red">*</font></Label><br/>
            {
                    this.props.dataLantai.map(
                    (Item, idx) =>
                    <>
                        <input type="checkbox"  name="namaLantai" onClick={this.setCheck} value={Item.nama} key={idx}/> {Item.nama}<br/>
                        {this.props.dataRuangan.filter(ruang => ruang.namaLantai == Item.nama).map((fRuang, id) =>
                          <li><input type="checkbox"  name="namaRuangan" onClick={this.setCheck} value={fRuang.namaRuangan} key={id}/> {fRuang.namaRuangan}<br/></li>
                        )}
                    </>
                    
                    )
            }
          </Fieldset>
         
          <Button className="btn btn-primary">
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
  dataKaryawan: state.KReducer.karyawan,
  dataLantai: state.LReducer.lantai,
  dataRuangan: state.RReducer.ruangan
})

const mapDispatchToProps = dispatch => {
  return {
    saveKaryawan: (data)=> dispatch({type:"SAVE_KARYAWAN", payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormHakAkses);