import React from 'react';

const CardViewPanelPedidos=()=>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <div className="card mt-2">
                        <div className="card-header bg-danger text-white">MESA: 1 / COMENSAL: 1</div>
                        
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">ENTRADA: Ensalada de estación</li>
                            <li className="list-group-item">PRINCIPAL: Pollo Frito / Pure de papa</li>
                            <li className="list-group-item">POSTRE: Leche Asada</li>
                            <li className="list-group-item">BEBIDA: Jugo de Mango</li>
                            <li className="list-group-item">ADICIONALES: No aplica</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    <div className="card mt-2">
                        <div className="card-header bg-danger text-white">TOTAL</div>

                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                SUBTOTAL
                                <span className="badge">$ 4.500</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                PROPINA
                                <span className="badge">$ 450</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                TOTAL
                                <span className="badge badge-primary pt-1 pb-1">$ 4.950</span>
                            </li>
                        </ul>
                    </div>
                </div>

                
            </div>
        </div>
        </>
    )
}

export default CardViewPanelPedidos;