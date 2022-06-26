import Image from "next/image";
import React, { FC } from "react";

const Contactbutton = ({ link, name, icon, marginLeft }) => {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className={`items-center hidden px-5 py-2 mt-10 ${marginLeft} duration-100 border-2 rounded-lg fill-current md:flex border-neon text-neon hover:scale-110`}
      >
        <Image src={`/logos/${icon}`} alt={name} width={25} height={25} />
        <span className="ml-2">{name}</span>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className={`flex items-center mt-10 duration-100 rounded-lg fill-current ${marginLeft} md:hidden text-neon`}
      >
        <Image src={`/logos/${icon}`} alt={name} width={25} height={25} />
      </a>
    </div>
  );
};

export default Contactbutton;
