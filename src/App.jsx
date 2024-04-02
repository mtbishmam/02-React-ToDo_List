import React from 'react'
import "./App.css"

const App = () => {
  return (
    <>
    <form className="new-item-form">
        <div className="form-row">
          <label htmlFor='new-item'>New Item</label>
          <input type="text" id="new-item" />
        </div>
        <button className='btn'>Add</button>
    </form>
    <h1 className='header'>To-Do List</h1>
    <ul className='list'>
      <li>
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button className='btn btn-danger'>Delete</button>
      </li>
    </ul>
    </>
  )
}

export default App
