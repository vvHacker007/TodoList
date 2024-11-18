import React, { useState, useEffect } from 'react'

export default function TodoInput(props) {
  const { addTodo, editTodo, saveEdit, cancelEdit, getTaskAt } = props;

  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    if (editTodo !== null) {
      setTaskName(getTaskAt(editTodo));
    }
  }, [editTodo, getTaskAt]);

  const handleInputTaskChange = (event) => {
    console.log("EVENET RECIVED", event.target);
    setTaskName(event.target.value);
  };

  const resetTaskName = () => {
    setTaskName('');
  }

  const handleAddTask = (event) => {
    event.preventDefault();
    console.log("ADD TASK EVENT RECIVED", event.target);
    addTodo(taskName);
    resetTaskName();
  };

  const handleUpdateTask = (event) => {
    event.preventDefault();
    console.log("update TASK EVENT RECIVED", taskName, editTodo);
    saveEdit(editTodo, taskName);
    resetTaskName();
  };

  const handleCancelTask = (event) => {
    event.preventDefault();
    console.log("Cancel TASK EVENT RECIVED", taskName, editTodo);
    cancelEdit();
    resetTaskName();
  };


  return editTodo !== null ? (
    <>
      <header>
        <input placeholder='Update Task' type='text' onChange={handleInputTaskChange} value={taskName} />
        <button onClick={handleUpdateTask}>
          <i class="fa-solid fa-floppy-disk"></i>
        </button>
        <button onClick={handleCancelTask}>
          <i class="fa-solid fa-ban"></i>
        </button>
      </header>
    </>
  ) : (
    <>
      <header>
        <input placeholder='Enter Task' type='text' onChange={handleInputTaskChange} value={taskName} />
        <button onClick={handleAddTask}>Add</button>
      </header>
    </>
  )
}
