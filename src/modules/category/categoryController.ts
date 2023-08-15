import { Request, Response } from "express";
import { CategoryService } from "./categoryServices";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.insertIntoDB(req.body);
    console.log(result)
    res.send({
      success: true,
      message: "Category insert success!",
      data: result
    });
  } catch (error) {
    res.send(error);
  }
};

export const CategoryController = {
    insertIntoDB
}
