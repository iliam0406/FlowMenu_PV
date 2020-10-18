import React from 'react';

import '../style/navbar.css'


const Navbar = ()=>{
    return(
        <>
        <div className="fondonavbar">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-dark bg-dark contenedorLogo">
                            <a className="navbar-brand" href="#">
                                <img className="logoMenu" src="./img/logo.png" alt="" loading="lazy"/>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>  
        </div>
        </>
    )
}

export default Navbar;