"use server";

import { hashSync } from "bcrypt";
import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/components/lib/getUserSession";

interface UpdateUserInput {
  username: string;
  email: string;
  password?: string;
}

export async function updateUserInfo(body: UpdateUserInput) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error("Пользователь не найден");
    }

    const existingUser = await prisma.users.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    if (!existingUser) {
      throw new Error("Пользователь не существует в базе данных");
    }

    await prisma.users.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        email: body.email,
        username: body.username,
        password: body.password ? hashSync(body.password, 10) : existingUser.password,
      },
    });
  } catch (err) {
    console.error("Error [UPDATE_USER]", err);
    throw err;
  }
}
