import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import { Dashboard, Laporan} from "../../../pages/pimpinan"

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
            <Route path="/laporan" component={props => <Laporan {...props} />} />
                {/* <Route path="/home">
                      <Home/>
                    </Route> */}
            </Switch>
        )
    }
}

export default Body;