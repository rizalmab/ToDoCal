import { Request, Response } from "express";

const todos = [{ id: 1, title: "Clean my house" }];

const getAllTodos = (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    results: todos.length,
    data: todos,
  });
};

export { getAllTodos };
