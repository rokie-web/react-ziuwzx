import React, {Component} from 'react';

import TodoItem from './components/TodoItem';

import todosData from './todosData';

import './normalize.css';
import './style.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: todosData
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })

      return {
        todos: updatedTodos
      }
    });
  }

  render() {
    const todoList = this.state.todos.map(item => {
      return <TodoItem 
        key={item.id} 
        item={item}
        handleChange={this.handleChange}
      />
    })

    return (
      <div className='TodoApp'>
        <form class='TodoApp-container'>
          {todoList}
        </form>
      </div>
    )
  }
}

export default App;
