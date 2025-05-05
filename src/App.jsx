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
    <div className="app">
      <Header />
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
