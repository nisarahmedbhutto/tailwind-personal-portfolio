"use client";


import Image from "next/image";
import profile from "../../images/profile.jpg";
import Card1 from "../../components/main/card1";
import Card2 from "../../components/main/card2";
import Card3 from "../../components/main/card3";
import Card4 from "../../components/main/card4";
import Card5 from "../../components/main/card5";
import Card6 from "../../components/main/card6";

export default function Home() {
  return (
    <div className="grid grid-rows-[400px_370px_320px_auto] justify-center box-border items-center my-7">
      <section
        className="flex justify-start items-center flex-col box-border 
      sm:flex-row-reverse sm:flex sm:justify-center sm:gap-10 sm:-mt-12
      md:flex md:justify-between md:items-center md:mx-6 md:gap-24 
      lg:flex lg:justify-between lg:items-between lg:mx-6 lg:gap-48
      xl:flex xl:justify-between xl:items-between xl:mx-6 xl:gap-96"
      >
        <div className="order-2 text-2xl my-6 md:text-4xl lg:text-5xl">
          <h2>
            Hey. I Am <br />
            Nisar Ahmed Bhutto
          </h2>
          <hr />
          <h3 className=" my-6">
            I Am <span className="text-green-500">FrontEnd</span> Developer
          </h3>
        </div>
        <div className="order-1">
          <figure>
            <Image
              className="rounded-full w-60 h-w-60 md:w-72 md:h-72"
              src={profile}
              alt=" profile"
              width={1250}
              height={1250}
            />
          </figure>
        </div>
      </section>
      <section className="flex justify-center items-center box-border flex-col mt-40 sm:-mt-24  ">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-6xl underline">
            My <span className="text-sky-300">Skills</span>
          </h2>

          <ul className="mt-20 text-1xl md:text-3xl lg:text-4xl flex gap-7 flex-col sm:flex sm:justify-center sm:flex-row">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Next.Js</li>
          </ul>
        </div>
      </section>
      <section className="flex justify-center items-center box-border mt-40 sm:-mt-16">
        <div className="flex justify-center items-center flex-col ">
          <h2 className="text-2xl my-4 sm:text-4xl md:text-6xl">
            My Programing <span className="text-sky-300">Journey</span>
          </h2>
          <p className="p-4 md:text-2xl lg:text-3xl bg-gray-900 m-8 mb-20 rounded-md sm:w-[450px] md:w-[650px] lg:w-[850px]">
            I am a frontend developer who recently started learning programming.
            I joined <span className="text-green-400 underline">GIAIC </span>as
            a student and completed my first quarter there. I have also created
            several projects.
          </p>
        </div>
      </section>
      <section
        className="flex justify-center items-center my-32 h-auto min-h-[200px] box-border 
      sm:flex sm:justify-center sm:items-center
      md:flex md:justify-center md:items-center"
      >
        <div>
          <h2 className="flex justify-center gap-3 md:text-8xl pb-10 text-5xl sm:-mt-28">
            My <span className="text-sky-300">Projects</span>
          </h2>

          <h2 className="flex justify-center gap-2 pt-14 pb-6 text-2xl sm:text-4xl md:text-6xl sm:mb-10">
            User <span className="text-sky-300"> Interface</span> Projects
          </h2>

          <div
            className="flex justify-center mx-4 gap-7 flex-wrap
          sm:flex sm:justify-center sm:items-center sm:flex-row sm:flex-wrap
          md:flex md:justify-center md:items-center md:flex-row md:flex-wrap md:gap-20"
          >
            <Card1 />
            <Card2 />
            <Card3 />
            
          </div>

          <h2 className="flex justify-center gap-2 pt-14 pb-6 md:text-6xl text-md sm:text-4xl sm:mt-28 sm:mb-10">
            Cammand Line <span className="text-sky-300">Interface</span>{" "}
            Projects
          </h2>

          <div
            className="flex justify-center mx-4 gap-7 flex-wrap 
          sm:flex sm:justify-center sm:items-center sm:flex-row sm:flex-wrap
          md:flex md:justify-center md:items-center md:flex-row md:flex-wrap md:gap-20"
          >
            <Card4 />
            <Card5 />
            <Card6 />
            
          </div>
        </div>
      </section>
    </div>
  );
}
