import React from 'react';

import {
    useDeleteTaskMutation,
} from '../services/TaskApi';

export const DeleteTask = ({ taskId }) => {

    const [deleteTask] =
        useDeleteTaskMutation();

    const handleDelete = async () => {

        try {

            await deleteTask(taskId);

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <div>
        <button
            onClick={handleDelete}
            className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md'
        >
            Delete
        </button>
        </div>
    );
};