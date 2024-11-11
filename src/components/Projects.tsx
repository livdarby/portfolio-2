import quiz2 from "../../assets/quiz2.png";
import fpl3 from "../../assets/fpl3.png";
import cpp2 from "../../assets/cpp2.png";
import gourmetvoyage from "../../assets/gourmetvoyage.png";
import ezpz from "../../assets/ezpz.png";

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
          <p className="font-body text-sm text-center px-8 my-5">
            A collection of sites I've created and projects I'm working on.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="bg-[#357ab7] w-[90%] mx-auto rounded-full flex justify-start items-center">
            <h1 className="font-title text-white text-2xl tracking-wider px-8 pt-[2px]">
              currently working on
            </h1>
          </div>
          <div className="flex gap-2 bg-[#fcedf1] px-6 w-[90%] mx-auto rounded-md py-4">
            <div className="w-[60%]">
              <h1 className="font-title text-lg tracking-wider text-[#357ab7]">
                Premier Picks <span className="text-xs">x</span> FPL BlackBox
              </h1>
              <p className="font-body text-sm">
                Enter Premier League predictions and monitor your performance
                against competitors.
              </p>
            </div>
            <img
              src={fpl3}
              alt="site screenshot"
              className="w-44 h-32 my-auto rounded"
            />
          </div>
          <div className="flex gap-2 bg-[#fcedf1] px-6 w-[90%] mx-auto rounded-md py-4">
            <div className="w-[60%]">
              <h1 className="font-title text-lg tracking-wider text-[#357ab7]">
                Ezpz events
              </h1>
              <p className="font-body text-sm">
                Take the headache out of event-planning with everything from
                budget management to RSVPs in one place.
              </p>
            </div>
            <img
              src={ezpz}
              alt="site screenshot"
              className="w-28 my-auto mx-auto rounded-full"
            />
          </div>
          <div className="bg-[#357ab7] w-[90%] mx-auto rounded-full flex justify-end items-center">
            <h1 className="font-title text-white text-2xl tracking-wider px-8 pt-[2px]">
              previous projects
            </h1>
          </div>
          <div className="flex gap-2 bg-[#fcedf1] px-6 w-[90%] mx-auto rounded-md py-4">
            <div className="w-[60%]">
              <h1 className="font-title text-lg tracking-wider text-[#357ab7]">
                cabbage patch protector
              </h1>
              <p className="font-body text-sm">
                Minesweeper with a twist. Just for fun, this is a JavaScript
                grid-based game.
              </p>
            </div>
            <img
              src={cpp2}
              alt="site screenshot"
              className="w-44 h-24 my-auto mx-auto rounded"
            />
          </div>
          <div className="flex gap-2 bg-[#fcedf1] px-6 w-[90%] mx-auto rounded-md py-4">
            <div className="w-[60%] my-auto">
              <h1 className="font-title text-lg tracking-wider text-[#357ab7]">
                Gourmet Voyage
              </h1>
              <p className="font-body text-sm">
                An online foodie marketplace, with an Express back-end and React
                front-end. A General Assembly group project.
              </p>
            </div>
            <img
              src={gourmetvoyage}
              alt="site screenshot"
              className="w-44 h-44 my-auto mx-auto rounded"
            />
          </div>
          <div className="flex gap-2 bg-[#fcedf1] px-6 w-[90%] mx-auto rounded-md py-4">
            <div className="w-[60%] my-auto">
              <h1 className="font-title text-lg tracking-wider text-[#357ab7]">
                Open Trivia Quiz
              </h1>
              <p className="font-body text-sm">
                Test your general knowledge with this React app, fetching data
                from a public API. A 48-hour Hackathon pair project.
              </p>
            </div>
            <img
              src={quiz2}
              alt="site screenshot"
              className="w-44 h-44 my-auto mx-auto rounded"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
