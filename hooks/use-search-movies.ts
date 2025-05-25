"use client";

import { useState, useEffect } from "react";

type SearchMovie = {
  id: number;
  title: string;
  release_year: number;
};

export const useSearchMovies = (query: string) => {
  const [results, setResults] = useState<SearchMovie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    const timeoutId = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then(setResults)
        .finally(() => setLoading(false));
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return { results, loading };
};
