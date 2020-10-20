import React from 'react';

const FormPanelControlUser = ({titulo}) => {
    return(
        <div container>
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <h5>{titulo}</h5>
                        <br/>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Nombre"/>
                            </div>
                            <div className="form-group col-md-12">
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Contraseña"/>
                            <label for="inputState" className="pl-2">Solo números, 4 dígitos</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                            <select id="inputState" className="form-control">
                                <option selected>Roles...</option>
                                <option>Garzón</option>
                                <option>Cajero</option>
                                <option>Admin</option>
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

export default FormPanelControlUser;