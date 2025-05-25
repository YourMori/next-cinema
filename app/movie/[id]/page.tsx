"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BookmarkIcon, PlusIcon, StarIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { Avatar } from "@radix-ui/react-avatar";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { DetailCard } from "@/components/index";
import { cn } from "@/lib/utils";
import { AvatarFallback, AvatarImage, Skeleton } from "@/components/ui";
import { fetchMovieByTitle } from "@/app/api";
import { MoviesWithRelations } from "@/lib/getMovieById";
import { addToBookmarks } from "@/lib/api/bookmark";
import { toast } from "sonner";
interface MoviePageProps {
  params: {
    id: string;
  };
}

interface MovieOMDbData {
  title: string;
  Poster?: string;
  Ratings?: { Source: string; Value: string }[];
}

export default function MovieDetailPage({ params }: MoviePageProps) {
  const [movie, setMovie] = useState<MoviesWithRelations | null>(null);
  const [MovieOMDbData, setMovieOMDbData] = useState<MovieOMDbData | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAllActors, setShowAllActors] = useState(false);
  const [openReviews, setOpenReviews] = useState<Record<number, boolean>>({});
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  const handleBookmark = async () => {
    try {
      const data = await addToBookmarks(Number(params.id));
      if (data.added) {
        setBookmarked(true);
        toast.success("Фильм добавлен в закладки");
      } else if (data.removed) {
        setBookmarked(false);
        toast.success("Фильм удалён из закладок");
      }
    } catch (e) {
      console.error(e);
      toast.error("Ошибка при добавлении в закладки");
    } finally {
    }
  };

  useEffect(() => {
    async function checkBookmark() {
      try {
        const res = await fetch(`/api/bookmark/${params.id}`);
        const data = await res.json();
        setBookmarked(data.bookmarked);
      } catch (error) {
        console.error("Ошибка при проверке закладки", error);
      }
    }

    checkBookmark();
  }, [params.id]);

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const res = await fetch(`/api/movies/${params.id}`);
        if (!res.ok) throw new Error("Failed to fetch movie");
        const data: MoviesWithRelations = await res.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [params.id]);

  useEffect(() => {
    if (!movie) return;
    async function fetchData() {
      if (!movie) return;
      try {
        const response = await fetchMovieByTitle(movie.title);
        setMovieOMDbData(response);
        console.log("Рейтинг фильма:", response);
        console.log("Постер:", MovieOMDbData?.Poster);
      } catch (error) {
        console.error("Ошибка при получении рейтинга:", error);
      }
    }
    fetchData();
  }, [movie]);

  if (loading)
    return (
      <div className="grid grid-cols-12 gap-6 text-textPrimary h-screen">
        <Skeleton className="col-span-3 h-[80%]" />
        <Skeleton className="col-span-6 h-[80%]" />
        <Skeleton className="col-span-3 h-[80%]" />
      </div>
    );
  if (!movie) return <div>Фильм не найден</div>;

  const visibleActors = showAllActors ? (movie.actors ?? []) : (movie.actors ?? []).slice(0, 8);

  function toggleReview(id: number) {
    setOpenReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <div className="grid grid-cols-12 gap-6 text-textPrimary">
      {/* Left Column - Poster & Trailer */}
      <div className="col-span-3 flex flex-col gap-4">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          {MovieOMDbData?.Poster && <Image src={MovieOMDbData.Poster} alt={`${movie.title} Poster`} fill className="object-cover" />}
        </div>
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
          <iframe
            src={""}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Center Column - Main Info */}
      <DetailCard className="col-span-6 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h1 className="text-[32px] text-textPrimary font-medium">
            {movie.title} <span className="text-[32px] text-textPrimary">({movie.release_year})</span>
          </h1>
          <Button variant={bookmarked ? "default" : "secondary"} size="icon" onClick={handleBookmark}>
            <BookmarkIcon className="w-5 h-5" />
          </Button>
        </div>

        <div className="text-base text-textSecondary">
          <p>
            {movie.title} ({movie.ageRating})
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">Description</h2>
          <p className="text-base text-textTertiary">{movie.description}</p>
        </div>

        <h2 className="text-xl font-semibold mb-1">О фильме</h2>
        <div className="grid grid-cols-[200px_1fr] gap-y-2 text-base">
          <div>Год производства:</div>
          <div>{movie.release_year}</div>

          <div>Страна:</div>
          <div>{movie.country}</div>

          <div>Жанр:</div>
          <div>Драма</div>

          <div>Слоган:</div>
          <div>{movie.slogan}</div>

          <div>Режиссёр:</div>
          <div>{movie.director}</div>

          <div>Сценарий:</div>
          <div>{movie.script}</div>

          <div>Продюсер:</div>
          <div>{movie.producer}</div>

          <div>Оператор:</div>
          <div>{movie.operator}</div>

          <div>Композитор:</div>
          <div>{movie.composer}</div>

          <div>Художник:</div>
          <div>{movie.artist}</div>

          <div>Бюджет:</div>
          <div>₽ {movie.budget}</div>

          <div>Зрители:</div>
          <div>{movie.viewers}</div>

          <div>Сборы в России:</div>
          <div>${movie.boxOffice}</div>

          <div>Премьера в России:</div>
          <div>{movie.premiere}</div>

          <div>Возраст:</div>
          <div>{movie.ageRating}</div>

          <div>Время:</div>
          <div>{movie.duration} ч</div>
        </div>
      </DetailCard>

      {/* Right Column - Ratings & Interaction */}
      <DetailCard className="col-span-3 flex flex-col justify-between gap-6">
        <div className="space-y-4 p-4">
          <h3 className="text-lg font-semibold mb-2">Ratings</h3>
          <div className="grid grid-cols-[150px_1fr] gap-y-2 text-base items-center">
            <div className="font-medium text-xl">{"111"}</div>
            <div>{movie.rating} оценок</div>

            <div className="font-bold">IMDb:</div>
            <div className="font-bold">{MovieOMDbData?.Ratings?.[0].Value}</div>

            <div className="font-bold">Rotten Tomatoes:</div>

            <div className="font-bold"> {MovieOMDbData?.Ratings?.[1].Value}</div>

            <span className="font-bold">Metacritic:</span>
            <div className="font-bold">{MovieOMDbData?.Ratings?.[2].Value}</div>
          </div>

          <div className="bg-muted rounded-lg shadow-sm">
            <Button variant="secondary" className="w-full mt-auto flex items-center justify-center gap-2">
              <StarIcon className="w-5 h-5" />
              Rate this movie
            </Button>
          </div>

          <h3 className="text-lg font-semibold mb-2">В главных ролях</h3>
          <ul className="space-y-1 text-sm text-textTertiary">
            {visibleActors.map((actors, idx) => (
              <li key={idx}>{actors.actor.name}</li>
            ))}
          </ul>
          {movie.actors && movie.actors.length > 8 && (
            <Button variant={"default"} className=" mt-2 text-sm hover:underline" onClick={() => setShowAllActors(!showAllActors)}>
              {showAllActors ? "Скрыть" : "Показать больше"}
            </Button>
          )}
        </div>
      </DetailCard>

      <DetailCard className="col-span-12 flex flex-col gap-4 mt-8">
        <h2 className="text-2xl font-semibold">Рецензии пользователей</h2>
        <Button variant="secondary" size="sm" className="flex items-center gap-2 max-w-max">
          <PlusIcon className="w-5 h-5" />
          Написать рецензию
        </Button>
        <div className="flex flex-col gap-6">
          {movie.reviews &&
            movie.reviews.map((review) => (
              <div key={review.id} className="p-4 rounded-xl border border-border bg-muted shadow-sm">
                {/* Верхняя часть — Аватар, имя, статистика, дата */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Avatar className="w-8 h-8 mr-[16px]">
                        <AvatarImage src={""} alt="avatar" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <div className="text-base font-semibold text-textPrimary">{review.user.username}</div>
                      <div className="text-sm text-textSecondary">{11} reviews</div>
                    </div>
                  </div>
                  <div className="text-sm text-textSecondary mt-1 whitespace-nowrap">{dayjs(review.createdAt).format("DD.MM.YYYY")}</div>
                </div>

                {/* Линия */}
                <hr className="my-4 border-border" />

                {/* Контент отзыва */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-textPrimary">{review.comment}</h3>
                  <p className={cn("text-sm text-textTertiary", !openReviews[review.id] && "line-clamp-4")}>{review.comment}</p>
                  {review.comment && review.comment.length > 300 && (
                    <Button variant="ghost" size="sm" onClick={() => toggleReview(review.id)} className="mt-1">
                      {openReviews[review.id] ? "Показать меньше" : "Читать полностью"}
                    </Button>
                  )}
                </div>

                {/* Лайки / дизлайки */}
                <div className="flex gap-4 mt-4">
                  <Button variant="ghost" className="flex items-center gap-2 text-sm">
                    <ThumbsUpIcon className="w-4 h-4" />
                    {17}
                  </Button>
                  <Button variant="ghost" className="flex items-center gap-2 text-sm">
                    <ThumbsDownIcon className="w-4 h-4" />
                    {6}
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </DetailCard>
    </div>
  );
}
