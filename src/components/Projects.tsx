import quiz2 from "../../assets/quiz2.png";
import fpl3 from "../../assets/fpl3.png";
import cpp2 from "../../assets/cpp2.png";
import gourmetvoyage from "../../assets/gourmetvoyage.png";
import ezpz from "../../assets/ezpz.png";
import blog from "../../assets/blog.png"

function Projects() {
  function handleClick(e: any) {
    e.preventDefault();
    if (e.target.id === "fpl") {
      window.open(
        "https://premier-picks.netlify.app/",
        "_blank",
        "noopener,noreferrer"
      );
    }
    else if (e.target.id === "cpp") {
      window.open(
        "https://livdarby.github.io/SEB-Project-1/",
        "_blank",
        "noopener,noreferrer"
      );
    }
    else if (e.target.id === "gv") {
      window.open(
        "https://gourmet-e-shop-front.netlify.app/",
        "_blank",
        "noopener,noreferrer"
      );
    }
    else if (e.target.id === "quiz") {
      window.open(
        "https://catherine-liv-project-2.netlify.app/quiz",
        "_blank",
        "noopener,noreferrer"
      );
    }
    else if (e.target.id === "blog") {
      window.open(
        "http://movewithliv.com",
        "_blank",
        "noopener,noreferrer"
      );
    }
  }

  return (
    <>
      <section className="bg-[#f9d7df] h-max min-h-screen py-8">
        <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
          Liv Darby | Junior Developer
        </h2>
        <div className="mb-4">
          <h1 className="font-title text-[#357ab7] text-7xl sm:text-8xl md:text-9xl tracking-wide text-center">
            Projects
          </h1>
          <p className="font-body text-sm text-center px-8 my-5 lg:text-base">
            A collection of sites I've created and projects I'm working on.
          </p>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-center">
          <div className="bg-[#357ab7] w-[90%] mx-auto rounded-full flex justify-start items-center md:w-[80%]">
            <h1 className="font-title text-white text-2xl tracking-wider px-8 pt-[2px]">
              currently working on
            </h1>
          </div>
          <div
            onClick={handleClick}
            id="fpl"
            className="flex gap-2 bg-[#fcedf1] px-6 w-[90%] mx-auto md:mx-0 rounded-md py-4 md:w-[38%] items-center"
          >
            <div id="fpl" className="w-[70%]">
              <h1
                id="fpl"
                className="font-title text-lg tracking-wider text-[#357ab7] lg:text-2xl"
              >
                Premier Picks{" "}
                <span id="fpl" className="text-xs">
                  x
                </span>{" "}
                FPL BlackBox
              </h1>
              <p id="fpl" className="font-body text-sm lg:text-base">
                Enter Premier League predictions and monitor your performance
                against competitors. Freelancing for{"  "}
                <a
                  id="fpl"
                  href="https://www.fplblackbox.com/"
                  target="_blank"
                  className="underline"
                >
                  FPL BlackBox.
                </a>
              </p>
            </div>
            <img
              src={fpl3}
              alt="site screenshot"
              className="w-28 my-auto rounded mx-auto"
              id="fpl"
            />
          </div>
          <div
            onClick={handleClick}
            id="fpl"
            className="flex gap-2 bg-[#fcedf1] px-6 w-[90%] mx-auto md:mx-0 rounded-md py-4 md:w-[38%] items-center"
          >
            <div id="blog" className="w-[70%]">
              <h1
                id="blog"
                className="font-title text-lg tracking-wider text-[#357ab7] lg:text-2xl"
              >
                Move With Liv
              </h1>
              <p id="blog" className="font-body text-sm lg:text-base">
                WordPress site hosted on SiteGround. This blog documents my travels and experiences emigrating to Australia.
              </p>
            </div>
            <img
              src={blog}
              alt="site screenshot"
              className="w-28 my-auto rounded mx-auto"
              id="blog"
            />
          </div>
          <div className="flex gap-2 bg-[#fcedf1] px-6 w-[90%] mx-auto md:mx-0 rounded-md py-4 md:w-[38%] items-center">
            <div className="w-[70%]">
              <h1 className="font-title text-lg tracking-wider text-[#357ab7] lg:text-2xl">
                Ezpz events
              </h1>
              <p className="font-body text-sm lg:text-base">
                Take the headache out of event-planning with everything from
                budget management to RSVPs in one place. In the wireframing
                stage.
              </p>
            </div>
            <img
              src={ezpz}
              alt="site screenshot"
              className="w-28 my-auto mx-auto rounded"
            />
          </div>
          <div
            id="cpp"
            className="bg-[#357ab7] w-[90%] mx-auto rounded-full flex justify-end items-center md:w-[80%]"
          >
            <h1
              id="cpp"
              className="font-title text-white text-2xl tracking-wider px-8 pt-[2px]"
            >
              previous projects
            </h1>
          </div>
          <div></div>
          <div
            id="cpp"
            onClick={handleClick}
            className="flex gap-2 bg-[#fcedf1] px-6 w-[90%] mx-auto md:mx-0 rounded-md py-4 md:w-[38%] items-center"
          >
            <div id="cpp" className="w-[70%]">
              <h1
                id="cpp"
                className="font-title text-lg tracking-wider text-[#357ab7] lg:text-2xl"
              >
                cabbage patch protector
              </h1>
              <p id="cpp" className="font-body text-sm lg:text-base">
                Minesweeper with a twist. My first solo General Assembly project
                - a desktop JavaScript grid-based game.
              </p>
            </div>
            <img
              id="cpp"
              src={cpp2}
              alt="site screenshot"
              className="w-28 my-auto mx-auto rounded"
            />
          </div>
          <div
            id="gv"
            onClick={handleClick}
            className="flex gap-2 bg-[#fcedf1] px-6 w-[90%] mx-auto md:mx-0 rounded-md py-4 md:w-[38%]"
          >
            <div id="gv" className="w-[70%] my-auto">
              <h1
                id="gv"
                className="font-title text-lg tracking-wider text-[#357ab7] lg:text-2xl"
              >
                Gourmet Voyage
              </h1>
              <p id="gv" className="font-body text-sm lg:text-base">
                An online foodie marketplace, with an Express back-end and React
                front-end. A General Assembly group project.
              </p>
            </div>
            <img
              id="gv"
              src={gourmetvoyage}
              alt="site screenshot"
              className="w-28 my-auto mx-auto rounded"
            />
          </div>
          <div
            id="quiz"
            onClick={handleClick}
            className="flex gap-2 bg-[#fcedf1] px-6 w-[90%] mx-auto md:mx-0 rounded-md py-4 md:w-[38%]"
          >
            <div id="quiz" className="w-[70%] my-auto">
              <h1
                id="quiz"
                className="font-title text-lg tracking-wider text-[#357ab7] lg:text-2xl"
              >
                Open Trivia Quiz
              </h1>
              <p id="quiz" className="font-body text-sm lg:text-base">
                Test your general knowledge with this React app, fetching data
                from a public API. A 48-hour Hackathon pair project.
              </p>
            </div>
            <img
              id="quiz"
              src={quiz2}
              alt="site screenshot"
              className="w-28 my-auto mx-auto rounded"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
