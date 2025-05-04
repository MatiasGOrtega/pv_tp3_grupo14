import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Crear repositorio en github", completed: false },
    { id: 2, text: "Agregar colaboradores", completed: false },
    { id: 3, text: "Iniciar el proyecto", completed: false },
  ]);
  // TAREA GRUPAL: Implementar estas funciones
  
  // Añadir nueva tarea
  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  // Cambiar estado de completado
  const toggleTask = (id) => {};

  // Eliminar tarea
  const deleteTask = (id) => {};

  return (
    <div className="app">
      <Header />
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
