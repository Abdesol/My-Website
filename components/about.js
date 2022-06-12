import Image from 'next/image'

const About = ({ id }) => {
  return (
    <div id={id} className="flex items-center sm:px-6 lg:px-8">
      <div>
        <h2 className="font-quicksand text-4xl mt-10 ml-10">Hi, my name is</h2>
        <h1 className="font-quicksand text-7xl mt-10 ml-10">Abdella Solomon</h1>
        <p className="font-quicksand text-xl mt-10 ml-10">
          I am a 17 years old programmer since July 2020 and I have been working with many programming languages and frameworks.<br/>
          Additionally, I do mathematics stuff in my free time and more specifically, I am focused on Artifical Intelligence and machine learning. I love to learn new things and adapt to new technologies.
        </p>
      </div>
      <Image className='flex' src="/logo.png" width={300} height={300}/>
    </div>
  );
};

export default About;
