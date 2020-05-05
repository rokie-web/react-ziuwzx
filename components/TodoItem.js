import React, {Component} from 'react';

class TodoItem extends Component {
  render() {
  return (
      <div className='TodoApp-item'>
        <label>
          <input 
            type="checkbox" 
            checked={this.props.item.completed} 
            onChange={() => this.props.handleChange(this.props.item.id)} 
          />

          <span 
            className={this.props.item.completed && 'TodoApp-item--disabled'}>
              {this.props.item.text}
          </span>
        </label>
      </div>
    )
  }
}

export default TodoItem;
