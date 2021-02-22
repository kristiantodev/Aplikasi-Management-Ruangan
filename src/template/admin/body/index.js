import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import { 
     Dashboard,
     Lantai,
     Ruangan,
     Divisi,
     Jabatan,
     Karyawan,
     FormLantai,
     FormRuangan,
     FormDivisi,
     FormJabatan,
     FormKaryawan,
     HakAkses,
     FormHakAkses} from "../../../pages/admin"

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
 
        return (
            <Switch>
            <Route exact path="/" component={props =>   <Dashboard {...props} />}/>
            <Route path="/lantai" component={props => <Lantai {...props} />} />
            <Route path="/ruangan" component={props => <Ruangan {...props} />} />
            <Route path="/divisi" component={props => <Divisi {...props} />} />
            <Route path="/jabatan" component={props => <Jabatan {...props} />} />
            <Route path="/karyawan" component={props => <Karyawan {...props} />} />
            <Route path="/formlantai" component={props => <FormLantai {...props} />} />
            <Route path="/formruangan" component={props => <FormRuangan {...props} />} />
            <Route path="/formdivisi" component={props => <FormDivisi {...props} />} />
            <Route path="/formjabatan" component={props => <FormJabatan {...props} />} />
            <Route path="/formkaryawan" component={props => <FormKaryawan {...props} />} />
            <Route path="/hakakses" component={props => <HakAkses {...props} />} />
            <Route path="/formhakakses" component={props => <FormHakAkses {...props} />} />
            </Switch>
        )
    }
}

export default Body;