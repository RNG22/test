import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState={
    tasks:[],
    loading:false,
    error:null,
    status:"All"
}

// FETCH TASKS
export const fetchTodo=createAsyncThunk('tasks/fetchTodo',async ()=>{
const response=await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
const data=await response.json();
return data.map((task)=>({
    id:task.id,
    title:task.title,
    description:'',
    completed:task.completed ? 'completed' : 'To do'
}));
})

// ADD TASK
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );

    const data = await response.json();

    return {
      ...data,
      description: task.description,
    };
  }
);

// UPDATE TASK
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${task.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );

    const data = await response.json();

    return {
      ...data,
      description: task.description,
    };
  }
);

// DELETE TASK
export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id) => {
    await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "DELETE",
      }
    );

    return id;
  }
);
//reducers are pure functions that take the current state and an action as arguments and 
// return a new state. They are used to specify how the application's state changes in 
// response to actions sent to the store. Reducers must be pure functions, meaning they should 
// not modify the existing state but instead return a new state object.
export const taskSlice=createSlice({
    name:'tasks',
    initialState,
    reducers:{
// addTask:(state,action)=>{
//     state.tasks.push(action.payload);
// },
// updateTask:(state,action)=>{
//     const {id,title,description,completed}=action.payload;
//     const existingTask=state.tasks.find((task)=>task.id===id);
//     if(existingTask){
//         existingTask.title=title;
//         existingTask.description=description;
//         existingTask.completed=completed;
//     }
// },
// deleteTask:(state,action)=>{
//     const id=action.payload;
//     state.tasks=state.tasks.filter((task)=>task.id!==id);
// },
setStatus:(state,action)=>{
    state.status=action.payload;
}
    },
    extraReducers:(builder)=>{
        builder

      // FETCH
        .addCase(fetchTodo.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchTodo.fulfilled,(state,action)=>{
            state.loading=false;
            state.tasks=action.payload;
        })
        .addCase(fetchTodo.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
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
    }
});
export const {setStatus}=taskSlice.actions;
export default taskSlice.reducer;