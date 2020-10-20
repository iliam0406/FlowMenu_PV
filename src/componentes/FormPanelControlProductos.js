import React from 'react';

const FormPanelControProductos = ({titulo}) => {
    return(
        <div container>
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <h5>{titulo}</h5>
                        <br/>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Producto"/>
                            </div>
                            <div className="form-group col-md-12">
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Precio"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="inputAddress" placeholder="Descuento"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Imagen"/>
                            <label for="inputState" className="pl-2">Pegar url de la Imagen</label>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <select id="inputState" className="form-control">
                                    <option selected>Categorías...</option>
                                    <option>Entrada</option>
                                    <option>Principal</option>
                                    <option>Postre</option>
                                    <option>Bebidas</option>
                                    <option>Extras</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" for="gridCheck">
                                Mostrar Valoraciones
                            </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger">SALVAR</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormPanelControProductos;