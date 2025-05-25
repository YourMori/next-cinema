import { prisma } from "./prisma";

export const getHomepageMovies = async () => {
  const homepageSections = await prisma.homepageSection.findMany({
    include: {
      movies: {
        include: {
          movie: true,
        },
      },
      category: true,
    },
    orderBy: {
      sortOrder: "asc",
    },
  });

  return homepageSections.map((section) => ({
    id: section.id,
    title: section.title,
    movies: section.movies.map((entry) => entry.movie),
  }));
};
