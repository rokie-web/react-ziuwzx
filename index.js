import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo() {
  return (
    <section>
        <h1>Rob</h1>
        <p>Currently learning some react</p>
        
        <ul>
          <li>Italy</li>
          <li>Amsterdam</li>
          <li>Hamburg</li>
        </ul>
    </section>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById('root'))
