import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    zIndex: 50,
    display: "flex",
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    zIndex: 0,
    display: "none",
  },
};

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

const NavItem = () => {
  return (
    <div>
      <motion.ul
        className="flex flex-col min-h-screen pt-5 pl-10 mt-0 mb-5 -mr-10 space-y-5 list-none bg-bgblue backdrop-blur-md"
        variants={variants}
      >
        {navItems.map((item, i) => (
          <li
            key={i}
            className="border-b-2 border-transparent cursor-pointer text-text hover:border-neon"
          >
            <Link
              activeClass="active"
              to={item.href}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href={item.href}
            >
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default NavItem;
