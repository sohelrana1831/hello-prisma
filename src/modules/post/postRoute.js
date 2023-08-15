"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRouter = void 0;
const express_1 = __importDefault(require("express"));
const postController_1 = require("./postController");
const router = express_1.default.Router();
router.post('/create-post', postController_1.PostController.insertIntoDB);
router.get('/', postController_1.PostController.getAllPost);
router.get('/:id', postController_1.PostController.getSinglePost);
router.patch('/:id', postController_1.PostController.postUpdate);
router.delete('/:id', postController_1.PostController.deletePost);
exports.PostRouter = router;
