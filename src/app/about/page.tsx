
export default function About() {
    return (
      <>
        <div className="flex justify-center items-center gap-16 flex-col ">
          <div className="flex justify-center items-center flex-wrap gap-5 mt-24 mb-16">
            <ol className=" bg-gray-900 w-72 ml-4  h-[400px] flex justify-center items-center gap-10 flex-col rounded-lg ">
              <li>Name : Nisar Ahmed Bhutto </li>
              <li>Field : FrontEnd Developer</li>
            </ol>
            <br />
            <ol className=" bg-gray-900 w-72  h-[400px] flex justify-center items-center gap-10 flex-col rounded-lg ">
              <li className="text-6xl">Skills</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JvaScript</li>
              <li>TypeScript</li>
            </ol>
          </div>
          <section className="flex justify-center items-center box-border mt-40 sm:-mt-16">
            <div className="flex justify-center items-center flex-col ">
              <h2 className="text-2xl my-4 sm:text-4xl md:text-6xl">
                My Programing <span className="text-sky-300">Journey</span>
              </h2>
              <p className="p-4 md:text-2xl lg:text-3xl bg-gray-900 m-8 mb-20 rounded-md sm:w-[450px] md:w-[650px] lg:w-[850px]">
                I am a frontend developer who recently started learning
                programming. I joined{" "}
                <span className="text-green-400 underline">GIAIC </span>as a
                student and completed my first quarter there. I have also
                created several projects.
              </p>
            </div>
          </section>
        </div>
      </>
    );
}