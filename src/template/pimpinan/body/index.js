import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import { Dashboard} from "../../../pages/pimpinan"

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
 
        return (
            <Switch>
            <Route path="/" exact component={Dashboard} />
                {/* <Route path="/home">
                      <Home/>
                    </Route> */}
            </Switch>
        )
    }
}

export default Body;