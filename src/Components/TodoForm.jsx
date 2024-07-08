import { useState } from 'react'
import React from 'react'

const TodoForm = ({addTodo}) => {
    const [userValue, setUserValue] = useState('')

    const handleBtn = e => {
      e.preventDefault()

      addTodo(userValue);

      setUserValue("")
    }
  return (
    <form className='Todo' onSubmit={handleBtn}>
        <input type="text" className='todo-input' value={userValue}
         placeholder='What is the task for today?' onChange={(e) => setUserValue(e.target.value)}/>
         <button type="submit" className='todo-btn'>Add Task</button>

    </form>
  )
}

export default TodoForm