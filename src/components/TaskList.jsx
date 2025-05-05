import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";

const TaskList = ({tareas,cambiarEstadoTarea,eliminarTarea,guardarTarea})=> {

  return (
    <div>
        <TaskInput guardarTarea={guardarTarea} />
        <ul>
            {tareas.map(t => (
                <TaskItem key={t.id} tarea={t} cambiarEstadoTarea={cambiarEstadoTarea} eliminarTarea={eliminarTarea} />
            ))}
        </ul>
    </div>
);
}

export default TaskList;

