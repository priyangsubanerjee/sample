export const dynamic = "force-dynamic";
export const revalidate = 1;

import { getAllTodos } from "@/prisma/todo";

export async function GET() {
  let todos = await getAllTodos();
  return Response.json(todos);
}
