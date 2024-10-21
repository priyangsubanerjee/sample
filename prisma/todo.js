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

export async function getAllTodos() {
  try {
    let todos = await prisma.todo.findMany();
    return todos;
  } catch (error) {
    throw new Error(error.message);
  }
}
