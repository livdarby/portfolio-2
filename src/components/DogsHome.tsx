import doglogo from "../../assets/doglogo.svg";
import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function DogsHome() {
  return (
    <>
      <div className="flex gap-2 bg-[#fcedf1] px-6 w-[90%] mx-auto md:mx-0 rounded-md py-4 md:w-[38%] items-center">
        <div id="wordle" className="w-[70%]">
          <h1
            id="wordle"
            className="font-title text-lg tracking-wider text-[#357ab7] lg:text-2xl"
          >
            Shenton Dogs' Refuge Home
          </h1>
          <p id="wordle" className="font-body text-sm lg:text-base">
            Using Next.js and Laravel to develop a software solution for
            Shenton Dogs' Refuge Home, streamlining foster and volunteer care
            management.
          </p>
          <Link to="/projects/dogs-home">
            <div className="font-body flex items-center gap-1 text-sm lg:text-base font-semibold cursor-pointer">
              Read more
              <ArrowRightCircle className="w-4 inline text-blue" />
            </div>
          </Link>
        </div>
        <img
          src={doglogo}
          alt="site screenshot"
          className="w-28 my-auto rounded mx-auto"
          id="wordle"
        />
      </div>
    </>
  );
}
