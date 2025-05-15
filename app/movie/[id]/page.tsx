"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BookmarkIcon, PlusIcon, StarIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DetailCard } from "@/components/index";
import { cn } from "@/lib/utils";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui";
import { fetchMovieByTitle } from "@/app/api";

interface MoviePageProps {
  params: {
    id: string;
  };
}

type Rating = {
  Source: string;
  Value: string;
};

type MovieData = {
  Ratings?: Rating[] | null | undefined;
};

// Тестовые данные
const movie = {
  title: "Inception",
  originalTitle: "Epic Movie Original",
  year: 2024,
  age: "16+",
  description:
    "A breathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful soundtrackA breathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful soundtrack.A breathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful soundtrack.A breathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful soundtrack.A breathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful soundtrack.A breathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful soundtrack..",
  posterUrl: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
  trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // YouTube iframe
  ratings: {
    site: 8.2,
    imdb: 7.5,
    rottenTomatoes: "84%",
  },
};

const cast = [
  "Сергей Безруков",
  "Алексей Серебряков",
  "Чулпан Хаматова",
  "Данила Козловский",
  "Ксения Раппопорт",
  "Фёдор Бондарчук",
  "Елизавета Боярская",
  "Юрий Колокольников",
  "Иван Ургант",
  "Павел Прилучный",
  "Мария Машкова",
  "Пётр Фёдоров",
  "Алексей Серебряков",
  "Чулпан Хаматова",
  "Данила Козловский",
  "Ксения Раппопорт",
  "Фёдор Бондарчук",
  "Елизавета Боярская",
  "Юрий Колокольников",
  "Иван Ургант",
  "Павел Прилучный",
  "Мария Машкова",
  "Пётр Фёдоров",
  "Алексей Серебряков",
  "Чулпан Хаматова",
  "Данила Козловский",
  "Ксения Раппопорт",
  "Фёдор Бондарчук",
  "Елизавета Боярская",
  "Юрий Колокольников",
  "Иван Ургант",
  "Павел Прилучный",
  "Мария Машкова",
  "Пётр Фёдоров",
];

const reviews = [
  {
    id: 1,
    user: "Alice Johnson",
    avatarUrl: "https://github.com/shadcn.png",
    totalReviews: 12,
    date: "2025-04-15",
    time: "14:32",
    title: "A Visual Masterpiece",
    comment:
      "This film was a eathtaking story of loveathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals ae, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals aeathtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals a Every frame was like a painting, and the music made it all even more powerful. I especially loved the emotional depth of the main characters and the world-building.",
    likes: 34,
    dislikes: 2,
  },
  {
    id: 2,
    user: "Bob Smith",
    avatarUrl: "https://github.com/shadcn.png",
    totalReviews: 5,
    date: "2025-04-10",
    time: "09:12",
    title: "Good but Too Long",
    comment:
      "The story had potential andthtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful southtaking story of love, courage, and sacrifice set in a fantastical world. With groundbreaking visuals and a powerful sou the actors did great, but some scenes were unnecessarily stretched. Still a solid 7 for the effort.",
    likes: 12,
    dislikes: 5,
  },
];
export default function MovieDetailPage({}: MoviePageProps) {
  const [openReviews, setOpenReviews] = React.useState<Record<number, boolean>>({});
  const [showAllActors, setShowAllActors] = useState(false);
  const visibleActors = showAllActors ? cast : cast.slice(0, 8);

  const [movieRating, setMovieRating] = useState<MovieData | null>(null);
  const [ratingLoading, setRatingLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setRatingLoading(true);
      try {
        const response = await fetchMovieByTitle(movie.title);
        setMovieRating(response);
      } catch (error) {
        console.error("Ошибка при получении рейтинга:", error);
      } finally {
        setRatingLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(ratingLoading, movieRating);

  function toggleReview(id: number) {
    setOpenReviews((prev) => ({
      ...prev,
      [id]: !prev[id], // переключаем только выбранную
    }));
  }

  return (
    <div className="grid grid-cols-12 gap-6 text-textPrimary">
      {/* Left Column - Poster & Trailer */}
      <div className="col-span-3 flex flex-col gap-4">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image src={movie.posterUrl} alt="Movie Poster" fill className="object-cover" />
        </div>
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
          <iframe
            src={movie.trailerUrl}
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
            {movie.title} <span className="text-[32px] text-textPrimary">({movie.year})</span>
          </h1>
          <Button variant="secondary" size="icon">
            <BookmarkIcon className="w-5 h-5" />
          </Button>
        </div>

        <div className="text-base text-textSecondary">
          <p>
            {movie.originalTitle}({movie.age})
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-1">Description</h2>
          <p className="text-base text-textTertiary">{movie.description}</p>
        </div>

        <h2 className="text-xl font-semibold mb-1">О фильме</h2>
        <div className="grid grid-cols-[200px_1fr] gap-y-2 text-base">
          <div>Год производства:</div>
          <div>2025</div>

          <div>Страна:</div>
          <div>Россия</div>

          <div>Жанр:</div>
          <div>Военный, драма, история</div>

          <div>Слоган:</div>
          <div>—</div>

          <div>Режиссёр:</div>
          <div>Сергей Коротаев</div>

          <div>Сценарий:</div>
          <div>Олег Антонов, Борис Васильев</div>

          <div>Продюсер:</div>
          <div>Владимир Машков, Александр Жаров, Тимур Вайнштейн, ...</div>

          <div>Оператор:</div>
          <div>Игорь Гринякин</div>

          <div>Композитор:</div>
          <div>Николай Ростов</div>

          <div>Художник:</div>
          <div>Эдуард Галкин, Алексей Камышов, Елена Станкеева, ...</div>

          <div>Бюджет:</div>
          <div>₽ 1 000 000 000</div>

          <div>Зрители:</div>
          <div>Россия — 1.1 млн, ...</div>

          <div>Сборы в России:</div>
          <div>$6 064 434</div>

          <div>Премьера в России:</div>
          <div>1 мая 2025, «Централ Партнершип»</div>

          <div>Возраст:</div>
          <div>12+</div>

          <div>Время:</div>
          <div>2 ч</div>
        </div>
      </DetailCard>

      {/* Right Column - Ratings & Interaction */}
      <DetailCard className="col-span-3 flex flex-col justify-between gap-6">
        <div className="space-y-4 p-4">
          <h3 className="text-lg font-semibold mb-2">Ratings</h3>
          <div className="grid grid-cols-[150px_1fr] gap-y-2 text-base items-center">
            <div className="font-medium text-xl">{movie.ratings.site}</div>
            <div>23 223 оценок</div>

            <div className="font-bold">IMDb:</div>
            <div>{ratingLoading ? "" : movieRating?.Ratings?.[0].Value}</div>

            <div className="font-bold">Rotten Tomatoes:</div>

            <div className="font-bold"> {movieRating?.Ratings?.[1].Value}</div>

            <span className="font-bold">Metacritic:</span>
            <div className="font-bold">{movieRating?.Ratings?.[2].Value}</div>
          </div>

          <div className="bg-muted rounded-lg shadow-sm">
            <Button variant="secondary" className="w-full mt-auto flex items-center justify-center gap-2">
              <StarIcon className="w-5 h-5" />
              Rate this movie
            </Button>
          </div>

          <h3 className="text-lg font-semibold mb-2">В главных ролях</h3>
          <ul className="space-y-1 text-sm text-textTertiary">
            {visibleActors.map((actor, idx) => (
              <li key={idx}>{actor}</li>
            ))}
          </ul>
          {cast.length > 8 && (
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
          {reviews.map((review) => (
            <div key={review.id} className="p-4 rounded-xl border border-border bg-muted shadow-sm">
              {/* Верхняя часть — Аватар, имя, статистика, дата */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Avatar className="w-8 h-8 mr-[16px]">
                      <AvatarImage src={review.avatarUrl} alt="avatar" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <div className="text-base font-semibold text-textPrimary">{review.user}</div>
                    <div className="text-sm text-textSecondary">{review.totalReviews} reviews</div>
                  </div>
                </div>
                <div className="text-sm text-textSecondary mt-1 whitespace-nowrap">
                  {review.date} • {review.time}
                </div>
              </div>

              {/* Линия */}
              <hr className="my-4 border-border" />

              {/* Контент отзыва */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-textPrimary">{review.title}</h3>
                <p className={cn("text-sm text-textTertiary", !openReviews[review.id] && "line-clamp-4")}>{review.comment}</p>
                {review.comment.length > 300 && ( // or any length threshold you want
                  <Button variant="ghost" size="sm" onClick={() => toggleReview(review.id)} className="mt-1">
                    {openReviews[review.id] ? "Показать меньше" : "Читать полностью"}
                  </Button>
                )}
              </div>

              {/* Лайки / дизлайки */}
              <div className="flex gap-4 mt-4">
                <Button variant="ghost" className="flex items-center gap-2 text-sm">
                  <ThumbsUpIcon className="w-4 h-4" />
                  {review.likes}
                </Button>
                <Button variant="ghost" className="flex items-center gap-2 text-sm">
                  <ThumbsDownIcon className="w-4 h-4" />
                  {review.dislikes}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </DetailCard>
    </div>
  );
}
