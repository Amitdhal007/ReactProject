import React from 'react'
import { useState } from 'react';

function TodoAdd({addTodo}) {

const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
  const submit = (e)=> {
      e.preventDefault();
      if(!title || !desc){
          alert("write title and desc to add a todo")
      }
      addTodo(title,desc);
  }

  return (
    <div className='mx-[12rem] my-5'>

      <h1 className='text-4xl font-medium mb-3'>Add a Todo</h1>

      <form onSubmit={submit}>
        <div className="mb-6">
          <label htmlFor="text" value={title} className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Todo Title</label>
          <input type="text" id="title" onChange={(e)=>{setTitle(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your todo title" required="" />
        </div>
        <div className="mb-6">
          <label htmlFor="desc" className="block mb-2 text-sm font-medium text-black dark:text-gray-300">Todo Description</label>
          <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-black dark:text-gray-300">Confirm to add</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </div>
  );
}

export default TodoAdd; 