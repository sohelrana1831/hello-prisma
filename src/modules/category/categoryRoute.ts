import express from "express";
import { CategoryController } from "./categoryController";

const router = express.Router();

router.post("/create-category", CategoryController.insertIntoDB);

export const CategoryRouter = router;
