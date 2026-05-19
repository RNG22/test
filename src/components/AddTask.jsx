// AddTask.jsx

import React, { useState } from "react";

import {
    useAddTaskMutation,
} from "../services/TaskApi";

export const AddTask = () => {

    const [title, setTitle] = useState("");

    const [description, setDescription] =
        useState("");

    const [status, setStatus] =
        useState("To do");

    const [addTask] =
        useAddTaskMutation();

    const handleSubmit = async (e) => {

        e.preventDefault();

        await addTask({
            title,
            description,
            completed: status,
        });

        setTitle("");
        setDescription("");
        setStatus("To do");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4"
        >

            <input
                type="text"
                placeholder="Title"
                className="border p-2 w-full"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
            />

            <textarea
                placeholder="Description"
                className="border p-2 w-full"
                value={description}
                onChange={(e) =>
                    setDescription(
                        e.target.value
                    )
                }
            />

            <select
                className="border p-2 w-full"
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

            <button className="bg-green-500 text-white px-4 py-2 rounded">
                Add Task
            </button>

        </form>
    );
};