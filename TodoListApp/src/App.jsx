import React, { useState, useEffect } from 'react'
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { getTasks, getTask, addTask, deleteTask, updateTask, updateTodoStatus } from "./Tasks"

function App() {
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    setTodos(getTasks())
  }, []) 

  function addTodo(todo) {
    addTask(todo)
    setTodos(getTasks())
  }

  function updateTodo(editTodo, todo) {
    setEditTodo(null)
    updateTask(editTodo, todo)
    setTodos(getTasks())
  };

  function cancelUpdateTodo() {
    setEditTodo(null)
    setTodos(getTasks())
  }

  function deleteTodo(todoIndex) {
    deleteTask(todoIndex)
    setTodos(getTasks())
  };

  function changeTodoStatus(todoIndex) {
    updateTodoStatus(todoIndex)
    setTodos(getTasks())
  };


  function getTaskAt(index) {
    console.log('Task At INdex',index," is ", getTask(index));
    return getTask(index);
  }

  return (
    <>
      {editTodo !== null ? (
        <TodoInput 
          editTodo={editTodo}
          saveEdit={updateTodo}
          cancelEdit={cancelUpdateTodo}
          getTaskAt={getTaskAt}
        />
      ) : (
        <TodoInput 
          addTodo={addTodo}   
          editTodo={editTodo}
          saveEdit={updateTodo}
          cancelEdit={cancelUpdateTodo}
          getTaskAt={getTaskAt}
        />
      )}
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo}
        setEditTodo={setEditTodo} 
        cancelUpdateTodo={cancelUpdateTodo}
        changeTodoStatus={changeTodoStatus}
      />
    </>
  )
}

export default App
