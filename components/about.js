import Image from "next/image";
import Navbar from "./navBar";
import Title from "./title";

const About = ({ id }) => {
  return (
    <div id={id}>
      <Title title="About"/>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
        <p className="mt-10 grow font-quicksand text-xl text-textDark md:w-1/2">
          I am a 17 years old programmer since July 2020 and I have been workin
          with many programming languages and frameworks.
          <br />
          Additionally, I do mathematics stuff in my free time and more
          specifically, I am focused on Artifical Intelligence and machine
          learning. I love to learn new things and adapt to new technologies.
        </p>
        <div className="relative mx-10 mt-5  md:-mt-12">
          <Image src="/logo.png" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default About;
