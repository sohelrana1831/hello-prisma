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
exports.UserController = void 0;
const userServices_1 = require("./userServices");
const insertIntoDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userServices_1.UserServices.insertIntoDB(req.body);
        res.send({
            success: true,
            message: "User Create success",
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const insertOrUpdateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userServices_1.UserServices.insertOrUpdateProfile(req.body);
        res.send({
            success: true,
            message: "User Create/update success",
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userServices_1.UserServices.getUser();
        res.send({
            success: true,
            message: "User Create/update success",
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield userServices_1.UserServices.getSingleUser(parseInt(req.params.id));
        res.send({
            success: true,
            message: "User Create/update success",
            data: result
        });
    }
    catch (error) {
        res.send(error);
    }
});
exports.UserController = {
    insertIntoDB,
    insertOrUpdateProfile,
    getUser,
    getSingleUser
};
