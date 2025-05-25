import { NextResponse } from "next/server";
import { getBookmarkedMovies } from "@/lib/getBookmarkedMovies";

export async function GET() {
  try {
    const movies = await getBookmarkedMovies();

    return NextResponse.json({ movies }, { status: 200 });
  } catch (error) {
    console.error("Ошибка при получении закладок:", error);
    return NextResponse.json({ movies: [] }, { status: 500 });
  }
}
