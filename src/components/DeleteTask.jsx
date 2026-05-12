import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteTask } from '../features/taskSlice';

export const DeleteTask = ({ id }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(id));
    };

    return (
        <button
            onClick={handleDelete}
            className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md'
        >
            Delete
        </button>
    );
};