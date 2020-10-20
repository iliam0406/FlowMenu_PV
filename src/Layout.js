import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Import Componentes
import Home from './Views/Home';
import PanelControl from './Views/panelControl'
import PanelPedidos from './Views/panelPedidos'




function Layout(){
    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/panelcontrol" component={PanelControl} />
                <Route exact path="/panelpedidos" component={PanelPedidos} />
            </Switch>
        </BrowserRouter>

        </>
    )
}

export default Layout;
