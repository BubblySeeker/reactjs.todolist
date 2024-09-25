import React from 'react';

export default function TodoInput(props) {
  const { entry, setEntry, handleAddOrUpdate, isEditing } = props;

  return (
    <header>
      <input 
        value={entry} 
        onChange={(e) => setEntry(e.target.value)} 
        placeholder='Enter Todo...' 
      />
      <button onClick={handleAddOrUpdate}>
        {isEditing ? 'Update' : 'Add'} {}
      </button>
    </header>
  );
}