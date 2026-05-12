import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateTask } from '../features/taskSlice';

export const EditTask = ({ task }) => {

    const [isEditing, setIsEditing] = useState(false);

    const [title, setTitle] = useState(task.title);

    const [description, setDescription] = useState(
        task.description
    );

    const [status, setStatus] = useState(
        task.completed
    );

    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();

        const updatedTask = {
            ...task,
            title,
            description,
            completed: status,
        };

        dispatch(updateTask(updatedTask));

        setIsEditing(false);
    };

    return (
        <div>

            {isEditing ? (

                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50'>

                    <form
                        onSubmit={handleUpdate}
                        className='bg-white p-5 rounded-lg shadow-lg w-96 space-y-4'
                    >

                        <h2 className='text-2xl font-bold text-center'>
                            Edit Task
                        </h2>

                        {/* TITLE */}
                        <div>
                            <label className='block mb-1 font-medium'>
                                Title
                            </label>

                            <input
                                type="text"
                                className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
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
                                className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                                placeholder='Enter task description'
                                value={description}
                                onChange={(e) =>
                                    setDescription(
                                        e.target.value
                                    )
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
                                className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
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

                        {/* BUTTONS */}
                        <div className='flex gap-2'>

                            <button
                                type='submit'
                                className='flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md'
                            >
                                Update
                            </button>

                            <button
                                type='button'
                                className='flex-1 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md'
                                onClick={() =>
                                    setIsEditing(false)
                                }
                            >
                                Cancel
                            </button>

                        </div>

                    </form>

                </div>

            ) : (

                <button
                    className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md'
                    onClick={() => setIsEditing(true)}
                >
                    Edit
                </button>

            )}

        </div>
    );
};