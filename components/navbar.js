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
    name: "Blogs",
    href: "blogs",
  },
  {
    name: "Contacts",
    href: "contacts",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <>
      <div className="flex sticky top-0 z-[1000] bottom-16 w-full items-center px-4 mx-auto min-w-[450px]">
        <nav
          className="hidden md:block z-10 w-full py-4 h-16"
          aria-labelledby="header-navigation"
        >
          <h2 className="sr-only" id="header-navigation">
            Header Navigation
          </h2>

          <ul className="text-lg font-quicksand flex justify-end items-center gap-6 text-white">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link href={"#" + item.href}>
                  <a className="transition hover:text-white/75">{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden flex justify-end w-full h-16">
          <button
            data-collapse-toggle="mobile-menu"
            onClick={showMenu}
            className="p-0 text-white transition rounded hover:text-white/75"
          >
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
                d={show ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {show ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="w-full fixed z-10"
        >
          <nav className="md:hidden" aria-labelledby="header-navigation">
            <h2 className="sr-only" id="header-navigation">
              Header navigation
            </h2>

            <ul className="text-lg font-quicksand gap-6 text-center text-white px-10">
              {navItems.map((item, i) => (
                <li className="py-2" key={i}>
                  <Link href={"#" + item.href}>
                    <a className="transition hover:text-white/75"  onClick={() => setShow(false)}>
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      ) : null}
    </>
  );
};

export default Navbar;
