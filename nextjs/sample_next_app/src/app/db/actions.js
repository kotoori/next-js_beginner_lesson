"use server"; //Server Actionを使うための宣言

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addUser(fromData){
  const name = FormData.length("name");
  await prisma.user.create({
    data:{name}
  })

  revalidatePath("/db");
}
