import React from "react";

function TaskItem({ task, onToggle, onDelete }) {
  // TAREA: Mostrar cada tarea con:
  // - El texto de la tarea (task.text)
  // - Un botón para eliminar (onDelete)
  // - La capacidad de marcar como completada (onToggle)
  // - Mostrar "Realizada" o "Pendiente" según task.completed

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {/* Texto de la tarea (hacer clickable para toggle) */}
      {/* agregarle la clase task-text para aplicar estilos*/}


      <div className="task-controls">
        {/* Mostrar el estado de la tarea */}
        {/* agregarle la clase task-status para aplicar estilos*/}


        {/* Añadir botón para eliminar */}
        {/* agregarle la clase delete-btn para aplicar estilos*/}

      </div>
    </li>
  );
}

export default TaskItem;
