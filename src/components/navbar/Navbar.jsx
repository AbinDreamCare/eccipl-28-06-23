import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isTopofPage, setIsTopofPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsTopofPage(true);
      }
      if (window.pageYOffset !== 0) {
        setIsTopofPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarBackground = isTopofPage
    ? "bg-transparent  text-white font-bold "
    : "bg-white  text-gray-700 font-bold drop-shadow-xl";


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);



  // const handleContactClick = () => {
  //   const contactSection = document.getElementById("contact");
  //   contactSection.scrollIntoView({ behavior: "smooth" });
  // };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const yOffset = -80; // Adjust this value to offset the scroll position as needed
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      // Contact section not found on current page, navigate to home page and scroll to contact section
      window.location.href = "/#contact";
    }
  };
  

  const isActivePage = (pathname) => {
    return router.pathname === pathname;
  };
  return (
    <div className="relative">
      <div
      className={`${navbarBackground} h-16 fixed w-full top-0 z-50  `}
    >
      <div className="flex justify-between h-full w-full items-center px-5">
        <div>
        <Link href="/">
          <h1 className="text-base  font-sans">
            Engineering Creations Consultancy (I) Pvt. Ltd.
          </h1>
        </Link>
        </div>
        <div className="sm:hidden">
          <button
            className="outline-none focus:outline-none z-40"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke={`${isTopofPage ? 'white' : 'gray'}`}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden sm:flex space-x-6 text-base font-thin list-none">
          
          <ul className=" flex space-x-6 text-base font-thin">
          <li className={`navList ${isActivePage("/") ? "active-nav" : ""}`}>
              <Link  href="/">
                Home
              </Link>
            </li>
            <li
                className={`navList ${
                  isActivePage("/portfolio") ? "active-nav" : ""
                }`}
              >
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li
                className={`navList ${
                  isActivePage("/services") ? "active-nav" : ""
                }`}
              >
              <a href="">Services</a>
            </li>
            <li
                className={`navList ${
                  isActivePage("/about") ? "active-nav" : ""
                }`}
              >
              <Link href="/about">About</Link>
            </li>
            <li className="navList">
              <a href="#contact" onClick={handleContactClick}>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`sm:hidden absolute  top-0 right-0 w-full bg-black bg-opacity-90 text-white ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col justify-center space-y-4 text-3xl font-thin w-full text-center h-screen  mt-5 ">
          <Link href="/">
            <li onClick={toggleMenu}>Home</li>
          </Link>
          <Link href="/portfolio">
            <li onClick={toggleMenu}>Portfolio</li>
          </Link>
          <Link href="/">
            <li onClick={toggleMenu}>Services</li>
          </Link>
          <Link href="/about">
            <li onClick={toggleMenu}>About</li>
          </Link>
          <Link href="#contact">
            <li onClick={handleContactClick}>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
