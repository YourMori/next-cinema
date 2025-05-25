export async function addToBookmarks(movieId: number) {
  const res = await fetch("/api/bookmark", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ movieId }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Ошибка при добавлении в избранное");
  }

  return data;
}
