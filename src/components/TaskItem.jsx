const TaskItem = ({ tarea, cambiarEstadoTarea, eliminarTarea }) => {
  return (
      <li>
          <p style={{ textDecoration: tarea.completa ? "line-through" : "none" }}>
              {tarea.nuevaTarea}
              <button className="completar" onClick={() => cambiarEstadoTarea(tarea.id)}>
              {tarea.completa ? "Desmarcar" : "Completa"}
              </button>

          </p>
             <button className="borrar" onClick={() => eliminarTarea(tarea.id)}>Borrar</button> 
      </li>
  );
};

export default TaskItem;