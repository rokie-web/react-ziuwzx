import React from 'react';

function TodoItem() {
  return (
    <div className='TodoApp-item'>
      <label>
        <input type="checkbox" />
        <span>Some Todo Item</span>
      </label>
    </div>
  )
}

export default TodoItem;
