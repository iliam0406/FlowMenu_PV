import React from 'react';

//Componentes
import NavPanelControl from '../componentes/navPanelControl'
import FormPanelControlUser from '../componentes/formPanelControlUser';
import FormPanelControlGrupos from '../componentes/FormPanelControlGrupos';
import FormPanelControProductos from '../componentes/FormPanelControlProductos';

function PanelControl(){
    return(
        <>
            <NavPanelControl/>
            <div className="controlPanelForm">
                <div className="row p-5">
                    <div className="col-md-4 mt-4">
                        <FormPanelControlUser
                        titulo="Configuración de Usuario"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <FormPanelControlGrupos
                        titulo="Configuración de Estilos"
                        />
                    </div>
                    <div className="col-md-4 mt-4">
                        <FormPanelControProductos
                        titulo="Configuración de Productos"
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default PanelControl;