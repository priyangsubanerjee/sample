import { createTodo } from "@/prisma/todo";

export async function GET() {
  let randomString = Math.random() * 1000 + "Leader";
  let operation = await createTodo(randomString);
  return Response.json({ message: "GET /api/user" });
}
