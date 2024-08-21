import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <div className="lg:mx-auto lg:max-w-[83%]   p-6 relative bottom-0 text-[#B3B3B3] font-light bg-black flex flex-col gap-6  text-sm">
      <div>Questions? Contact us.</div>

      <div className="grid-cols-2 grid">
        <a href="#" className=" underline">FAQ</a>
        <a href="#" className=" underline">Help Center</a>
      </div>

      <div className="grid-cols-2 grid">
        <a href="#" className=" underline">Terms of Use</a>
        <a href="#" className=" underline">Privacy</a>
      </div>

      <div className="grid-cols-2 grid">
        <a href="#" className=" underline">Cookie Preferences</a>
        <a href="#" className=" underline">Corporate Information</a>
      </div>

      <div className="flex gap-2 text-white text-base  w-fit px-2 py-1 border-[#5E5E5E]  rounded-md font-light border">
        <span>English</span>
        <ChevronDownIcon width={'14'} />
      </div>
    </div>
  );
}

export default Footer;
