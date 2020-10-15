import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Activities from './Pages/Activities/index'
import Home from './Pages/Home';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/activities" exact={true} component={Activities} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;