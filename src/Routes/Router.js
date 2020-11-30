import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../Pages/Home';
import Series from '../Pages/Series';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/serie" component={Series}/>

            </Switch>
                </BrowserRouter>
    )
}

export default Router