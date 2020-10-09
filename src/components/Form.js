import React, {useState, useEffect} from 'react'
import Titulo from './Titulo'
import { db } from '../firebase';

const Form = (props) => {
/* 3. Guardar en una constante los datos y pasarlo como parametro useState */
    const initialStateValues = {
        id: '',
        name: '',
    };
/* 4. Crear funcion para capturar lo que escribimos y pasarselo al input */
    const handleInputChange = e => {
        const {name, value} = e.target;
        setTareas({...tareas, [name]: value})
    };
/* 2. Crear el useState*/

    const [tareas, setTareas] = useState(initialStateValues);
/* 1. Crear handleSubmit y ponerlo en el Form */
    const handleSubmit = e => {
        e.preventDefault();
        /* 5. Desde containerjs viene esta funcion */
        props.addOrEditLink(tareas);
        setTareas({...initialStateValues});
    }
    const getTaskById = async (idd) => {
        const doc = await db.collection('links').doc(idd).get();
        setTareas({...doc.data() });
    };

    useEffect(() => {
        if(props.currentId === '') {
            setTareas({...initialStateValues});
        } else {
            getTaskById(props.currentId);
        }
    },[props.currentId]);
    return (
        <>
        <form className='container container-form' onSubmit={handleSubmit}>
            <div className='row p-4'>
            <div className='form-inline'>
                    <form className='form-inline mx-sm-3 mb-2'>
                        <label className='sr-only'>Añadir Tarea</label>
                        <input 
                            onChange={handleInputChange}
                            value={tareas.name}
                            type='text'
                            className='form-control'
                            name='name'
                            placeholder="Añadir Tarea">
                        </input>
                    </form>
                </div>
                <div className="form-inline mx-sm-3 mb-2">
                        <label className="sr-only">Prioridad</label>
                        <input 
                            onChange={handleInputChange}
                            value={tareas.id}
                            type='text'
                            className='form-control'
                            name='id'
                            placeholder="Prioridad">
                        </input>
                </div>
                <button type="submit" 
                        className="btn btn-success mb-2 ">{props.currentId === ''? 'Añadir' : 'Actualizar'}</button>
            </div>
        </form>
        <Titulo />
        </>
    )
}

export default Form
