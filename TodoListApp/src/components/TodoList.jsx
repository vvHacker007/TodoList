import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos, deleteTodo, changeTodoStatus, setEditTodo} = props
  return (
    <div>
      <ul className='main'>
        {todos.map((todo, todoIndex) => {
          return (
            <TodoCard key={todoIndex} todoIndex={todoIndex} deleteTodo={deleteTodo} setEditTodo={setEditTodo} changeTodoStatus={changeTodoStatus}> 
              <p>{todo}</p>
            </TodoCard>
          )
        })}
      </ul>
    </div>
  )
}
