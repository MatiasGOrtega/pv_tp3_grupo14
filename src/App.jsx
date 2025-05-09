import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";


function App() {
  const [tareas, setTareas] = useState([]);
  const [ids,setids] = useState(0);

  const guardarTarea = (nuevaTarea) => {
      setids(ids + 1);
      setTareas([...tareas, { id: ids, nuevaTarea, completa: false }]);
  };


  // Cambiar estado de completado
  const cambiarEstadoTarea = (id) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, completa: !t.completa } : t));
  };

  
  // Eliminar tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
};


  return (
    <div className="contenedor-principal">
      <h1>Lista de Tareas</h1>
      <TaskList tareas={tareas} guardarTarea={guardarTarea} cambiarEstadoTarea={cambiarEstadoTarea} eliminarTarea={eliminarTarea}/>
      
    </div>
  );
}

export default App;
