import { Request, Response } from "express";
import axios from "axios";

// const todos = [{ id: 1, title: "Clean my house" }];

const getAllTodos = async (req: Request, res: Response) => {
  try {
    const lambdaResponse = await axios.get(
      "https://kq0774tsdc.execute-api.ap-southeast-1.amazonaws.com/Test/todo"
    );
    console.log("lambdaResponse", lambdaResponse.data);
    res.status(200).json({
      status: "ok",
      results: "placeholder",
      data: lambdaResponse.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export { getAllTodos };
