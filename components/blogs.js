import Title from "./title";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    title: "How to make a movable control in Avalonia?",
    path: "custom_movable_control_in_avalonia",
    url: "https://abdesol.medium.com/how-to-make-a-movable-control-in-avalonia-970b3507b0ac",
  },
  {
    title: "UDP protocol and header explained",
    path: "udp_protocol_and_header_explained",
    url: "https://abdesol.medium.com/udp-protocol-and-header-explained-4bf653782cc8",
  },
  {
    title:
      "The underlying HTTP architecture explanation with implementation in python",
    path: "http_architect_exp_and_imp",
    url: "https://abdesol.medium.com/the-underlying-http-architecture-explanation-with-implementation-in-python-13221089c7fe",
  },
  {
    title: "UDP protocol with a header implementation in python",
    path: "udp_protocol_and_header_imp",
    url: "https://abdesol.medium.com/udp-protocol-with-a-header-implementation-in-python-b3d8dae9a74b",
  },
];

const Blogs = ({ id }) => {
  return (
    <div id={id} className="my-14">
      <Title title="Blogs" />
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap self-start">
          {blogs.map((blog, i) => (
            <motion.a
              key={i}
              className="cursor-pointer relative m-2"
              href={blog.url}
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
                  height={220}
                  width={400}
                  src={"/blogs/" + blog.path + ".png"}
                />
                <h2 className="text-2xl font-quicksand font-bold text-center bg-inherit">
                  {blog.title}
                </h2>
              </div>
            </motion.a>
          ))}
        </div>
        <Link href="https://abdesol.medium.com">
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

export default Blogs;
