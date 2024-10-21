"use server";

import prisma from "./prisma";

export async function createTodo(title, isCompleted = false) {
  try {
    let operation = await prisma.todo.create({
      data: {
        title,
        isCompleted,
      },
    });
    return operation;
  } catch (error) {
    throw new Error(error.message);
  }
}
