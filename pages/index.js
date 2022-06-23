import About from "../components/about";
import Projects from "../components/projects";
import Skills from "../components/skills";

export default function Home() {
  return (
    <div className="mx-10">
      <div>
        <h2 className="font-quicksand font-bold text-4xl my-10">Hi, I am</h2>
        <h1 className="font-quicksand font-extrabold text-7xl mt-10 mb-20">Abdella Solomon</h1>
      </div>
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects"/>
    </div>
  );
}
