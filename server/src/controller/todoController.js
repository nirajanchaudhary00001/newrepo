const Todo = require("../schema/todoSchema.js");

exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(200).json({
      success: true,
      message: "Todo created successfully",
      result: todo,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.readAllTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      success: true,
      message: "Retrived all data",
      result: todos,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.readOneTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    res.status(200).json({
      success: true,
      message: "single data retrived",
      result: todo,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: message.error,
    });
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    const id = req.params.id;
    const updateTodo = await Todo.findByIdAndUpdate(id, data, {
      new: true,
    });
    console.log(updateTodo);
    res.status(200).json({
      success: true,
      message: "Todo updated",
      result: updateTodo,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: message.error,
    });
  }
};

exports.deleteTodo = async (req , res , next)=>{
  try {
    const id = req.params.id;
    const deleteTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json({
      success : true,
      message : "Data deleted ",
      result : deleteTodo
    })
  } catch (error) {
    res.status(400).json({
      success : false ,
      message : message.error
    })
  }
}