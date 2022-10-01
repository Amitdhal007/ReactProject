import React from 'react'

const TodoItems = ({todo,onDelete}) => {
  return (
    <div>
      <div className='mx-[12rem] mb-2 p-3 border border-slate-200 shadow-sm rounded-sm'>
        
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className=" bg-red-500 py-1 px-2 rounded-md mt-2 hover:bg-orange-500 text-white" onClick={()=>{onDelete(todo)}}>Delete</button>
      </div>
    </div>
  )
}

export default TodoItems
