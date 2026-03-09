import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  
//   const location = useLocation();
//   const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };
    const handleResize = () => {
        if (window.innerWidth < 768) {
          setShowSidebar(false);
        } else {
          setShowSidebar(true);
        }
    };
    handleResize();

    window.addEventListener("resize", handleResize);


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
    className={`border-b-[1px] fixed top-0 left-0 right-0 z-50 p-4 transition-colors ${
      scrollBackground ? "bg-white" : "bg-transparent"
    }`}
  >
        <nav className="bg-white flex items-center justify-between">
      <div className="font-bold text-white">Logo</div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none focus:text-black"
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={!isMenuOpen ? 'block' : 'hidden'}
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={isMenuOpen ? 'hidden' : 'block'}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="md:flex md:items-center">
          <li className="mr-4">
            <a href="#" className="text-blueBlack hover:text-orange-500">
              Home
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-blueBlack hover:text-orange-500">
              About
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-blueBlack hover:text-orange-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-blueBlack hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>

    </header>
   
  );
};

export default Navbar;