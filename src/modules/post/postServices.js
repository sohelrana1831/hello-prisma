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
exports.PostServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const insertIntoDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.post.create({
        data,
        include: { author: true, category: true }
    });
});
const getAllPost = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { sortBy, sortOrder, searchTerm, page, limit } = options;
    const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
    const take = parseInt(limit) || 10;
    return yield prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield prisma.post.findMany({
            skip,
            take,
            include: {
                author: true,
                category: true
            },
            orderBy: sortBy && sortOrder
                ? {
                    [sortBy]: sortOrder
                }
                : { createdAt: "desc" },
            where: {
                OR: [
                    {
                        title: {
                            contains: searchTerm,
                            mode: "insensitive"
                        }
                    },
                    {
                        author: {
                            name: {
                                contains: searchTerm,
                                mode: "insensitive"
                            }
                        }
                    }
                ]
            }
        });
        const total = yield prisma.post.count();
        return { data: result, total };
    }));
});
const postUpdate = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.post.update({ where: { id }, data: payload });
});
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.post.delete({ where: { id } });
});
const getSinglePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.post.findUnique({
        where: {
            id
        },
        include: {
            author: true,
            category: true
        }
    });
});
exports.PostServices = {
    insertIntoDB,
    getAllPost,
    getSinglePost,
    postUpdate,
    deletePost
};
