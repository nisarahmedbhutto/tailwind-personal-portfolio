
import Card1 from "../../../components/main/card1";
import Card2 from "../../../components/main/card2";
import Card3 from "../../../components/main/card3";
import Card4 from "../../../components/main/card4";
import Card5 from "../../../components/main/card5";
import Card6 from "../../../components/main/card6";


export default function About() {
  return (
    <>
      <div>
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
              <Card2/>
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
    </>
  );
}
