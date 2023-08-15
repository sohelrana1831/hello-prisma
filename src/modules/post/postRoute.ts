import express from "express";
import { PostController } from "./postController";

const router = express.Router();

router.post('/create-post', PostController.insertIntoDB)
router.get('/', PostController.getAllPost)
router.get('/:id', PostController.getSinglePost)
router.patch('/:id', PostController.postUpdate)
router.delete('/:id', PostController.deletePost)

export const PostRouter = router;
