import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const [scrollBackground, setScrollBackground] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  
// useEffect(() => {
//   const timer = setInterval(nextSlide, 5000);
//   return () => clearInterval(timer);
// }, [nextSlide]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollBackground(window.scrollY > 0);
    };

    const handleResize = () => {
      setShowMenu(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className={`border-b-[1px] fixed top-0 left-0 right-0 z-50 p-4 transition-colors ${scrollBackground ? "bg-white" : "bg-transparent"
        }`} >

      <div className="flex justify-between mr-[15%]">
        
        <div className="flex  justify-between w-1/4 ">
          <div className="flex justify-between ">
            <img
              className="h-[3rem] w-auto mt-1"
              src="assets/logo.jpg"
              alt="Logo"
            />
            <div className="flex flex-col ml-[1rem]">
              <h1 className={`font-bold ${scrollBackground ? 'text-blueBlack' : location.pathname === "/" ? "text-white" : 'text-blueBlack'
                }`}>Amon IT</h1>
              <h1 className={`font-bold display-inline-block m-0 ${scrollBackground ? 'text-blueBlack' : location.pathname === "/" ? "text-white" : 'text-blueBlack'
                }`}>Solution</h1>
            </div>
          </div>
        </div>


        <div className="flex justify-between">
          <div
            className="cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} className={`${scrollBackground ? 'text-blueBlack' : location.pathname === "/" ? "text-white" : 'text-blueBlack'
                }`}/>
          </div>

          {showMenu && (
            <nav className="md:hidden">

              {/* Dropdown menu */}

              <div className="bg-darkBlue w-48 mt-1 shadow-md rounded-md">
                <ul className="py-2 text-white">
                  <li className="border-b-[0.5px] pl-[0.5rem] py-[0.5rem]"><a href="/" className=" hover:text-orange-500">Home</a></li>
                  <li className="border-b-[0.5px] pl-[0.5rem] py-[0.5rem]"> <a href="/about" className="hover:text-orange-500 py-[0.5rem]">About us</a></li>
                  <li className="border-b-[0.5px] pl-[0.5rem] py-[0.5rem]"> <a href="/services" className="hover:text-orange-500 py-[0.5rem]">Service</a></li>
                  <li className="border-b-[0.5px] pl-[0.5rem] py-[0.5rem]"> <a href="/solutions"className="hover:text-orange-500" >Solution</a></li>
                  <li className="border-b-[0.5px] pl-[0.5rem] py-[0.5rem]"> <a href="/contact" className="hover:text-orange-500 py-[0.5rem]">Contact</a></li>
                  <li className="border-b-[0.5px] pl-[0.5rem] py-[0.5rem]"> <a href="/testimony" className="hover:text-orange-500">Testimony</a></li>
                </ul>
              </div>
            </nav>
          )}

          <div className="hidden md:flex space-x-2">
            {/* Main content code */}
              <a
                href="./"
                className={`text-blueBlack hover:text-orange-500 px-3 py-2 text-[1.15rem] font-medium text-[1.1rem] hover:border-b-[0.2rem] hover:border-b-orange-500 h-full text-black-900
                  ${location.pathname === "/"
                    ? "border-b-[0.2rem] border-b-orange-500 text-orange-500"
                    : ""
                  }`}
              >
                Home
              </a>
              <a
                href="/about"
                className={`text-blueBlack hover:text-orange-500 px-3 py-2 text-[1.15rem] font-medium text-[1.1rem] hover:border-b-[0.2rem] hover:border-b-orange-500 h-full 
                  ${location.pathname === "/" && !scrollBackground
                    ? "text-white"
                    : ""
                  }${location.pathname === "/about"
                    ? "border-b-[0.2rem] border-b-orange-500 text-orange-500"
                    : ""
                  }`}
              >
                About
              </a>
              <a
                href="/services"
                className={`text-blueBlack hover:text-orange-500 px-3 py-2 text-[1.15rem] font-medium text-[1.1rem] hover:border-b-[0.2rem] hover:border-b-orange-500 h-full
                  ${location.pathname === "/services"
                    ? "border-b-[0.2rem] border-b-orange-500 text-orange-500"
                    : ""
                  }
                  ${location.pathname === "/" && !scrollBackground
                    ? "text-white"
                    : ""
                  }`}
              >
                Services
              </a>
              <a
                href="/solutions"
                className={`text-blueBlack hover:text-orange-500 px-3 py-2 text-[1.15rem] font-medium text-[1.1rem] hover:border-b-[0.2rem] hover:border-b-orange-500 h-full
                  ${location.pathname === "/solutions"
                    ? "border-b-[0.2rem] border-b-orange-500 text-orange-500"
                    : ""
                  }
                  ${location.pathname === "/" && !scrollBackground
                    ? "text-white"
                    : ""
                  }`}
              >
                Solutions
              </a>
              <a
                href="/contact"
                className={`text-blueBlack hover:text-orange-500 px-3 py-2 text-[1.15rem] font-medium text-[1.1rem] hover:border-b-[0.2rem] hover:border-b-orange-500 h-full
                  ${location.pathname === "/contact"
                    ? "border-b-[0.2rem] border-b-orange-500 text-orange-500"
                    : ""
                  }
                  ${location.pathname === "/" && !scrollBackground
                    ? "text-white"
                    : ""
                  }`}
              >
                Contact
              </a>
              <a
                href="/testimony"
                className={`text-blueBlack hover:text-orange-500 px-3 py-2 text-[1.15rem] font-medium text-[1.1rem] hover:border-b-[0.2rem] hover:border-b-orange-500 h-full
                  ${location.pathname === "/testimony"
                    ? "border-b-[0.2rem] border-b-orange-500 text-orange-500"
                    : ""
                  }
                  ${location.pathname === "/" && !scrollBackground
                    ? "text-white"
                    : ""
                  }`}
              >
                Testimony
              </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;