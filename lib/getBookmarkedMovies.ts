import { getUserSession } from "@/components/lib/getUserSession";
import { prisma } from "@/lib/prisma";

export const getBookmarkedMovies = async () => {
  const user = await getUserSession();
  if (!user?.id) return [];

  const bookmarks = await prisma.bookmarkedMovies.findMany({
    where: {
      userId: Number(user.id),
    },
    include: {
      movie: true,
    },
  });

  return bookmarks.map((entry) => entry.movie);
};
