import { hashSync } from "bcrypt";

// eslint-disable-next-line @typescript-eslint/no-require-imports
import { PrismaClient } from "../lib/generated/prisma"; // Путь может отличаться в зависимости
const prisma = new PrismaClient();

async function main() {
  // Очищаем все таблицы от данных перед вставкой новых
  await prisma.reviews.deleteMany({});
  await prisma.bookmarkedMovies.deleteMany({});
  await prisma.watchedMovies.deleteMany({});
  await prisma.featuredMovie.deleteMany({});
  await prisma.followers.deleteMany({});
  await prisma.moviesCategories.deleteMany({});
  await prisma.movies.deleteMany({});
  await prisma.categories.deleteMany({});
  await prisma.users.deleteMany({});

  // Создание пользователей
  const user1 = await prisma.users.create({
    data: {
      username: "john_doe",
      email: "john@example.com",
      role: "user",
      password: hashSync("hashed_password_1", 10),
    },
  });

  const user2 = await prisma.users.create({
    data: {
      username: "jane_smith",
      email: "jane@example.com",
      role: "user",
      password: hashSync("hashed_password_2", 10),
    },
  });

  const user3 = await prisma.users.create({
    data: {
      username: "Mori",
      email: "pa4ok_28@mail.ru",
      role: "ADMIN",
      password: hashSync("15042003Ahri", 10),
    },
  });

  // Создание категорий
  const category1 = await prisma.categories.create({
    data: {
      name: "Action",
      description: "Action-packed movies with thrilling sequences.",
    },
  });

  const category2 = await prisma.categories.create({
    data: {
      name: "Comedy",
      description: "Movies that will make you laugh out loud.",
    },
  });

  const category3 = await prisma.categories.create({
    data: {
      name: "Drama",
      description: "Emotional movies that tell powerful stories.",
    },
  });

  const category4 = await prisma.categories.create({
    data: {
      name: "Sci-Fi",
      description: "Movies exploring futuristic technology and space.",
    },
  });

  // Создание фильмов
  const movie1 = await prisma.movies.create({
    data: {
      title: "Action Movie 1",
      description: "An action-packed movie with explosions.",
      release_year: 2021,
      imageUrl: "http://example.com/action1.jpg",
      posterUrl: "http://example.com/action1_poster.jpg",
      duration: 120,
      rating: 8.5,
      releaseDate: new Date("2021-05-10"),
    },
  });

  const movie2 = await prisma.movies.create({
    data: {
      title: "Comedy Movie 1",
      description: "A comedy movie with hilarious moments.",
      release_year: 2020,
      imageUrl: "http://example.com/comedy1.jpg",
      posterUrl: "http://example.com/comedy1_poster.jpg",
      duration: 100,
      rating: 7.2,
      releaseDate: new Date("2020-12-15"),
    },
  });

  const movie3 = await prisma.movies.create({
    data: {
      title: "Sci-Fi Movie 1",
      description: "A mind-bending sci-fi film about time travel.",
      release_year: 2022,
      imageUrl: "http://example.com/scifi1.jpg",
      posterUrl: "http://example.com/scifi1_poster.jpg",
      duration: 135,
      rating: 8.8,
      releaseDate: new Date("2022-06-01"),
    },
  });

  const movie4 = await prisma.movies.create({
    data: {
      title: "Drama Movie 1",
      description: "A gripping drama about family secrets.",
      release_year: 2019,
      imageUrl: "http://example.com/drama1.jpg",
      posterUrl: "http://example.com/drama1_poster.jpg",
      duration: 140,
      rating: 9.0,
      releaseDate: new Date("2019-09-10"),
    },
  });

  const movie5 = await prisma.movies.create({
    data: {
      title: "Action Movie 2",
      description: "An action-packed adventure with car chases.",
      release_year: 2023,
      imageUrl: "http://example.com/action2.jpg",
      posterUrl: "http://example.com/action2_poster.jpg",
      duration: 110,
      rating: 7.9,
      releaseDate: new Date("2023-03-05"),
    },
  });

  // Привязка фильмов к категориям
  await prisma.moviesCategories.create({
    data: {
      movieId: movie1.id,
      categoryId: category1.id,
    },
  });

  await prisma.moviesCategories.create({
    data: {
      movieId: movie2.id,
      categoryId: category2.id,
    },
  });

  await prisma.moviesCategories.create({
    data: {
      movieId: movie3.id,
      categoryId: category4.id,
    },
  });

  await prisma.moviesCategories.create({
    data: {
      movieId: movie4.id,
      categoryId: category3.id,
    },
  });

  await prisma.moviesCategories.create({
    data: {
      movieId: movie5.id,
      categoryId: category1.id,
    },
  });

  // Создание обзоров
  await prisma.reviews.create({
    data: {
      movieId: movie1.id,
      userId: user1.id,
      rating: 8.5,
      comment: "Great action movie!",
    },
  });

  await prisma.reviews.create({
    data: {
      movieId: movie2.id,
      userId: user2.id,
      rating: 7.0,
      comment: "Funny but a bit predictable.",
    },
  });

  await prisma.reviews.create({
    data: {
      movieId: movie3.id,
      userId: user3.id,
      rating: 9.0,
      comment: "Amazing sci-fi with a twist!",
    },
  });

  // Создание закладок
  await prisma.bookmarkedMovies.create({
    data: {
      userId: user1.id,
      movieId: movie1.id,
    },
  });

  await prisma.bookmarkedMovies.create({
    data: {
      userId: user2.id,
      movieId: movie2.id,
    },
  });

  await prisma.bookmarkedMovies.create({
    data: {
      userId: user3.id,
      movieId: movie3.id,
    },
  });

  // Создание записей о просмотренных фильмах
  await prisma.watchedMovies.create({
    data: {
      userId: user1.id,
      movieId: movie5.id,
    },
  });

  await prisma.watchedMovies.create({
    data: {
      userId: user2.id,
      movieId: movie4.id,
    },
  });

  // Создание "следования" между пользователями
  await prisma.followers.create({
    data: {
      userId: user1.id,
      followerId: user2.id,
    },
  });

  await prisma.followers.create({
    data: {
      userId: user2.id,
      followerId: user3.id,
    },
  });

  // Создание "избранного" фильма
  await prisma.featuredMovie.create({
    data: {
      movieId: movie3.id, // Избранный фильм для главной страницы
    },
  });

  console.log("Тестовые данные успешно добавлены!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
