import React from 'react'

//import componentes
import CardpanelPedidos from '../componentes/cardPanelPedidos'
import CardViewPanelPedidos from '../componentes/cardViewPanelPedidos'
import NavPanelControl from '../componentes/navPanelControl'


const PanelPedidos = ()=>{
    return(
        <>
            <NavPanelControl/>
            <div className="container mt-5">
                <div className= "row">
                    <div className="col-md-4">
                        <CardViewPanelPedidos />
                    </div>
                    <div className="col-md-8">
                        <CardpanelPedidos />
                    </div>
                </div>
            </div>
        </>
    )
};

export default PanelPedidos;