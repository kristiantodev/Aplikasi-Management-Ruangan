import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import { Dashboard, Lantai} from "../../../pages/admin"

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
            </Switch>
        )
    }
}

export default Body;