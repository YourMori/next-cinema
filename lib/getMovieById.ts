import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export type MoviesWithRelations = Prisma.MoviesGetPayload<{
  include: {
    reviews: {
      include: {
        user: true;
      };
    };
    actors: {
      include: {
        actor: true;
      };
    };
  };
}>;

export async function getMovieById(id: number): Promise<MoviesWithRelations | null> {
  return prisma.movies.findUnique({
    where: { id },
    include: {
      reviews: {
        include: {
          user: true,
        },
      },
      actors: {
        include: {
          actor: true,
        },
      },
    },
  });
}
