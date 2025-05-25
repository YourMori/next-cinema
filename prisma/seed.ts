import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🧹 Удаление старых данных...");
  await prisma.$transaction([
    prisma.reviews.deleteMany(),
    prisma.bookmarkedMovies.deleteMany(),
    prisma.watchedMovies.deleteMany(),
    prisma.featuredMovie.deleteMany(),
    prisma.followers.deleteMany(),
    prisma.moviesCategories.deleteMany(),
    prisma.homepageSectionMovie.deleteMany(),
    prisma.homepageSection.deleteMany(),
    prisma.movieActor.deleteMany(),
    prisma.actor.deleteMany(),
    prisma.movies.deleteMany(),
    prisma.categories.deleteMany(),
    prisma.verificationCode.deleteMany(),
    prisma.users.deleteMany(),
  ]);

  console.log("👤 Создание пользователей...");
  const [user1, user2] = await Promise.all([
    prisma.users.create({
      data: {
        username: "john_doe1",
        email: "gaikalovdn2003@gmail.com",
        role: "user",
        password: hashSync("hashed_password_1", 10),
      },
    }),
    prisma.users.create({
      data: {
        username: "jane_smith",
        email: "jane@example.com",
        role: "user",
        password: hashSync("hashed_password_2", 10),
      },
    }),
  ]);

  console.log("🎭 Создание категорий...");
  const [action, comedy, drama, sciFi] = await Promise.all([
    prisma.categories.create({
      data: {
        id: 1,
        name: "Action",
        description: "Action-packed movies with thrilling sequences.",
      },
    }),
    prisma.categories.create({
      data: {
        id: 2,
        name: "Comedy",
        description: "Movies that will make you laugh out loud.",
      },
    }),
    prisma.categories.create({
      data: {
        id: 3,
        name: "Drama",
        description: "Emotional movies that tell powerful stories.",
      },
    }),
    prisma.categories.create({
      data: {
        id: 4,
        name: "Sci-Fi",
        description: "Movies exploring futuristic technology and space.",
      },
    }),
  ]);

  console.log("🎬 Создание фильмов...");
  const [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10, movie11, movie12] = await Promise.all([
    prisma.movies.create({
      data: {
        title: "Inception",
        description:
          "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        release_year: 2010,
        imageUrl: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
        posterUrl: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        duration: 148,
        rating: 8.8,
        releaseDate: new Date("2010-07-16"),
        country: "USA",
        slogan: "Your mind is the scene of the crime.",
        director: "Christopher Nolan",
        script: "Christopher Nolan",
        producer: "Emma Thomas",
        composer: "Hans Zimmer",
        budget: "$160 million",
        boxOffice: "$829.9 million",
        ageRating: "PG-13",
        durationText: "2h 28m",
      },
    }),
    prisma.movies.create({
      data: {
        title: "The Godfather",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        release_year: 1972,
        imageUrl: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg",
        posterUrl: "https://image.tmdb.org/t/p/original/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
        duration: 175,
        rating: 9.2,
        releaseDate: new Date("1972-03-24"),
        country: "USA",
        slogan: "An offer you can't refuse.",
        director: "Francis Ford Coppola",
        script: "Mario Puzo, Francis Ford Coppola",
        producer: "Albert S. Ruddy",
        composer: "Nino Rota",
        budget: "$6 million",
        boxOffice: "$246 million",
        ageRating: "R",
        durationText: "2h 55m",
      },
    }),
    prisma.movies.create({
      data: {
        title: "The Matrix",
        description:
          "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        release_year: 1999,
        imageUrl: "https://image.tmdb.org/t/p/w500/9p2YmJpV8t6dN5eQOJGZjYVj2la.jpg",
        posterUrl: "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1V9rRAsTtFpHjW8.jpg",
        duration: 136,
        rating: 8.7,
        releaseDate: new Date("1999-03-31"),
        country: "USA",
        slogan: "Welcome to the Real World.",
        director: "Lana Wachowski, Lilly Wachowski",
        script: "Lilly Wachowski, Lana Wachowski",
        producer: "Lana Wachowski, Lilly Wachowski",
        composer: "James Horner",
        budget: "$93 million",
        boxOffice: "$1.02 billion",
        ageRating: "R",
        durationText: "2h 16m",
      },
    }),
    prisma.movies.create({
      data: {
        title: "The Shawshank Redemption",
        description:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        release_year: 1994,
        imageUrl: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVRW0u5kK8cxf.jpg",
        posterUrl: "https://image.tmdb.org/t/p/original/udDclJ61fb0zFQZb0VLqY1hEvjL.jpg",
        duration: 142,
        rating: 9.3,
        releaseDate: new Date("1994-09-23"),
        country: "USA",
        slogan: "Fear can hold you prisoner. Hope can set you free.",
        director: "Frank Darabont",
        script: "Stephen King",
        producer: "Frank Darabont",
        composer: "John Williams",
        budget: "$15 million",
        boxOffice: "$28.7 million",
        ageRating: "R",
        durationText: "2h 22m",
      },
    }),
    prisma.movies.create({
      data: {
        title: "The Dark Knight",
        description: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham.",
        release_year: 2008,
        imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        posterUrl: "https://image.tmdb.org/t/p/original/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
        duration: 152,
        rating: 9.0,
        releaseDate: new Date("2008-07-18"),
        country: "USA",
        slogan: "Why So Serious?",
        director: "Christopher Nolan",
        script: "Jonathan Nolan, Christopher Nolan",
        producer: "Emma Thomas",
        composer: "Hans Zimmer, James Newton Howard",
        budget: "$185 million",
        boxOffice: "$1.005 billion",
        ageRating: "PG-13",
        durationText: "2h 32m",
      },
    }),
    prisma.movies.create({
      data: {
        title: "Pulp Fiction",
        description:
          "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        release_year: 1994,
        imageUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        posterUrl: "https://image.tmdb.org/t/p/original/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
        duration: 154,
        rating: 8.9,
        releaseDate: new Date("1994-10-14"),
        country: "USA",
        slogan: "Just because you are a character doesn't mean you have character.",
        director: "Quentin Tarantino",
        script: "Quentin Tarantino, Roger Avary",
        producer: "Lawrence Bender",
        composer: "Various Artists",
        budget: "$8 million",
        boxOffice: "$213.9 million",
        ageRating: "R",
        durationText: "2h 34m",
      },
    }),
    prisma.movies.create({
      data: {
        title: "Forrest Gump",
        description:
          "The presidencies of Kennedy and Johnson, the Vietnam War, and other history unfold through the perspective of an Alabama man.",
        release_year: 1994,
        imageUrl: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
        posterUrl: "https://image.tmdb.org/t/p/original/6j7ewQOuJ38Y5QWgE77fHJz4lV3.jpg",
        duration: 142,
        rating: 8.8,
        releaseDate: new Date("1994-07-06"),
        country: "USA",
        slogan: "Life is like a box of chocolates...",
        director: "Robert Zemeckis",
        script: "Eric Roth",
        producer: "Wendy Finerman",
        composer: "Alan Silvestri",
        budget: "$55 million",
        boxOffice: "$678 million",
        ageRating: "PG-13",
        durationText: "2h 22m",
      },
    }),
    prisma.movies.create({
      data: {
        title: "The Shawshank Redemption",
        description:
          "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        release_year: 1994,
        imageUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        posterUrl: "https://image.tmdb.org/t/p/original/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
        duration: 142,
        rating: 9.3,
        releaseDate: new Date("1994-09-23"),
        country: "USA",
        slogan: "Fear can hold you prisoner. Hope can set you free.",
        director: "Frank Darabont",
        script: "Frank Darabont",
        producer: "Niki Marvin",
        composer: "Thomas Newman",
        budget: "$25 million",
        boxOffice: "$58.3 million",
        ageRating: "R",
        durationText: "2h 22m",
      },
    }),
    prisma.movies.create({
      data: {
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        release_year: 2014,
        imageUrl: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        posterUrl: "https://image.tmdb.org/t/p/original/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
        duration: 169,
        rating: 8.6,
        releaseDate: new Date("2014-11-07"),
        country: "USA",
        slogan: "Mankind was born on Earth. It was never meant to die here.",
        director: "Christopher Nolan",
        script: "Jonathan Nolan, Christopher Nolan",
        producer: "Emma Thomas",
        composer: "Hans Zimmer",
        budget: "$165 million",
        boxOffice: "$701.8 million",
        ageRating: "PG-13",
        durationText: "2h 49m",
      },
    }),
    prisma.movies.create({
      data: {
        title: "Fight Club",
        description: "An insomniac office worker and a soap maker form an underground fight club that evolves into something much more.",
        release_year: 1999,
        imageUrl: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
        posterUrl: "https://image.tmdb.org/t/p/original/811DjJTon9gD6hZ8nCjSitaIXFQ.jpg",
        duration: 139,
        rating: 8.8,
        releaseDate: new Date("1999-10-15"),
        country: "USA",
        slogan: "Mischief. Mayhem. Soap.",
        director: "David Fincher",
        script: "Jim Uhls",
        producer: "Art Linson",
        composer: "The Dust Brothers",
        budget: "$63 million",
        boxOffice: "$101.2 million",
        ageRating: "R",
        durationText: "2h 19m",
      },
    }),
    prisma.movies.create({
      data: {
        title: "The Matrix",
        description:
          "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        release_year: 1999,
        imageUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        posterUrl: "https://image.tmdb.org/t/p/original/aOYHRzGyzMuBkOyJGQbSxaSeTKc.jpg",
        duration: 136,
        rating: 8.7,
        releaseDate: new Date("1999-03-31"),
        country: "USA",
        slogan: "Welcome to the Real World.",
        director: "The Wachowskis",
        script: "The Wachowskis",
        producer: "Joel Silver",
        composer: "Don Davis",
        budget: "$63 million",
        boxOffice: "$466.3 million",
        ageRating: "R",
        durationText: "2h 16m",
      },
    }),
    prisma.movies.create({
      data: {
        title: "Gladiator",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
        release_year: 2000,
        imageUrl: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        posterUrl: "https://image.tmdb.org/t/p/original/6WfGoQP1x8TylxzF3U4z1NlV8Np.jpg",
        duration: 155,
        rating: 8.5,
        releaseDate: new Date("2000-05-05"),
        country: "USA",
        slogan: "A Hero Will Rise.",
        director: "Ridley Scott",
        script: "David Franzoni, John Logan, William Nicholson",
        producer: "Douglas Wick",
        composer: "Hans Zimmer, Lisa Gerrard",
        budget: "$103 million",
        boxOffice: "$460.5 million",
        ageRating: "R",
        durationText: "2h 35m",
      },
    }),
  ]);

  console.log("🎭 Создание актеров...");
  const [actor1, actor2, actor3, actor4] = await Promise.all([
    prisma.actor.create({
      data: {
        name: "Actor One",
        career: "Leading roles",
        birthPlace: "New York",
        totalMovies: 10,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Actor Two",
        career: "Supporting roles",
        birthPlace: "Los Angeles",
        totalMovies: 5,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Actor Three",
        career: "Leading roles",
        birthPlace: "London",
        totalMovies: 8,
      },
    }),
    prisma.actor.create({
      data: {
        name: "Actor Four",
        career: "Supporting roles",
        birthPlace: "Paris",
        totalMovies: 6,
      },
    }),
  ]);

  console.log("🔗 Связывание актеров с фильмами...");
  await prisma.movieActor.createMany({
    data: [
      { movieId: movie1.id, actorId: actor1.id, role: "Protagonist" },
      { movieId: movie2.id, actorId: actor1.id, role: "Protagonist" },
      { movieId: movie3.id, actorId: actor2.id, role: "Protagonist" },
      { movieId: movie4.id, actorId: actor3.id, role: "Protagonist" },
      { movieId: movie5.id, actorId: actor4.id, role: "Protagonist" },
      { movieId: movie5.id, actorId: actor3.id, role: "Protagonist" },
      { movieId: movie6.id, actorId: actor1.id, role: "Protagonist" },
      { movieId: movie6.id, actorId: actor4.id, role: "Protagonist" },
      { movieId: movie7.id, actorId: actor1.id, role: "Protagonist" },
      { movieId: movie8.id, actorId: actor1.id, role: "Protagonist" },
      { movieId: movie9.id, actorId: actor2.id, role: "Protagonist" },
      { movieId: movie10.id, actorId: actor3.id, role: "Protagonist" },
      { movieId: movie11.id, actorId: actor4.id, role: "Protagonist" },
      { movieId: movie12.id, actorId: actor1.id, role: "Protagonist" },
    ],
  });

  console.log("🔗 Привязка фильмов к категориям...");
  await prisma.moviesCategories.createMany({
    data: [
      { movieId: movie1.id, categoryId: action.id },
      { movieId: movie2.id, categoryId: comedy.id },
      { movieId: movie3.id, categoryId: sciFi.id },
      { movieId: movie4.id, categoryId: drama.id },
      { movieId: movie5.id, categoryId: action.id },
      { movieId: movie6.id, categoryId: sciFi.id },
      { movieId: movie7.id, categoryId: action.id },
      { movieId: movie8.id, categoryId: comedy.id },
      { movieId: movie9.id, categoryId: sciFi.id },
      { movieId: movie10.id, categoryId: action.id },
      { movieId: movie11.id, categoryId: sciFi.id },
      { movieId: movie12.id, categoryId: action.id },
    ],
  });

  console.log("📌 Добавление избранного фильма...");
  await prisma.featuredMovie.create({
    data: {
      movieId: movie3.id,
    },
  });

  console.log("🏠 Создание домашней секции...");
  const [homepageSection1, homepageSection2, homepageSection3] = await Promise.all([
    prisma.homepageSection.create({
      data: {
        title: "Top Sci-Fi Movies",
        sortOrder: 1,
        movieLimit: 5,
        categoryId: sciFi.id,
      },
    }),
    prisma.homepageSection.create({
      data: {
        title: "Comedy Movies",
        sortOrder: 2,
        movieLimit: 3,
        categoryId: comedy.id,
      },
    }),
    prisma.homepageSection.create({
      data: {
        title: "Action Movies",
        sortOrder: 3,
        movieLimit: 4,
        categoryId: action.id,
      },
    }),
  ]);

  await prisma.homepageSectionMovie.createMany({
    data: [
      { homepageSectionId: homepageSection1.id, movieId: movie1.id },
      { homepageSectionId: homepageSection1.id, movieId: movie2.id },
      { homepageSectionId: homepageSection1.id, movieId: movie3.id },
      { homepageSectionId: homepageSection1.id, movieId: movie4.id },
      { homepageSectionId: homepageSection1.id, movieId: movie5.id },
      { homepageSectionId: homepageSection1.id, movieId: movie6.id },
      { homepageSectionId: homepageSection1.id, movieId: movie7.id },
      { homepageSectionId: homepageSection1.id, movieId: movie8.id },
      { homepageSectionId: homepageSection1.id, movieId: movie9.id },
      { homepageSectionId: homepageSection1.id, movieId: movie10.id },
      { homepageSectionId: homepageSection1.id, movieId: movie11.id },
      { homepageSectionId: homepageSection1.id, movieId: movie12.id },
      { homepageSectionId: homepageSection2.id, movieId: movie1.id },
      { homepageSectionId: homepageSection2.id, movieId: movie2.id },
      { homepageSectionId: homepageSection2.id, movieId: movie3.id },
      { homepageSectionId: homepageSection2.id, movieId: movie4.id },
      { homepageSectionId: homepageSection2.id, movieId: movie5.id },
      { homepageSectionId: homepageSection3.id, movieId: movie1.id },
      { homepageSectionId: homepageSection3.id, movieId: movie2.id },
      { homepageSectionId: homepageSection3.id, movieId: movie3.id },
      { homepageSectionId: homepageSection3.id, movieId: movie4.id },
      { homepageSectionId: homepageSection3.id, movieId: movie5.id },
    ],
  });

  console.log("🌟 Добавление рецензии...");
  await prisma.reviews.create({
    data: {
      movieId: movie1.id,
      userId: user1.id,
      rating: 9.0,
      comment: "Amazing action and effects!",
    },
  });

  console.log("📌 Добавление в закладки...");
  await prisma.bookmarkedMovies.create({
    data: {
      movieId: movie1.id,
      userId: user1.id,
    },
  });

  console.log("✅ Отметка о просмотре...");
  await prisma.watchedMovies.create({
    data: {
      movieId: movie1.id,
      userId: user1.id,
    },
  });

  console.log("👥 Подписка пользователя...");
  await prisma.followers.create({
    data: {
      userId: user2.id,
      followerId: user1.id,
    },
  });

  console.log("✅ Заполнение завершено.");
}

main()
  .catch((e) => {
    console.error("❌ Ошибка в процессе:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
