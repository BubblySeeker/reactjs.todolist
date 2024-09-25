// App.jsx
import React, { useState, useEffect } from 'react';
import TodoInput from './components/ToDoInput';
import TodoList from './components/TodoList';


function App() {


  const [todos, setTodos] = useState([])

  const [entry, setEntry] = useState('')

  const [editIndex, setEditIndex] = useState(null);

  function persist(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos:
    newList}))
  }
  function addTodos(newTodo) {
    const newTodoList = [newTodo, ...todos]
    persist(newTodoList)
    setTodos(newTodoList)
  }

  function addTodoAtIndex(newTodo, index) {
    const newTodoList = [
      ...todos.slice(0, index), 
      newTodo, 
      ...todos.slice(index)
    ];
    persist(newTodoList);
    setTodos(newTodoList);
  }

  function deleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index

    })
    persist(newTodoList)

    setTodos(newTodoList)
  }

  function editTodo(index) {
    const editVal = todos[index]
    setEntry(editVal)
    setEditIndex(index);
    deleteTodo(index)

  }


  function handleAddOrUpdate() {
    if (editIndex !== null) { 
      addTodoAtIndex(entry, editIndex); 
      setEditIndex(null); 
    } else {
      addTodos(entry); 
    }
    setEntry(''); 
  }

  useEffect(() => {
    if (!localStorage) {
      return 
    }

    let localTodos = localStorage.getItem("todos")
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)
  }, [])
  

  return (
  
      <><TodoInput entry={entry} setEntry={setEntry}addTodos = {addTodos} handleAddOrUpdate={handleAddOrUpdate}
      isEditing={editIndex !== null}/>
      <TodoList editTodo = {editTodo} deleteTodo={deleteTodo} todos={todos}/></>


    
  );
}

export default App;