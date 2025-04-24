import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete }) {
  // TAREA: Mostrar la lista de tareas usando el componente TaskItem
  // Pista: Usar el método map para recorrer el array tasks
  // Cada TaskItem necesita: key, task, onToggle y onDelete
  return (
    <ul className="task-list">
      {/* Aquí va el código para mostrar las tareas */}
    </ul>
  );
}

export default TaskList;
