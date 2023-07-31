import React from 'react'

function AddItem({userInput, setUserInput, todo, setTodo}) {
  const submitHandler = (e)=>{
    e.preventDefault()
    setTodo([...todo, {title: userInput, isCompleted: false}])
    setUserInput("")
  }
  const changeHandler = (e)=>{
    setUserInput(e.target.value)
  }
  return (
    <div className='d-flex justify-content-center ms-4 px-3 rounded'>
      <form onSubmit={submitHandler} className='p-2'>
        <input type='text' value={userInput} onChange={changeHandler} required placeholder='Add a new task'/>
        <button type='submit' className='button'>Add</button>
      </form>
    </div>
  )
}

export default AddItem
