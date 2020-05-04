import React from 'react';

import TodoItem from './components/TodoItem';

import todosData from './todosData';

import './normalize.css';
import './style.css';

function App() {
  const todoList = todosData.map(item => <TodoItem key={item.id} item={item} />)

  return (
    <div className='TodoApp'>
      <form class='TodoApp-container'>
        {todoList}
      </form>
    </div>
  )
}

export default App;
