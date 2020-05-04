import './normalize.css';
import './style.css';

import React from 'react';

import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className='TodoApp'>
      <form class='TodoApp-container'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </form>
    </div>
  )
}

export default App;
