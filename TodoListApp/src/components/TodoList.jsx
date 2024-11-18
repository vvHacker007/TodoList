import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos, deleteTodo, updateTodo, setEditTodo} = props
  return (
    <div>
      <ul className='main'>
        {todos.map((todo, todoIndex) => {
          return (
            <TodoCard key={todoIndex} todoIndex={todoIndex} deleteTodo={deleteTodo} setEditTodo={setEditTodo}> 
              <p>{todo}</p>
            </TodoCard>
          )
        })}
      </ul>
    </div>
  )
}
