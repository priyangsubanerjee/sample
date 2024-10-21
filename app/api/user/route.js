import { createUser } from "@/prisma/user";

export async function GET() {
  let operation = await createUser(
    "user123@gmail.commm",
    "password123",
    "name123"
  );
  console.log(operation);
  return Response.json({ message: "GET /api/user" });
}
