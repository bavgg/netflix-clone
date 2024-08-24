"use client";
import { createContext, ReactNode, useState } from "react";

type PaginationContextType = {
  currentPage: number;
  setCurrentPage: ((value: number) => void) &
    ((value: (value: number) => number) => void);
  totalPages: number;
  setTotalPages: (value: number) => void;
  contentPerPage: number;
  setContentPerPage: (value: number) => void;
};
export const PaginationContext = createContext<
  PaginationContextType | undefined
>(undefined);

export function PaginationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [contentPerPage, setContentPerPage] = useState(18);

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        contentPerPage,
        setContentPerPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
