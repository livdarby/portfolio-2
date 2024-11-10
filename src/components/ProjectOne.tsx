import pp_home from "../../assets/pp_home.png";
import predictions from "../../assets/predictions.png";
import az_mark from "../../assets/az_mark.png";
import leaderboard from "../../assets/leaderboard.png";
import fplcollage from "../../assets/fplcollage.png";
import { Link } from "react-router-dom";

function ProjectOne() {
  return (
    <section className="bg-[#f9d7df] h-max min-h-screen py-8">
      <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
        Liv Darby | Junior Developer
      </h2>
      <div className="mb-4 flex justify-evenly flex-wrap">
        <h1 className="font-title text-[#357ab7] text-7xl sm:text-8xl md:text-9xl lg:text-largest tracking-wide text-center lg:text-white">
          Project
        </h1>
        <h1 className="font-title text-white text-7xl sm:text-8xl md:text-9xl lg:text-largest tracking-wide text-center">
          01
        </h1>
        <Link
          to={"../projects"}
          className="w-[100%] text-center font-body text-xs tracking-wide cursor-pointer hover:underline"
        >
          🔙 to projects
        </Link>
        <p className="font-body w-[100%] text-center uppercase font-semibold tracking-wider my-4">
          Premier Picks <span className="lowercase">x</span> FPL BlackBox
        </p>
        <p className="font-body w-[100%] text-center uppercase font-semibold tracking-wider text-xs">
          Apr 2024 - present
        </p>
      </div>
      <div className="w-screen mx-auto sm:w-[500px] md:w-[100%] lg:w-screen lg:flex lg:justify-center">
        <img src={fplcollage} alt="App collage" className="hidden lg:block w-[45%] lg:-mt-6" />
        <img
          src={az_mark}
          alt="App screenshot"
          className="rounded shadow w-96 lg:hidden mx-auto"
        />
        <p className="font-body text-sm md:text-base text-center my-3 sm:my-5 lg:w-[50%] lg:px-24 lg:pt-10 md:w-[80%] md:mx-auto">
          What started as a final project for my software engineering bootcamp
          has turned into ongoing freelance work for FPL BlackBox. The site is
          accessible to Patreon members, who input their weekly Premier League
          predictions and are awarded scores depending on accuracy. The site is
          featured in FPL BlackBox's weekly YouTube streams, where Az and Mark
          walk their audience through the leaderboard and their exclusive 'Az v
          Mark' predictions tab.
        </p>
        <div className="flex justify-center gap-6 lg:hidden">
          <img
            src={predictions}
            alt="App screenshot"
            className="rounded shadow w-[40%]"
          />
          <div className="w-[40%] flex flex-wrap">
            <img
              src={leaderboard}
              alt="App screenshot"
              className="rounded shadow"
            />
          </div>
        </div>
        {/* <div className="hidden lg:flex justify-evenly mt-6 mx-4">
          <img src={predictions} alt="App screenshot" className="w-[20%] rounded shadow" />
          <img src={leaderboard} alt="App screenshot" className="w-[20%] rounded shadow" />
          <img src={pp_home} alt="App screenshot" className="w-[20%] rounded shadow" />
        </div> */}
      </div>
    </section>
  );
}

export default ProjectOne;
