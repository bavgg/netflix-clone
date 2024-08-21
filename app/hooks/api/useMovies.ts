import useSWR from "swr";
import fetcher from "@/utils/fetcher";

interface Movie {
  _id: string;
  items: {
    id: string;
    rank: string;
    title: string;
    fullTitle: string;
    year: string;
    image: string;
    crew: string;
    imDbRating: string;
    imDbRatingCount: string;
  }[];
}

export function useTop250Movies() {
  const { data, error, isLoading } = useSWR<Movie[]>(
    "http://localhost:3000/api/top_movies",
    fetcher,
    {
      refreshInterval: 2000,
    }
  );

  return { data, error, isLoading };
}

export function useTop250TVs() {
  const { data, error, isLoading } = useSWR<Movie[]>(
    "http://localhost:3000/api/top_tvs",
    fetcher,
    {
      refreshInterval: 2000,
    }
  );

  return { data, error, isLoading };
}

export function useMostPopularMovies() {
  const { data, error, isLoading } = useSWR<Movie[]>(
    "http://localhost:3000/api/movies/top250",
    fetcher,
    {
      refreshInterval: 2000,
    }
  );

  return { data, error, isLoading };
}

export function useMostPopularTVs() {
  const { data, error, isLoading } = useSWR<Movie[]>(
    "http://localhost:3000/api/popular_tvs",
    fetcher,
    {
      refreshInterval: 2000,
    }
  );

  return { data, error, isLoading };
}


