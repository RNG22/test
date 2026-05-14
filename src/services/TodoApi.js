//with fetch api
const BASE_URL = "http://localhost:8000/todos";

// FETCH TODOS
export const fetchTodosApi = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

// ADD TODO
export const addTodoApi = async (task) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return response.json();
};

// UPDATE TODO
export const updateTodoApi = async (task) => {
  const response = await fetch(`${BASE_URL}/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return response.json();
};

// DELETE TODO
export const deleteTodoApi = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  return id;
};