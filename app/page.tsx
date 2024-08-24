import Navbar from "./ui/navbar";


import { PaginationProvider } from "contexts/PaginationContext";

export default function Home() {
  return (
    <PaginationProvider>
      <Navbar />

    </PaginationProvider>
  );
}
