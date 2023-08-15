"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const categoryRoute_1 = require("./modules/category/categoryRoute");
const postRoute_1 = require("./modules/post/postRoute");
const userRoute_1 = require("./modules/user/userRoute");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1/user', userRoute_1.UserRouter);
app.use('/api/v1/category', categoryRoute_1.CategoryRouter);
app.use('/api/v1/post', postRoute_1.PostRouter);
exports.default = app;
