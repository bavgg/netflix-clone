import { useContext } from "react";

import { PaginationContext } from "contexts/PaginationContext";
function Pagination() {
  const context = useContext(PaginationContext);
    if(!context) throw new Error('Set context first');
    const { totalPages, setCurrentPage, currentPage } = context;

  function handleNext() {
    setCurrentPage((previousPage: number) => {
      if (totalPages > previousPage) {
        return previousPage + 1;
      }
      return previousPage;
    });
  }
  function handlePrevious() {
    setCurrentPage((previousPage: number) => {
      if (previousPage > 1) {
        return previousPage - 1;
      }
      return previousPage;
    });
  }

  function handleButton(page: number) {
    setCurrentPage(page);
  }
  return (
    <div className="flex gap-1 mt-4 fixed bottom-0">
      {/* back */}
      <button
        onClick={handlePrevious}
        className="px-4 border border-[inherit] rounded-md"
      >
        Back
      </button>

      {/* buttons */}
      {[...Array(totalPages).keys()].map((key) => (
        <button
          onClick={() => handleButton(key + 1)}
          key={key}
          style={
            currentPage === key + 1
              ? { backgroundColor: "#E50815", color: "white" }
              : {}
          }
          className={` px-4 border border-[inherit] rounded-md`}
        >
          {key + 1}
        </button>
      ))}

      {/* next */}
      <button
        onClick={handleNext}
        className="px-4 border border-[inherit] rounded-md"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
