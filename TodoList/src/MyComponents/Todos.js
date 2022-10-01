import React from 'react'
import TodoItems from './TodoItems'

const Todos = ({ todos, onDelete }) => {
  return (
    <div className='Container '>
      <h3 className='text-center my-3 font-semibold text-4xl'>My TodoLists</h3>
      
      {todos.length === 0 ? <div className='mx-auto my-2 p-5 text-center'>No todos to show</div> :
        todos.map((todo) => {
          return <TodoItems todo={todo} onDelete={onDelete} />
        })}

    </div>
  )
}

export default Todos
