import prisma from "@/prisma/prisma";
import Image from "next/image";

export default async function Home() {
  let todo = await prisma.todo.findMany();
  console.log(todo);
  return (
    <div className="space-y-5">
      {todo.map((item, i) => (
        <div key={item.id}>
          {i} --
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
