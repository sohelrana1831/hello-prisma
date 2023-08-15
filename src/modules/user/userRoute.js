"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("./userController");
const router = express_1.default.Router();
// router.get('/create-user', (req,res) =>{
//     res.send('Hello Prisma')
// })
router.post('/create-user', userController_1.UserController.insertIntoDB);
router.post('/profile', userController_1.UserController.insertOrUpdateProfile);
router.get('/', userController_1.UserController.getUser);
router.get('/:id', userController_1.UserController.getSingleUser);
exports.UserRouter = router;
