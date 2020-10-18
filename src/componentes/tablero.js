import React from 'react';

import '../style/tablero.css'


const Tablero = ()=>{
    return(
        <>
            <div className="container uno">
                <form className="formulario">

                    <div className="row mb-1 textinput">
                        <div className="col-md-6 mb-3 textinput">
                            <input type="text" className="form-control" id="validationServer01" placeholder="Password User" required/>
                            <div class="valid-feedback">
                                
                            </div>
                        </div>
                    </div>

                    <div className="teclado">
                        <div className="row mb-1">
                            <div className="col">
                                <button type="button" className="btn btn-secondary num">1</button> 
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-secondary num">2</button> 
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-secondary num">3</button> 
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-secondary num">4</button> 
                            </div>
                        </div> 

                        <div className="row mb-1">
                            <div className="col">
                                <button type="button" className="btn btn-secondary num">5</button> 
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-secondary num">6</button> 
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-secondary num">7</button> 
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-secondary num">8</button> 
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col">
                                <button type="button" className="btn btn-secondary num">9</button> 
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-secondary num">0</button> 
                            </div>
                            <div className="col">
                                <button type="submit" class="btn btn-danger enter">ENTER</button>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>  
        </>
    )
}

export default Tablero;