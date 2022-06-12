import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex self-stretch items-center justify-end  px-4 mx-auto sm:px-6 lg:px-8 h-16">
      <nav className="hidden md:block" aria-labelledby="header-navigation">
        <h2 className="sr-only" id="header-navigation">
          Header navigation
        </h2>

        <ul className="text-lg font-quicksand flex items-center gap-6 text-white">
          <li>
            <Link href="#about">
              <a className="transition hover:text-white/75">About</a>
            </Link>
          </li>

          <li>
            <Link href="#skills">
              <a className="transition hover:text-white/75">Skills</a>
            </Link>
          </li>

          <li>
            <Link href="#projects">
              <a className="transition hover:text-white/75">Projects</a>
            </Link>
          </li>

          <li>
            <Link href="#blog">
              <a className="transition hover:text-white/75">Blog</a>
            </Link>
          </li>

          <li>
            <Link href="#contact">
              <a className="transition hover:text-white/75">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="block md:hidden">
        <button className="p-2 text-white transition rounded hover:text-white/75">
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
  );
};

export default Navbar;
