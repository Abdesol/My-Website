import Image from "next/image";
import Title from "./title";

const About = ({ id }) => {
  return (
    <div id={id} className="my-14">
      <Title title="About"/>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
        <p className="grow font-quicksand text-xl text-textDark md:w-1/2">
          I am a 17 years old programmer since July 2020 and I have been working
          with many programming languages and frameworks.
          <br />
          Additionally, I do mathematics stuff in my free time and more
          specifically, I am focused on Artifical Intelligence and machine
          learning. I love to learn new things and adapt to new technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
