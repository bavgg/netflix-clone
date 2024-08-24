import { getTop250MoviesPages } from "api/data";

export async function getStaticProps() {

  const totalPages = await getTop250MoviesPages();

  return {
    props: {
      totalPages,
    },
  }
}