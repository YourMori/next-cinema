import { NextResponse } from "next/server";
import { getMovieById } from "@/lib/getMovieById";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const movie = await getMovieById(id);
    if (!movie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }
    return NextResponse.json(movie);
  } catch (error) {
    console.error("ERROR [MovieService]", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
