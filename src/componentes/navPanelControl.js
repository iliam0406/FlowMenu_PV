import React from 'react';

import '../style/navPanelControl.css'

const NavPanelControl = ()=>{
    return(
        <div className="NavBarPanelControl">
            <div className="Container">
                <div className="row">
                    <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                        <a className="navbar-brand" href="#">FlowMenu</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    User: 2582
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Cerrar Sesión</a>
                                        <a className="dropdown-item" href="#">Cambiar Contraseña</a>
                                        <a className="dropdown-item" href="#">Salir</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavPanelControl;