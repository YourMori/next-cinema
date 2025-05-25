import React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button, Card, Label } from "@/components/ui";
import { MovieCard } from "@/components/index";
import { getHomepageMovies } from "@/lib";
import { fetchMovieByTitle } from "../api";
import Link from "next/link";

export default async function BrowsePage() {
  const homepageMovies = await getHomepageMovies();
  const featuredMovie = homepageMovies[0]?.movies[0];

  const homepageMoviesWithPosters = await Promise.all(
    homepageMovies.map(async (section) => {
      const moviesWithPosters = await Promise.all(
        section.movies.map(async (movie) => {
          try {
            const omdbData = await fetchMovieByTitle(movie.title);
            return { ...movie, poster: omdbData?.Poster || movie.imageUrl };
          } catch {
            return { ...movie, poster: movie.imageUrl };
          }
        })
      );
      return { ...section, movies: moviesWithPosters };
    })
  );

  const featuredPoster = homepageMoviesWithPosters[0]?.movies[0]?.poster;

  return (
    <div className="w-full">
      {featuredMovie ? (
        <Link href={`/movie/${featuredMovie.id}`} passHref>
          <Card className="relative w-full h-[400px] mb-[32px] bg-primary rounded-xl overflow-hidden">
            {featuredPoster && (
              <Image src={featuredPoster} alt={featuredMovie.title} layout="fill" objectFit="cover" className="opacity-60" />
            )}
            <div className="text-textPrimary mt-6 ml-8 relative z-10">
              <h2 className="text-xl font-bold">{featuredMovie.title}</h2>
              {featuredMovie.slogan && <p className="mt-2 text-lg">{featuredMovie.slogan}</p>}
            </div>
            <div className="absolute bottom-6 left-8 z-10">
              <Button variant="default">Watch Now</Button>
            </div>
          </Card>
        </Link>
      ) : (
        <p>No featured movie available</p>
      )}

      {/* Categories */}
      {homepageMoviesWithPosters.map((homepageMovie, index) => (
        <div key={index} className="mb-[32px]">
          <Label className="text-lg font-semibold text-textPrimary mb-[14px]">{homepageMovie.title}</Label>
          <Carousel>
            <CarouselContent className="ml-0">
              {homepageMovie.movies.map((movie) => (
                <CarouselItem key={movie.id} className="basis-1/4 mr-8">
                  <MovieCard id={movie.id} title={movie.title} imageUrl={movie.poster} rating={movie.rating} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 opacity-10 hover:opacity-60 transition-opacity" />
            <CarouselNext className="right-0 opacity-10 hover:opacity-60 transition-opacity" />
          </Carousel>
        </div>
      ))}
    </div>
  );
}
