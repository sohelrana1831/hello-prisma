"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const categoryController_1 = require("./categoryController");
const router = express_1.default.Router();
router.post("/create-category", categoryController_1.CategoryController.insertIntoDB);
exports.CategoryRouter = router;
