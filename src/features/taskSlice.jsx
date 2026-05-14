//taskslice with api integration
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchTodosApi,
  addTodoApi,
  updateTodoApi,
  deleteTodoApi,
} from "../services/TodoApi";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  status: "All",
};

// FETCH TASKS
export const fetchTodo = createAsyncThunk(
  "tasks/fetchTodo",
  async () => {
    const data = await fetchTodosApi();

    return data.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description,
      completed: task.completed,
    }));
  }
);

// ADD TASK
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task) => {
    return await addTodoApi(task);
  }
);

// UPDATE TASK
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task) => {
    return await updateTodoApi(task);
  }
);

// DELETE TASK
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id) => {
    return await deleteTodoApi(id);
  }
);

export const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      // FETCH
      .addCase(fetchTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })

      .addCase(fetchTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ADD
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })

      // UPDATE
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );

        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(
          (task) => task.id !== action.payload
        );
      });
  },
});

export const { setStatus } = taskSlice.actions;

export default taskSlice.reducer;