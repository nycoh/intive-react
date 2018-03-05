import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Aux from 'react-aux';


import Users from '../Users';


const App = () => (
    <BrowserRouter>
        <Aux>
            <main>
                <Switch>
                    <Route exact path="/" component={Users}/>
                </Switch>
            </main>
        </Aux>
    </BrowserRouter>
);

export default App;
