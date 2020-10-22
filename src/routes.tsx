import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Activities from './Pages/Activities/index'
import Home from './Pages/Home';

interface Props{
    toggleTheme():void;
}

const Routes: React.FC<Props> = ( { toggleTheme } ) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={ () => <Home toggleTheme={toggleTheme}/>} />
                <Route path="/activities" component={Activities}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;