import Navbar from "ui/navbar";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}