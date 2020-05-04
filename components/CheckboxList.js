import React from 'react';

function CheckboxList() {
  return (
    <form>
      <label>
        <input type="checkbox" />
        <span>Buy milk</span>
      </label>
      <br />
      <label>
        <input type="checkbox" />
        <span>Wash car</span>
      </label>
      <br />
      <label>
        <input type="checkbox" />
        <span>Learn React</span>
      </label>
    </form>
  )
}

export default CheckboxList;
