import React, { useContext } from 'react';
import { Context } from './store/appContext';
import Onlynumbers from './only_numbers';
import Table from './table';

const Agregar = () => {

    const { store, actions } = useContext(Context);

    let newViaje = {}
    
    const handleChange = (event) => {
        newViaje[event.target.name] = event.target.value;
        console.log(event.target.value)
    }
    
    const handleSubmit = (event) => {
        actions.addViaje(newViaje);
        event.preventDefault();
    }
    
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                Formulario
                        </div>
                            <div className="container mt-5">
                                <div className="row">
                                    <div className="col-md-12">

                                        <form onSubmit={(e) => handleSubmit(e)}>

                                            <div className="form-row">
                                                <div className="col-md-6 mb-3">
                                                    <label>Operador</label>
                                                    <input className="form-control" name='Operador' id='validationDefault03' required onChange={(e) => handleChange(e)} />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label>Fecha</label>
                                                    <input type="text" className="form-control" id='validationDefault02' name='Fecha' required onChange={(e) => handleChange(e)} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6 mb-3">
                                                    <label>Grupo</label>
                                                    <input type="text" className="form-control" id='validationDefault01' name='Grupo' required onChange={(e) => handleChange(e)} />
                                                </div>
                                                
                                                <div className="col-md-6 mb-3">
                                                    <label>Kilometraje</label>
                                                    <Onlynumbers />
                                                </div>
                                            </div>
                                            {/* <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                    <Table />
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="card-footer text-right">
                                                <button className="btn btn-secondary mr-1">Cancelar</button>
                                                <input className="btn btn-primary" type="submit" value="Guardar" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Agregar;