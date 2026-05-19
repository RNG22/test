// TaskList.jsx

import React from "react";

import {
    useGetTasksQuery
} from "../services/TaskApi";

import { EditTask } from "./EditTask";
import { DeleteTask } from "./DeleteTask";

export const TaskList = () => {
    const {data: tasks = [],isLoading,isError,error} = useGetTasksQuery();


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="space-y-4">

            {tasks.map((task) => (

                <div
                    key={task.id}
                    className="border p-4 rounded flex justify-between"
                >

                    <div>
                        <h2 className="font-bold">
                            {task.title}
                        </h2>

                        <p>
                            {task.description}
                        </p>

                        <p>
                            {task.completed}
                        </p>
                    </div>

                    <div className="flex gap-2">

                        <EditTask task={task} />
<DeleteTask taskId={task.id} />
                        {/* <button
                            onClick={() =>
                                deleteTask(task.id)
                            }
                            className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                            Delete
                        </button> */}

                    </div>

                </div>
            ))}
        </div>
    );
};