const express = require("express");
const {
  createTodo,
  readAllTodo,
  readOneTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoController");

const router = express.Router();

// create todo
router.post("/create", createTodo);
router.get("/readAll", readAllTodo);
router.get("/readOne/:id", readOneTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
