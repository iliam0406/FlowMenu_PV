import React from 'react'

import '../style/panelPedidos.css'

const CardPanelPedidos =()=>{
    return(
        <>
        <div className="container containerMOdif">
            <div className="row d-flex justify-content-end">
                <div className="col-md-12 mb-3">
                    <div className="card-header bg-danger">
                        <select className="form-control w-25 ">
                                <option>Pedidos Totales </option>
                                <option>Pedidos Nuevos</option>
                                <option>Pedidos Abiertos</option>
                                <option>Pedidos Cerrados</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <div className="card border-warning mb-3">
                        <div className="card-header bg-warning">NUEVO</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Mesa: 5</h5>
                            <h5 className="card-title">Comensal: 1</h5>
                            <button type="button" className="btn btn-warning btn-sm">Pedido</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-warning mb-3">
                        <div className="card-header bg-warning">NUEVO</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Mesa: 5</h5>
                            <h5 className="card-title">Comensal: 2</h5>
                            <button type="button" className="btn btn-warning btn-sm">Pedido</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-warning mb-3">
                        <div className="card-header bg-warning">NUEVO</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Mesa: 5</h5>
                            <h5 className="card-title">Comensal: 2</h5>
                            <button type="button" className="btn btn-warning btn-sm">Pedido</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-warning mb-3">
                        <div className="card-header bg-warning">NUEVO</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Mesa: 5</h5>
                            <h5 className="card-title">Comensal: 2</h5>
                            <button type="button" className="btn btn-warning btn-sm">Pedido</button>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="row">
            <div className="col-md-3">
                    <div className="card border-secondary mb-3">
                        <div className="card-header text-white bg-secondary">ABIERTO</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Mesa: 3</h5>
                            <h5 className="card-title">Comensal: 1</h5>
                            <button type="button" className="btn btn-secondary btn-sm">Pedido</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-secondary mb-3">
                        <div className="card-header text-white bg-secondary">ABIERTO</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Mesa: 3</h5>
                            <h5 className="card-title">Comensal: 1</h5>
                            <button type="button" className="btn btn-secondary btn-sm">Pedido</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-secondary mb-3">
                        <div className="card-header text-white bg-secondary">ABIERTO</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Mesa: 3</h5>
                            <h5 className="card-title">Comensal: 1</h5>
                            <button type="button" className="btn btn-secondary btn-sm">Pedido</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-secondary mb-3">
                        <div className="card-header text-white bg-secondary">ABIERTO</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Mesa: 3</h5>
                            <h5 className="card-title">Comensal: 1</h5>
                            <button type="button" className="btn btn-secondary btn-sm">Pedido</button>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="row">
            <div className="col-md-3">
                    <div className="card border-secondary mb-3">
                        <div className="card-header text-white bg-secondary">ABIERTO</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Mesa: 3</h5>
                            <h5 className="card-title">Comensal: 1</h5>
                            <button type="button" className="btn btn-secondary btn-sm">Pedido</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-secondary mb-3">
                        <div className="card-header text-white bg-secondary">ABIERTO</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Mesa: 3</h5>
                            <h5 className="card-title">Comensal: 1</h5>
                            <button type="button" className="btn btn-secondary btn-sm">Pedido</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-secondary mb-3">
                        <div className="card-header text-white bg-secondary">ABIERTO</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Mesa: 3</h5>
                            <h5 className="card-title">Comensal: 1</h5>
                            <button type="button" className="btn btn-secondary btn-sm">Pedido</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card border-secondary mb-3">
                        <div className="card-header text-white bg-secondary">ABIERTO</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Mesa: 3</h5>
                            <h5 className="card-title">Comensal: 1</h5>
                            <button type="button" className="btn btn-secondary btn-sm">Pedido</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default CardPanelPedidos;