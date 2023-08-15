import { Request, Response } from "express";
import { PostServices } from "./postServices";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "post Create success!",
      data: result
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  const options = req.query;
  try {
    const result = await PostServices.getAllPost(options);
    res.send({
      success: true,
      message: "All post get success!",
      total: result.total,
      data: result.data
    });
  } catch (error) {
    res.send(error);
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await PostServices.getSinglePost(parseInt(req.params.id));
    res.send({
      success: true,
      message: "post get success!",
      data: result
    });
  } catch (error) {
    res.send(error);
  }
};

const postUpdate = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const payload = req.body;
  try {
    const result = await PostServices.postUpdate(id, payload);
    res.send({
      success: true,
      message: "post update success!",
      data: result
    });
  } catch (error) {
    res.send(error);
  }
};
const deletePost = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const result = await PostServices.deletePost(id);
    res.send({
      success: true,
      message: "Post delete success!",
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  insertIntoDB,
  getAllPost,
  getSinglePost,
  postUpdate,
  deletePost
};
