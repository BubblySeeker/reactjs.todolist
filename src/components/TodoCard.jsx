import React from 'react'

export default function TodoCard(props) {
    const {children, deleteTodo, index, editTodo} = props
  return (
    <li className='todoItem' >
                    {children}
        <div className='actionsContainer'>
            <button onClick={() => {
                editTodo(index)
            }}>

            <i class="fa-solid fa-pen-to-square"></i>

            </button>
            <button onClick={() => {
                deleteTodo(index)
            }}>
            <i class="fa-solid fa-trash"></i>
                </button>

            </div>
            </li>
  )
}