import axios from "axios";

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

type itemsType = {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
};
export async function extractUrl(id: string): Promise<string | undefined> {
  try {
    const url = `http://localhost:3000/api/extract-url/${id}`;
    const response = await axios.get(url);
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch data from external API");
    }

    return response.data;
  } catch (err) {
    console.error("Error fetching data");
  }
}

const ITEMS_PER_PAGE = 18;
export async function getFilteredTop250Movies(
  currentPage: number
): Promise<itemsType[] | undefined> {
  try {
    const url = `http://localhost:3000/api/movies/top250`;
    const response = await axios.get<Movie[]>(url);
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch data from external API");
    }

    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return response.data[0].items.splice(start, ITEMS_PER_PAGE);
  } catch (err) {
    console.error("Error fetching data");
  }
}

export async function getTop250MoviesPages(): Promise<number | undefined> {
  try {
    const url = `http://localhost:3000/api/movies/top250`;
    const response = await axios.get<Movie[]>(url);
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch data from external API");
    }

    return Math.ceil(response.data[0].items.length / ITEMS_PER_PAGE);
  } catch (err) {
    console.error("Error fetching data");
  }
}

export async function getMostPopularMovies(): Promise<string | undefined> {
  try {
    const url = `http://localhost:3000/api/movies/top250`;
    const response = await axios.get(url);
    if (!response || response.status !== 200) {
      throw new Error("Failed to fetch data from external API");
    }

    return response.data;
  } catch (err) {
    console.error("Error fetching data");
  }
}
