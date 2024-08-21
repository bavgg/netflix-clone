
import Footer from "../components/Footer";
import Logo from "../components/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      

      <section className="  text-white h-full bg-cover z-0 relative bg-black bg-top min-h-[900px]">
        <img className=" hidden sm:block absolute z-[-1] opacity-50 object-cover object-center h-full w-full" alt="background" src='https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/799a407c-96c1-4276-9a16-124e46d15a18/PH-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b7a4035b-24b2-4753-8c53-4e09db8c0a7c_small.jpg'/>
        <header className="p-6 sm:px-8 lg:mx-auto lg:max-w-[83%]">
            <div className=" z-10">
            <div className="h-6 md:h-10 ">
                <Logo fill="var(--accent)" width="auto" height="100%" />
            </div>
            </div>
        </header>
        {children}
        <div className="w-full absolute bottom-0 bg-black border-t border-x-0 border-b-0  border-[#5E5E5E]">
            <Footer />
        </div>
      </section>
    </>
  );
}
