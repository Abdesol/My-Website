import Title from "./title";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "CutCode",
    desc: "A tool for programmers to work efficently and save tons of stuff!",
    path: "cutcode",
    url: "https://github.com/Abdesol/CutCode",
  },
  {
    title: "YoChat",
    desc: "A mobile app for a room based chat.",
    path: "yochat",
    url: "https://github.com/Abdesol/YoChat",
  },
  {
    title: "Robert Assistant",
    desc: "A hackathon project that assists you with daily tasks, notes etc...",
    path: "robert",
    url: "https://github.com/Champions-clan/Robert-Assistant",
  },
  {
    title: "Notee",
    desc: "A simple mobile note app to save your notes.",
    path: "notee",
    url: "https://github.com/Abdesol/Notee",
  },
  {
    title: "Translator",
    desc: "A translator app for translating between variety of languages.",
    path: "translator",
    url: "https://github.com/Abdesol/Translator",
  },
  {
    title: "Weathera",
    desc: "A mobile app to get information about the weather status.",
    path: "weathera",
    url: "https://github.com/Abdesol/Weathera",
  },
];

const Projects = ({ id }) => {
  return (
    <div id={id} className="my-14">
      <Title title="Projects" />
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              className="cursor-pointer relative m-2"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: [1, 1.02, 1.02],
                zIndex: 1,
                transition: {
                  duration: 1,
                },
              }}
            >
              <div className="p-2 bg-[#404040] rounded w-[400px] h-[320px]">
                <Image
                  className="rounded"
                  height={200}
                  width={400}
                  src={"/projects/" + project.path + ".png"}
                />
                <h2 className="text-2xl font-quicksand font-bold text-center bg-inherit">
                  {project.title}
                </h2>
                <h2 className="text-xl font-quicksand px-2 bg-inherit">
                  {project.desc}
                </h2>
              </div>
            </motion.a>
          ))}
        </div>
        <Link href="https://github.com/Abdesol?tab=repositories">
          <a
            className="inline-block w-[8.5rem] my-3 px-8 py-3 text-sm font-medium text-white transition bg-[#404040] rounded hover:scale-110 hover:shadow-xl active:bg-[#404040] focus:outline-none focus:ring"
            target="_blank"
          >
            View More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
