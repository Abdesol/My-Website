import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="mx-10">
      <div>
        <h2 className="font-quicksand font-bold text-4xl my-10">Hi, my name is</h2>
        <h1 className="font-quicksand font-extrabold text-7xl mt-10 mb-20">Abdella Solomon</h1>
      </div>
      <About id="about" />
    </div>
  );
}
