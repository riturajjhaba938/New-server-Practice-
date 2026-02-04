const express = require("express");
const app = express();

/* Middleware */
app.use(express.json());

/* In-memory data */
const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" },
  { id: 3, name: "Rituraj Jha", role: "developer" },
  { id: 4, name: "Ananya", role: "student" },
  { id: 5, name: "Rahul", role: "mentor" }
];

/* Home route */
app.get("/", (req, res) => {
  res.status(200).send("Express server is running 🚀 | Created by Rituraj Jha");
});

/* Get all users */
app.get("/users", (req, res) => {
  res.status(200).json(users);
});


app.get("/user/:test/:users_id", (req, res) => {
  console.log("req params:", req.params);
  res.status(200).json(req.params);
});


app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});


app.post("/users", (req, res) => {
  const { name, role } = req.body;

  if (!name || !role) {
    return res.status(400).json({ message: "Name and role are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    role
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser
  });
});


app.put("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const index = users.findIndex(u => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = {
    id: userId,
    name: req.body.name,
    role: req.body.role
  };

  res.status(200).json({
    message: "User replaced",
    user: users[index]
  });
});
app.patch("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (req.body.name !== undefined) user.name = req.body.name;
  if (req.body.role !== undefined) user.role = req.body.role;

  res.status(200).json({
    message: "User updated",
    user
  });
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
