"use server";

import prisma from "./prisma";

export async function createUser(email, password, name) {
  try {
    let user_ = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    return user_;
  } catch (error) {
    throw new Error(error.message);
  }
}
