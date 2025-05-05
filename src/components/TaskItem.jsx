const TaskItem = ({ tarea, cambiarEstadoTarea, eliminarTarea }) => {
  return (
      <li>
          <span style={{ textDecoration: tarea.completa ? "line-through" : "none" }}>
              {tarea.nuevaTarea}
              </span>
              <button className="completar" onClick={() => cambiarEstadoTarea(tarea.id)}>
              {tarea.completa ? "Desmarcar" : "Completa"}
              </button>
              <button className="borrar" onClick={() => eliminarTarea(tarea.id)}>Borrar</button> 

          
      </li>
  );
};

export default TaskItem;