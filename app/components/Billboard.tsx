"use client";

import Image from "next/image";
import { useMostPopularMovies } from "hooks/api/useMovies";
import { PaginationContext } from "contexts/PaginationContext";
import { useContext, useEffect } from "react";
import Pagination from "./Pagination";
import { Star, PlayArrow } from "@mui/icons-material";

function Billboard() {
  const { data, error, isLoading } = useMostPopularMovies();

  const context = useContext(PaginationContext);
  if (!context) throw new Error("Provide cotext first");
  const { setTotalPages, contentPerPage, currentPage } = context;
  
  useEffect(() => {
    if(data) {
      const dataLength = data[0].items.length;
      const totalPages = Math.ceil(dataLength / contentPerPage);
      setTotalPages(totalPages);
    }
  });

  const start = (currentPage - 1) * contentPerPage;
  const end = start + contentPerPage;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error: Unable to load movie</div>;
  }

  function handleLink() {
    window.location.href = atob("aHR0cDovL2V4YW1wbGUuY29t");
    return false;
  }
  return (
    <>
      <div className=" p-4 grid grid-cols-[repeat(3,minmax(130px,1fr))] sm:grid-cols-[repeat(5,minmax(130px,1fr))] md:grid-cols-[repeat(7,minmax(130px,1fr))] lg:grid-cols-[repeat(9,minmax(130px,1fr))] gap-4">
        {data[0].items.slice(start, end).map((item) => (
          // card item
          <div key={item.id} className="w-full h-[330px] text-base flex flex-col">
            <Image src={item.image} alt="image" height={90} width={90}  className="w-full h-[200px] object-cover object-center"/>
            
            <div className="p-2 relative flex flex-col  flex-1">
              <div className="flex gap-6 text-sm">
              
                <div className="flex gap-1 items-center">
                  <Star fontSize="inherit" className="text-[var(--accent)] "/>
                  <div>{item.imDbRating}</div>
                </div>
              
                <div>{item.year}</div>
              </div>
              
              <div className=" text-sm">{item.fullTitle}</div>
              
              <div className=" mt-auto">
                <div className="mt-auto flex gap-1 cursor-pointer bg-[var(--accent)] text-white w-full px-1 rounded-sm">
                  <PlayArrow className=" w-5"/>
                  <button className=" whitespace-nowrap text-sm">Watch now</button>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <Pagination />
      {/* https://multiembed.mov/directstream.php?video_id=tt0012349 */}
      {/* <iframe
          width="560"
          height="315"
          src="https://streambucket.net/vipstream2.php?token=TEdLVFFDS0d2N1ZDc2NPeFdCbDhPVXpnVS92Q3JBdkZQNnF2NFVNcms4S0xsenhNeTJaaW1FenNrWG41VGlOc0pmSUo="
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
    </>
  );
}

export default Billboard;
