import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "About",
    href: "about",
  },
  {
    name: "Skills",
    href: "skills",
  },
  {
    name: "Projects",
    href: "projects",
  },
  {
    name: "Blog",
    href: "blog",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  }

  const variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
    }
  }
 
  return (
    <>
    <div className="flex fixed top-0 bottom-10 self-stretch items-center px-4 mx-auto h-16">
      <nav className="hidden md:block justify-end z-10 w-screen py-4" aria-labelledby="header-navigation">
        <h2 className="sr-only" id="header-navigation">
          Header Navigation
        </h2>

        <ul className="text-lg font-quicksand flex items-center gap-6 text-white">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link href={"#" + item.href}>
                <a className="transition hover:text-white/75">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-screen justify-end right-5 md:hidden ">
        <button onClick={showMenu} className="p-2 text-white transition rounded hover:text-white/75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    { show ? (
    <motion.div initial="hidden" animate="visible" variants={variants} className="fixed w-screen z-10 top-0">
      <nav className="md:hidden" aria-labelledby="header-navigation">
        <h2 className="sr-only" id="header-navigation">
          Header navigation
        </h2>

        <ul className="text-lg font-quicksand gap-6 text-center text-white px-10">
          {navItems.map((item, i) => (
            <li className="py-2" key={i}>
              <Link href={"#" + item.href}>
                <a className="transition hover:text-white/75">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>) : null}
    </>
  );
};

export default Navbar;
