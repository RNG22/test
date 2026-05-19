// taskApi.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/",
    }),
    tagTypes: ["Tasks"],
    endpoints: (builder) => ({
        // GET TODOS
        getTasks: builder.query({
            query: () => "todos",
            providesTags: ["Tasks"],
        }),
        // ADD TASK
        addTask: builder.mutation({
            query: (newTask) => ({
                url: "todos",
                method: "POST",
                body: newTask,
            }),
            invalidatesTags: ["Tasks"],
        }),
        // UPDATE TASK
        updateTask: builder.mutation({
            query: (task) => ({
                url: `todos/${task.id}`,
                method: "PUT",
                body: task,
            }),
            invalidatesTags: ["Tasks"],
        }),
        // DELETE TASK
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Tasks"],
        }),
    }),
});

export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = taskApi;