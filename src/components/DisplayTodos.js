import React from 'react'

function DisplayTodos({ todo, setTodo }) {
    const deleteHandler = (index)=>{
        let newTodo = [...todo]
        newTodo.splice(index,1)
        setTodo([...newTodo])
    }

    const listItems = todo.map((item, index) => (
        
            <div className="items">
                <li key={index} >{item.title}</li>
                <li className="delete fa-solid fa-trash" onClick={e=>deleteHandler(index)} />
            </div>
        
    ))
    return (
        <div className=' m-4'>
            {todo.length>0 ? <h3 className='text-center'>Todo List</h3> : <h3 className='text-center'>No Tasks</h3> }
            
            <ul className='list-group'>
                {listItems}
            </ul>
        </div>
    )
}

export default DisplayTodos
