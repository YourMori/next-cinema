import { getUserSession } from "@/components/lib/getUserSession";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    movieId: string;
  };
}

export async function GET(req: NextRequest, { params }: Params) {
  const user = await getUserSession();
  if (!user?.id) return NextResponse.json({ bookmarked: false });

  const movieId = Number(params.movieId);

  if (isNaN(movieId)) {
    return NextResponse.json({ bookmarked: false });
  }

  const bookmark = await prisma.bookmarkedMovies.findUnique({
    where: {
      userId_movieId: {
        userId: Number(user.id),
        movieId,
      },
    },
  });

  return NextResponse.json({ bookmarked: Boolean(bookmark) });
}
