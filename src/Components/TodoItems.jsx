   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
   import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare"
   import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash"
   
   const TodoItems = ({task, toggleComplete, deleteTodo, editTaskForm}) => {
     return (
       <div className='Todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>

        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTaskForm(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
        </div>
       </div>

     )
   }
   
   export default TodoItems