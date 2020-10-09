import React from 'react'
import Titulo from './Titulo'
const FormTasks = () => {
    return (
        <>
        <Titulo />
        <div className='container'>
            <div className='row'>
            <div className="col-auto">
            <ul className="list-group">
                <li className="list-group-item shadow-sm p-3 mb-3">
                <span className="lead">Ir a comprar sin hambre</span>
                <button 
                    className="btn btn-sm btn-danger float-right mx-2"
                >Eliminar</button>
                <button 
                    className="btn btn-sm btn-warning float-right"
                >Editar</button>
                </li>
            </ul>
            <ul className="list-group mt-2">
                <li className="list-group-item shadow-sm p-3 mb-3">
                <span className="lead">Llamar a la ginecologa</span>
                <button 
                    className="btn btn-sm btn-danger float-right mx-2"
                >Eliminar</button>
                <button 
                    className="btn btn-sm btn-warning float-right"
                >Editar</button>
                </li>
            </ul>
            </div>
            </div>
        </div>
        </>
    )
}

export default FormTasks
