import pp_home from "../../assets/pp_home.png";
import predictions from "../../assets/predictions.png";
import az_mark from "../../assets/az_mark.png";
import leaderboard from "../../assets/leaderboard.png";
import { Link } from "react-router-dom";

function ProjectOne() {
  return (
    <section className="bg-[#f9d7df] h-max min-h-screen py-8">
      <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
        Liv Darby | Junior Developer
      </h2>
      <div className="mb-4 flex justify-evenly flex-wrap">
        <h1 className="font-title text-[#357ab7] text-7xl sm:text-8xl md:text-9xl lg:text-largest tracking-wide text-center">
          Project
        </h1>
        <h1 className="font-title text-white text-7xl sm:text-8xl md:text-9xl lg:text-largest tracking-wide text-center">
          01
        </h1>
        <Link to={'../projects'} className="w-[100%] text-center font-body text-xs tracking-wide cursor-pointer hover:underline">
            🔙 to projects
        </Link>
        <p className="font-body w-[100%] text-center uppercase font-semibold tracking-wider my-4">
          Premier Picks <span className="lowercase">x</span> FPL BlackBox
        </p>
        <p className="font-body w-[100%] text-center uppercase font-semibold tracking-wider text-xs">
          Apr 2024 - present
        </p>
      </div>
      <div className="w-96 mx-auto">
        <img src={az_mark} alt="App screenshot" className="rounded shadow" />
        <p className="font-body text-sm text-center my-3">
          What started as a final project for my software engineering bootcamp
          has turned into ongoing freelance work for FPL BlackBox. The site is
          accessible to Patreon members, who input their weekly Premier League
          predictions and are awarded scores depending on accuracy. The site is
          featured in FPL BlackBox's weekly YouTube streams, where Az and Mark
          walk their audience through the leaderboard and their exclusive 'Az v
          Mark' predictions tab.
        </p>
        <div className="flex justify-evenly">
          <img
            src={predictions}
            alt="App screenshot"
            className="rounded shadow w-[48%]"
          />
          <img
            src={leaderboard}
            alt="App screenshot"
            className="rounded shadow w-[48%]"
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectOne;
