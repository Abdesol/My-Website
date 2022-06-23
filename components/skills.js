import Title from "./title";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  {
    path: "csharp",
    url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    path: "python",
    url: "https://www.python.org/",
  },
  {
    path: "javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    path: "avalonia",
    url: "https://avaloniaui.net/",
  },
  {
    path: "xamarin",
    url: "https://dotnet.microsoft.com/en-us/apps/xamarin",
  },
  {
    path: "maui",
    url: "https://docs.microsoft.com/en-us/dotnet/maui/",
  },
  {
    path: "fastapi",
    url: "https://fastapi.tiangolo.com/",
  },
  {
    path: "wpf",
    url: "https://docs.microsoft.com/en-us/visualstudio/designers/getting-started-with-wpf?view=vs-2022",
  },
  {
    path: "react",
    url: "https://reactjs.org/",
  },
  {
    path: "next",
    url: "https://nextjs.org/",
  },
];

const Skills = ({ id }) => {
  return (
    <div id={id} className="my-14">
      <Title title="Skills" />
      <div className="flex flex-wrap items-center justify-start">
        {skills.map((skill, i) => (
          <motion.a
            key={i}
            className="cursor-pointer relative m-4 h-12 w-12 md:h-20 md:w-20"
            href={skill.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: [1, 1.12, 1.12],
              zIndex: 1,
              transition: {
                duration: 1,
              },
            }}
          >
            <Image src={"/skills/" + skill.path + ".png"} layout="fill" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
