import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/components/lib/getUserSession";

export async function POST(req: NextRequest) {
  const user = await getUserSession();

  if (!user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { movieId } = body;

  if (!movieId) {
    return NextResponse.json({ error: "Missing movieId" }, { status: 400 });
  }

  try {
    const userId = Number(user.id);

    const existing = await prisma.bookmarkedMovies.findUnique({
      where: {
        userId_movieId: {
          userId,
          movieId,
        },
      },
    });

    if (existing) {
      await prisma.bookmarkedMovies.delete({
        where: {
          userId_movieId: {
            userId,
            movieId,
          },
        },
      });

      return NextResponse.json({ success: true, removed: true });
    } else {
      await prisma.bookmarkedMovies.create({
        data: {
          userId,
          movieId,
        },
      });

      return NextResponse.json({ success: true, added: true });
    }
  } catch (error) {
    console.error("[BOOKMARK_ERROR]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
