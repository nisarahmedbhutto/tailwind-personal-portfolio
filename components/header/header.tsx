"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex justify-between px-4 md:px-20 h-16 items-center bg-sky-200">
        <div>
          <h1 className="text-2xl md:text-3xl text-white font-bold">
            Personal <span className="text-black">Portfolio</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className=" md:flex hidden justify-center items-center gap-5">
          <ol className="flex justify-center items-center gap-8 font-bold">
            <li className="hover:text-red-400">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-red-400">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-red-400">
              <Link href="/contect">Contect</Link>
            </li>
            <li className="hover:text-red-400">
              <Link href="/projects">Projects</Link>
            </li>
          </ol>
        </div>

        {/* Hamburger Icon */}
        <div className="flex md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 w-full font-bold bg-sky-200 flex flex-col items-center gap-5 py-4 md:hidden">
            <li >
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li >
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li >
              <Link href="/contect" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li >
              <Link href="/projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
          </ul>
        )}
      </header>
    </>
  );
}
