const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <img src="/Images/Logo.avif" alt="Logo" className="h-8 w-24" />
      </div>
      <div>
        <button className="text-black px-4 py-2 rounded-xl hover:bg-black hover:text-white font-semibold">
          Try Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
