import React from "react";
import React, { useState } from "react";

function TaskForm({ onAdd }) {
  const [text, setText] = useState("");
  // TAREA: Implementar el formulario para añadir tareas
  // 1. Manejar el estado del input (text)
  // 2. Manejar el envío del formulario
  // 3. Llamar a onAdd con el texto de la nueva tarea
  // 4. Limpiar el input después de añadir

  const handleSubmit = (e) => {};

  return (
    <form onSubmit={handleSubmit} className="add-task">
    
    </form>
  );
}

export default TaskForm;
