import { getAllTodos } from "@/prisma/todo";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    let todos = await getAllTodos();
    const response = NextResponse.json(todos);
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    return response;
  } catch (error) {}
}
