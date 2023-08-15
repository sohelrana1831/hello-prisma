import { PrismaClient, Profile, User } from "@prisma/client";
const prisma = new PrismaClient();


const insertIntoDB = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data
  });
  return result;
};

const insertOrUpdateProfile = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: { userId: data.userId }
  });

  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId
      },
      data: {
        bio: data.bio
      }
    });
    return result;
  } else {
    return await prisma.profile.create({
      data
    });
  }
};

const getUser = async () => {
  return await prisma.user.findMany({
    // select:{
    //     email:true,
    //     name:true
    // }
    include: { profile: true }
  });
};

const getSingleUser = async (id: number) => {
  return await prisma.user.findUnique({
    where: {
      id
    },
    include: { profile: true }
  });
};

export const UserServices = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUser,
  getSingleUser
};
