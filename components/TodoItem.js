import React from 'react';

function TodoItem(props) {
  return (
    <div className='TodoApp-item'>
      <label>
        <input type="checkbox" checked={props.item.completed} />
        <span>{props.item.text}</span>
      </label>
    </div>
  )
}

export default TodoItem;
