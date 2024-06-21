import Image from "next/image";
import Title from "./title";

const About = ({ id }) => {
  return (
    <div id={id} className="my-14">
      <Title title="About"/>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
        <p className="grow font-quicksand text-xl text-textDark md:w-1/2">
          I am a .NET developer specializing in desktop applications, and I am an aspiring backend engineer.
          <br />
          Additionally, I do automations in python and learn mathematics as a hobby. I love to learn and adapt
          to new technologies.
        </p>
        <div className="relative mx-10 mt-5  md:-mt-12">
          <Image src="/logo.png" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default About;
