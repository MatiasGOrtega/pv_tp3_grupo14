import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/TaskInput";

function App() {
  const [tareas, setTareas] = useState([]);

  const guardarTarea = (nuevaTarea) => {
      setTareas([...tareas, { id: Date.now(), nuevaTarea, completa: false }]);
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
