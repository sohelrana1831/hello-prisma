"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const postServices_1 = require("./postServices");
const insertIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postServices_1.PostServices.insertIntoDB(req.body);
        res.send({
            success: true,
            message: "post Create success!",
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getAllPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = req.query;
    try {
        const result = yield postServices_1.PostServices.getAllPost(options);
        res.send({
            success: true,
            message: "All post get success!",
            total: result.total,
            data: result.data
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSinglePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield postServices_1.PostServices.getSinglePost(parseInt(req.params.id));
        res.send({
            success: true,
            message: "post get success!",
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const postUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const payload = req.body;
    try {
        const result = yield postServices_1.PostServices.postUpdate(id, payload);
        res.send({
            success: true,
            message: "post update success!",
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield postServices_1.PostServices.deletePost(id);
        res.send({
            success: true,
            message: "Post delete success!",
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.PostController = {
    insertIntoDB,
    getAllPost,
    getSinglePost,
    postUpdate,
    deletePost
};
