import quiz from "../../assets/quiz.png";
import fpl from "../../assets/fpl.png";
import cpp from "../../assets/cpp.png";
import shop from "../../assets/shop.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <section className="bg-[#f9d7df] h-max min-h-screen py-8">
        <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
          Liv Darby | Junior Developer
        </h2>
        <div className="mb-4">
          <h1 className="font-title text-[#357ab7] text-7xl sm:text-8xl md:text-9xl lg:text-largest tracking-wide text-center">
            Projects
          </h1>
          <p className="font-body text-sm text-center">
            Click on a project below to read more.
          </p>
        </div>
        <div className="font-body uppercase flex flex-wrap justify-center gap-4 sm:gap-10 text-xs font-semibold tracking-wider sm:px-4 lg:px-0 lg:justify-evenly">
            <Link to="01" className="flex flex-col items-center my-4 gap-2 cursor-pointer lg:w-[20%]">
              <img
                src={fpl}
                alt="Project screenshot"
                className="w-48 rounded shadow sm:w-56 lg:w-[100%]"
              />
              <p>Project 01</p>
            </Link>

          <div className="flex flex-col items-center my-4 gap-2 cursor-pointer lg:w-[20%]">
            <img
              src={cpp}
              alt="Project screenshot"
              className="w-48 rounded shadow sm:w-56 lg:w-[100%]"
            />
            <p>Project 02</p>
          </div>
          <div className="flex flex-col items-center my-4 gap-2 cursor-pointer lg:w-[20%]">
            <img
              src={quiz}
              alt="Project screenshot"
              className="w-48 rounded shadow sm:w-56 lg:w-[100%]"
            />
            <p>Project 03</p>
          </div>
          <div className="flex flex-col items-center my-4 gap-2 cursor-pointer lg:w-[20%]">
            <img
              src={shop}
              alt="Project screenshot"
              className="w-48 rounded shadow sm:w-56 lg:w-[100%]"
            />
            <p>Project 04</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
