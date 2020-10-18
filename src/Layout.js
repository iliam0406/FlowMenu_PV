import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Import Componentes
import Home from './Views/Home';
import PanelControl from './Views/panelControl'




function Layout(){
    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/PanelControl" component={PanelControl} />
            </Switch>
        </BrowserRouter>

        </>
    )
}

export default Layout;
