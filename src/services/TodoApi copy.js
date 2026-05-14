// TodoApi.js with axios

import axios from "axios";

const BASE_URL =
  "http://localhost:8000/todos";

// FETCH TODOS
export const fetchTodosApi = async () => {

  const response = await axios.get(
    BASE_URL
  );

  return response.data;
};

// ADD TODO
export const addTodoApi = async (task) => {

  const response = await axios.post(
    BASE_URL,
    task
  );

  return response.data;
};

// UPDATE TODO
export const updateTodoApi = async (task) => {

  const response = await axios.put(
    `${BASE_URL}/${task.id}`,
    task
  );

  return response.data;
};

// DELETE TODO
export const deleteTodoApi = async (id) => {

  await axios.delete(
    `${BASE_URL}/${id}`
  );

  return id;
};