import { getFilteredTop250Movies } from "api/data";
import React from "react";
import Image from "next/image";
import { Star, PlayArrow } from "@mui/icons-material";
import Link from "next/link";


async function Movies({ currentPage }: { currentPage: number }) {
  console.log("🚀 ~ Movies ~ currentPage:", currentPage)
  const data = await getFilteredTop250Movies(currentPage);

  
  return (
    <>
      <div className=" p-4 grid grid-cols-[repeat(3,minmax(130px,1fr))] sm:grid-cols-[repeat(5,minmax(130px,1fr))] md:grid-cols-[repeat(7,minmax(130px,1fr))] lg:grid-cols-[repeat(9,minmax(130px,1fr))] gap-4">
        {data &&
          data.map((item) => (
            // card item
            <div
              key={item.id}
              className="w-full h-[365px] text-base flex flex-col"
            >
              <Image
                src={item.image}
                alt="image"
                height={90}
                width={90}
                className="w-full h-[200px] object-cover object-center"
              />

              <div className="p-2 relative flex flex-col  flex-1">
                <div className="flex gap-6 text-sm">
                  <div className="flex gap-1 items-center">
                    <Star
                      fontSize="inherit"
                      className="text-[var(--accent)] "
                    />
                    <div>{item.imDbRating}</div>
                  </div>

                  <div>{item.year}</div>
                </div>

                <div className=" text-sm">{item.fullTitle}</div>

                <div className=" mt-auto">
                  <Link
                    href={`/movies/${item.id}`}
                    className="mt-auto flex gap-1 cursor-pointer bg-[var(--accent)] text-white w-full px-1 rounded-sm"
                  >
                    <PlayArrow className=" w-5" />
                    <button className=" whitespace-nowrap text-sm">
                      Watch now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

    </>
  );
}

export default Movies;
