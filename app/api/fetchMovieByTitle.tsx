export async function fetchMovieByTitle(title: string) {
  const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`);
  const data = await response.json();
  return data;
}
