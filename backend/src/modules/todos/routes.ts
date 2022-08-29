import express from "express";
import {
  getAllTodos,
  //   createTodo,
  //   getTodo,
  //   updateTodo,
  //   deleteTodo,
} from "./v1/todosController";

const router = express.Router();

router.route("/").get(getAllTodos);
// router.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

export default router;
