import { getAllTodos } from "@/prisma/todo";

export async function GET() {
  let todos = await getAllTodos();
  return Response.json(todos);
}
