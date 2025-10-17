import Image from "next/image";
import Title from "./title";

const About = ({ id }) => {
  return (
    <div id={id} className="my-14">
      <Title title="About"/>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
        <p className="grow font-quicksand text-xl text-textDark md:w-1/2">
          I am a full-stack developer specializing in desktop applications and backend development with .NET
          <br />
          Additionally, I do automations in python and learn mathematics as a hobby. I love to learn and adapt
          to new technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
