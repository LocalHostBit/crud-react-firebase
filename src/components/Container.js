import React, {useEffect, useState} from 'react'
import Form from './Form'
import { db } from '../firebase'
import { toast } from 'react-toastify'


const Container = () => {

    const [links, setLinks] = useState([]);

    const [currentId, setCurrentId] = useState('');

    const addOrEditLink = async (linkObject) => {
        try {
            if(currentId === '') {
                await db.collection('links').doc().set(linkObject)
                toast(' Tarea añadida! 🥰', {
                type: 'success',
                autoClose: 3000
            });
            } else {
                await db.collection('links').doc(currentId).update(linkObject);
                toast(' Tarea Modificada! 🧠', {
                    type: 'info',
                    autoClose: 3000
                });
                setCurrentId('');
            }
        } catch (error) {
            console.log(error)
        }
    };
    const deleteTask = async (idd) => {
        if(
            window.confirm('¿Estás seguro que quieres eliminar esta tarea? Deberías acabarla antes de eliminarla...')
        )  {
           await db.collection('links').doc(idd).delete();
           toast(' Tarea eliminada 😱', {
            type: 'warning',
            autoClose: 2000
        })
        }
    };

    const getTareas = async () => {
        db.collection('links').onSnapshot(
           (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach(doc => {
                docs.push({...doc.data(), idd:doc.id});
            });
            setLinks(docs);
       });
    }

    useEffect(() => {
        getTareas();
    },[]);

    return (
        <>
        <div className='container'>
            <div className='row-1 shadow-lg p-2 mb-3'>
                <Form {...{addOrEditLink, currentId, links}}/>
                <div className='col-md'>
                    {links.map(link => {
                        return <div className='card' key={link.id}>
                                    <div className='row'>
                                    <div className="col-auto">
                                    <ul className="list-group">
                                    <li className="list-group-item shadow-sm p-3 mb-2">
                                        <tr className="lead float-left">
                                            <td>
                                            <span className="badge badge-dark m-2">{link.id}</span> - {link.name}
                                            </td>
                                        </tr>
                                    <div className='d-flex justify-content-between float-right'>
                                        <button
                                            className="btn btn-sm btn-warning"
                                            onClick={() => setCurrentId(link.idd)}
                                            type='submit'
                                            >Editar
                                        </button>
                                        <button className="btn btn-sm btn-danger mx-2" onClick={() => deleteTask(link.idd)}
                                            >Eliminar
                                        </button> 
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    })}
            </div>
            </div>
        </div> 
        </>
    )
}

export default Container
