import { Request, Response } from "express";
import { UserServices } from "./userServices";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "User Create success",
      data: result
    });
  } catch (error) {
    res.send(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.insertOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "User Create/update success",
      data: result
    });
  } catch (error) {
    res.send(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getUser();
    res.send({
      success: true,
      message: "User Create/update success",
      data: result
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getSingleUser(parseInt(req.params.id));
    res.send({
      success: true,
      message: "User Create/update success",
      data: result
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUser,
  getSingleUser
};
