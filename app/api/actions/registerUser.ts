"use server";

import { hashSync } from "bcrypt";
import { VerificationUserTemplate } from "@/components/emailTemplates";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/send-email";

interface RegisterUserInput {
  username: string;
  email: string;
  password: string;
}

export async function registerUser(body: RegisterUserInput) {
  try {
    const user = await prisma.users.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error("Почта не подтверждена");
      }

      throw new Error("Пользователь уже существует");
    }

    const createdUser = await prisma.users.create({
      data: {
        email: body.email,
        username: body.username,
        role: "user",
        password: body.password ? hashSync(body.password, 10) : "",
      },
    });

    const code = Math.floor(100000 + Math.random() * 90000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });

    await sendEmail(createdUser.email, "Mori Cinema | Подтверждение регистрации", VerificationUserTemplate({ code }));
  } catch (e) {
    console.error("ERROR [REGISTER_USER]", e);
    throw e;
  }
}
