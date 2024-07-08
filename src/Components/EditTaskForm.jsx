import { useState } from 'react'
import React from 'react'

const EditTaskForm = ({editTaskForm, task}) => {
    const [userValue, setUserValue] = useState(task.task)

    const handleBtn = e => {
      e.preventDefault()

      editTaskForm(userValue, task.id);

      setUserValue("")
    }
  return (
    <form className='Todo' onSubmit={handleBtn}>
        <input type="text" className='todo-input' value={userValue}
         placeholder='Update Task' onChange={(e) => setUserValue(e.target.value)}/>
         <button type="submit" className='todo-btn'>Update Task</button>

    </form>
  )
}

export default EditTaskForm