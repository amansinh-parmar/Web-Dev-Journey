const Navbar = () => {
  return (
    <>
      {/* Sticky navbar for better UX */}
      <nav className="bg-purple-500 text-white w-full sticky top-0 z-50">
        {/* Max-width container + responsive padding */}
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
          
          {/* Logo - responsive text size */}
          <div className="logo font-bold text-xl sm:text-2xl md:text-3xl">
            <span className="text-green-400">&lt;</span>
            Password
            <span className="text-green-400">Manager/&gt;</span>
          </div>

          {/* GitHub Button */}
          <a
            href="https://github.com/amansinh-parmar/Web-Dev-Journey/tree/main/Practice%20Projects/Password%20Manager"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-400 transition px-3 py-1.5 rounded-full ring-1 ring-white"
          >
            <img
              src="/icons/github.svg"
              alt="GitHub"
              className="w-5 h-5 invert"
            />
            {/* Hide text on very small screens */}
            <span className="hidden sm:block font-semibold">
              GitHub
            </span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
  