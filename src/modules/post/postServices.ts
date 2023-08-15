import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDB = async (data: Post): Promise<Post> => {
  return await prisma.post.create({
    data,
    include: { author: true, category: true }
  });
};

const getAllPost = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
  const take = parseInt(limit) || 10;

  return await prisma.$transaction(async (tx) => {
    const result = await prisma.post.findMany({
      skip,
      take,
      include: {
        author: true,
        category: true
      },
      orderBy:
        sortBy && sortOrder
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
    const total = await prisma.post.count();
    return { data: result, total };
  });
};

const postUpdate = async (
  id: number,
  payload: Partial<Post>
): Promise<Post> => {
  return await prisma.post.update({ where: { id }, data: payload });
};
const deletePost = async (id: number) => {
  return await prisma.post.delete({ where:  {id}  });
};

const getSinglePost = async (id: number) => {
  return await prisma.post.findUnique({
    where: {
      id
    },
    include: {
      author: true,
      category: true
    }
  });
};

export const PostServices = {
  insertIntoDB,
  getAllPost,
  getSinglePost,
  postUpdate,
  deletePost
};
