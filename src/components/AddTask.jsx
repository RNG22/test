import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../features/taskSlice';

export const AddTask = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To do');

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            title,
            description,
            completed: status
        };

        dispatch(addTask(newTask));

        setTitle('');
        setDescription('');
        setStatus('To do');
    };

    return (
        <div >

            <form
                className='space-y-4'
                onSubmit={handleSubmit}
            >

                <h2 className='text-2xl font-bold text-center'>
                    Add New Task
                </h2>

                {/* TITLE */}
                <div>
                    <label className='block mb-1 font-medium'>
                        Title
                    </label>

                    <input
                        type="text"
                        className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400'
                        placeholder='Enter task title'
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        required
                    />
                </div>

                {/* DESCRIPTION */}
                <div>
                    <label className='block mb-1 font-medium'>
                        Description
                    </label>

                    <textarea
                        className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400'
                        placeholder='Enter task description'
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        required
                    />
                </div>

                {/* STATUS */}
                <div>
                    <label className='block mb-1 font-medium'>
                        Status
                    </label>

                    <select
                        className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400'
                        value={status}
                        onChange={(e) =>
                            setStatus(e.target.value)
                        }
                    >
                        <option value="To do">
                            To Do
                        </option>

                        <option value="In Progress">
                            In Progress
                        </option>

                        <option value="Completed">
                            Completed
                        </option>
                    </select>
                </div>

                {/* BUTTON */}
                <button
                    type='submit'
                    className='w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition'
                >
                    Add Task
                </button>

            </form>
        </div>
    );
};