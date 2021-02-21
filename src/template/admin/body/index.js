import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import { 
     Dashboard,
     Lantai,
     Ruangan,
     Divisi,
     Jabatan,
     Karyawan} from "../../../pages/admin"

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
            </Switch>
        )
    }
}

export default Body;