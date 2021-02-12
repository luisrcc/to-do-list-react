import React, { useState } from 'react';
import TareaForm from './components/TareaForm';
import Tarea from './components/Tarea';
import './App.css';





function App() {
    const [listaTareas, setListaTareas] = useState([]);

    const nuevaTarea = (tarea) => {
        setListaTareas([tarea, ...listaTareas])
    }

    const borrar = (id) => {
        const listaFiltra = listaTareas.filter((e, index) => index !== id);
        setListaTareas(listaFiltra);

    }

    return (
        <div className="container">
            <h2>To Do List</h2>
            <div className="row justify-content-center">
                <div className="col-8">
                    <ul className="list-group" onmouseenter="myEnterFunction()">
                        <TareaForm
                            nuevaTarea={nuevaTarea}
                        />
                        <div className="lista">
                            {
                                listaTareas.map((e, index) =>
                                    <Tarea
                                        tarea={e}
                                        borrar={borrar}
                                        id={index}
                                        
                                    />

                                )                              
                                
                            }
                            <li className="list-group-item">
                                {listaTareas.length}{listaTareas.length < 9? ' item': ' items'}
                                <i className="far fa-calendar-times"></i>
                            </li>                               

                         </div>
                    </ul>
                </div>
            </div>
        </div>
    
    );

}

export default App;
