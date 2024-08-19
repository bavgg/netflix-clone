function Signin() {
  return (
    <div className="sm:mx-auto mb-12 sm:px-16 mx-0  p-6 bg-[rgba(0,0,0,0.7)] z-10 text-[#BAB9B9] font-light sm:w-[450px] w-full rounded-sm">
      <div className="text-3xl text-white font-bold mb-4">Sign In</div>
      <form className="flex flex-col gap-4">
        <input
          placeholder="Email or mobile number"
          className=" bg-[rgba(22,22,22,0.7)] border border-[#616060] px-4 py-3 rounded-sm placeholder:font-light placeholder-[#BAB9B9]"
        />
        <input
          placeholder="Password"
          className="bg-[rgba(22,22,22,0.7)] border border-[#616060] px-4 py-3 rounded-sm placeholder:font-light placeholder-[#BAB9B9]"
        />
        <button className="py-2 text-white font-medium bg-[var(--accent)]">Sign In</button>
        <div>
          New to Netflix? <a href="#" className="text-white">Sign up now</a>.
        </div>
      </form>
    </div>
  );
}

export default Signin;
