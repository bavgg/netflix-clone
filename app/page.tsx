import Image from "next/image";
import Navbar from "./components/Navbar";
import Billboard from "components/Billboard";

import { PaginationProvider } from "contexts/PaginationContext";

export default function Home() {
  return (
    <PaginationProvider>
      <Navbar />
      <Billboard />
    </PaginationProvider>
  );
}
