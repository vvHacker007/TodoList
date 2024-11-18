import React from 'react'

export default function TodoCard(props) {
  const { children, todoIndex, deleteTodo, setEditTodo } = props

  function handleDeleteTask() {
    console.log("Delete Task at index", children);
    deleteTodo(todoIndex)
  }
  
  function handleUpdateTask() {
    console.log("Edit Task at index", children);
    setEditTodo(todoIndex);
  }

  return ( 
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <input type="checkbox" defaultChecked={false} />
        <button className='editButton'  onClick={handleUpdateTask}>
          <i class="fa-regular fa-pen-to-square"></i>
        </button>
        <button className='deleteButton' onClick={handleDeleteTask}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  )
}
