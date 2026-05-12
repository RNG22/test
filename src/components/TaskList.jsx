import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from "../features/taskSlice";
import { EditTask } from './EditTask';
import { DeleteTask } from './DeleteTask';

export const TaskList = () => {
    const tasks=useSelector((state)=>state.tasks.tasks);
    const loading=useSelector((state)=>state.tasks.loading);
    const error=useSelector((state)=>state.tasks.error);
    const dispatch=useDispatch();
useEffect(()=>{
    dispatch(fetchTodo());
},[dispatch])

    if(loading){
        return <div>Tasks Loading...</div>
    }
    if(error){
        return <div>Error: {error}</div>
    }

  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Task List</h2>
        <ul className='space-y-4'>{tasks.map((task)=>(
            <li className='bg-gray-50 p-4 rounded-md shadow-sm flex justify-between' key={task.id}>
                <div
                ><p>{task.title}</p>
                {task.description && <p>{task.description}</p>}
                <p>Status: {task.completed}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <EditTask task={task} />

                    <DeleteTask id={task.id} />
                    {/* <button className='bg-blue-500 text-white px-4 py-2 rounded mt-2'>Edit</button> */}
                    {/* <button className='bg-red-500 text-white px-3 py-1 rounded-md mt-2'>Delete</button> */}
                </div>
            </li>
        ))}</ul>
    </div>
  )
}
