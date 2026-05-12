const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let todos = [
//   {
//     id: 1,
//     title: "Learn RTK",
//     description: "Practice CRUD",
//     completed: "To do",
//   },
];

// GET
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST
app.post("/todos", (req, res) => {

  const newTodo = {
    id: Date.now(),
    ...req.body,
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// PUT
app.put("/todos/:id", (req, res) => {

  const id = Number(req.params.id);

  todos = todos.map((todo) =>
    todo.id === id
      ? { ...todo, ...req.body }
      : todo
  );

  res.json(req.body);
});

// DELETE
app.delete("/todos/:id", (req, res) => {

  const id = Number(req.params.id);

  todos = todos.filter(
    (todo) => todo.id !== id
  );

  res.json({
    message: "Todo deleted",
  });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});