import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json([], { status: 200 });
  }

  try {
    const results = await prisma.movies.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        },
      },
      take: 10,
      select: {
        id: true,
        title: true,
        release_year: true,
      },
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
