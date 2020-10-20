import React from 'react';

const FormPanelControGrupos = ({titulo}) => {
    return(
        <div container>
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <h5>{titulo}</h5>
                        <br/>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Logo"/>
                            <label for="inputState" className="pl-2">Pegar la url del logo</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                            <select id="inputState" className="form-control">
                                <option selected>Color...</option>
                                <option>Rojo</option>
                                <option>Naranja</option>
                                <option>Azul</option>
                                <option>Negro</option>
                            </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger">SALVAR</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormPanelControGrupos;