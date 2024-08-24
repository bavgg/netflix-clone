
import { getTop250MoviesPages } from "api/data";
import { Suspense } from "react";
import Movies from "ui/movies/movies";
import Pagination from "ui/movies/pagination";
import { CardSkeleton } from "ui/skeletons";
export default function Page({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const currentPage = Number(searchParams?.page || "");

  return (
    <>
      <Suspense key={currentPage}  fallback={<CardSkeleton />}>
        <Movies currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={14} />
    </>
  );
}

// import { getTop250MoviesPages } from "api/data";
// import { Suspense } from "react";
// import Movies from "ui/movies/movies";
// import Pagination from "ui/movies/pagination";
// import { CardSkeleton } from "ui/skeletons";

// export default function Page({ searchParams } : { searchParams?: { page?: string }}) {
//   const currentPage = Number(searchParams?.page || '') ;
//   // const totalPages = await getTop250MoviesPages();

//   return (
//     <>
//       <Suspense key={currentPage} fallback={<CardSkeleton />}>
//         <Movies currentPage={currentPage}/>
//       </Suspense>
//       <Pagination totalPages={14}/>
//     </>
//   );
// }
