
import React, { useState } from 'react'

const Home = () => {
  const [Input , setInput] = useState("")
  const [Todos , setTodos] = useState([])
  const addTodo=()=>{
    if(!Input.trim()) return; // prevent empty todo 

    setTodos([...Todos,Input]); //add todo list
    setInput(""); //clear 

    let todoSection;
    if(Todos.length === 0){
      todoSection=(
        <p className='text-gray-400 text-center py-8'>No Todo yet</p>
      );
    }else{
      todoSection = Todos.map((value , index)=>{
        <div key={index} className='p-2 bg-gray-50 rounded border text-gray-700'>
          {value}
        </div>
      })
    }
  }
  return (
    <>
    <div className='min-h-screen bg-gray-100 p-8'>
      {/* Container */}
      <div className='max-w-xl mx-auto bg-white rounded-lg shadow p-6'>
        <h1 className="text-4xl font-bold mb-4">Simple Todo</h1>

        {/* Add Todo */}
        <div className='flex gap-2 mb-4'>
          <input type="text" placeholder="Add a todo..." value={Input} onChange={(e)=>setInput(e.target.value)} className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500" />
          <button onClick={addTodo} className='bg-blue-500 text-white rounded hover:bg-blue-700 px-3 py-2'>Add</button>
        </div>

        {/* Todo List */}
        <div className='space-y-2'>
         {todoSection}
          
          <p className='text-gray-400 text-center py-8'>No todos yet</p>

          {/* List of todos */}
          <div className='flex items-center gap-2 p-2 bg-gray-50 rounded'>
            {/* Single Todo Item */}
            <div>
              {/* Edit Mode */}
              <input type="text" className='flex-1 px-2 py-1 border rounded-2xl'/>
              <button className="p-2 text-green-600 hover:bg-green-50 rounded">Save</button>
              <button className="p-2 text-red-600 hover:bg-red-50 rounded">Cancel</button>

              {/* View Mode */}
              <span className='flex-1'>Todo text</span>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">Edit</button>
              <button className='p-2 text-red-600 hover:bg-blue-50 rounded '>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home