"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { MovieCard } from "@/components/index";
import { fetchMovieByTitle } from "../api";
import { Skeleton } from "@/components/ui";

interface Movie {
  id: number;
  title: string;
  imageUrl?: string;
  poster: string;
  rating: number;
}

export default function BookmarkedMoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarkedMoviesWithPosters = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/bookmarked");
        if (!res.ok) throw new Error("Ошибка при загрузке закладок");

        const data = await res.json();

        const moviesWithPosters = await Promise.all(
          data.movies.map(async (movie: Movie) => {
            try {
              const omdbData = await fetchMovieByTitle(movie.title);
              return {
                ...movie,
                poster: omdbData?.Poster || movie.imageUrl || "",
              };
            } catch {
              return {
                ...movie,
                poster: movie.imageUrl || "",
              };
            }
          })
        );

        setMovies(moviesWithPosters);
      } catch (error) {
        console.error("Ошибка:", error);
        toast.error("Не удалось загрузить закладки");
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarkedMoviesWithPosters();
  }, []);

  if (loading) {
    return (
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-56 rounded-xl" />
        ))}
      </div>
    );
  }

  if (movies.length === 0) {
    return <p className="text-center text-textPrimary">У вас нет закладок.</p>;
  }

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 overflow-hidden">
      {movies.map((movie) => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} imageUrl={movie.poster} rating={movie.rating} />
      ))}
    </div>
  );
}
