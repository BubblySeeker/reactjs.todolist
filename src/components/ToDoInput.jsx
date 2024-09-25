import React from 'react';
import { useState } from 'react';



export default function TodoInput(props) {
    const {addTodos, entry, setEntry} = props
  return (
    <header>
        <input value={entry} onChange={(e) => {
        setEntry(e.target.value)
        }}placeholder='Enter Todo...' />
    <button onClick={() => {
        addTodos(entry)
        setEntry('')
    }}>Add</button>
    </header>
  );
}