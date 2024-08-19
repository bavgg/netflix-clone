function Signup() {
  return (
    <div className="p-16 bg-[rgba(0,0,0,0.7)] text-[#BAB9B9] font-light w-[500px] rounded-sm">
      <div className="text-3xl text-white font-bold mb-4">Register</div>
      <form className="flex flex-col gap-4">
        <input
          placeholder="Username"
          className="bg-[rgba(22,22,22,0.7)] border border-[#616060] px-4 py-3 rounded-sm placeholder:font-light placeholder-[#BAB9B9]"
        />
        <input
          placeholder="Email"
          className="bg-[rgba(22,22,22,0.7)] border border-[#616060] px-4 py-3 rounded-sm placeholder:font-light placeholder-[#BAB9B9]"
        />
        <input
          placeholder="Password"
          className="bg-[rgba(22,22,22,0.7)] border border-[#616060] px-4 py-3 rounded-sm placeholder:font-light placeholder-[#BAB9B9]"
        />
        <button className="py-2 text-white font-medium bg-[var(--accent)]">
          Sign Up
        </button>
        <div>
          New to Netflix? <a href="#" className=" text-white">Sign up now</a>.
        </div>
      </form>
    </div>
  );
}

export default Signup;
