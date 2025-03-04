import BackButton from "./BackButton";
import az_mark from "../../assets/az_mark.png";
import results_tab from "../../assets/results_tab.png";
import leaderboard from "../../assets/leaderboard.png";

export default function FPLBlackBox() {
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
          <BackButton />
          <div className="bg-white bg-opacity-40 rounded m-4 flex flex-col gap-4 p-4 font-body">
            <img src={az_mark} alt="FPL Blackbox Youtube stream screenshot" />
            <p>
              FPL BlackBox are two Premier League fantasy football experts based
              in the UK, with 35k Youtube subscribers. Az and Mark share advice
              and reflections throughout the season and also offer access to a
              predictions league to their Patreon subscribers.
            </p>
            <p>
              Previously, the predictions league was hosted on Google Sheets and
              managed manually. This led to several issues and inefficiencies
              including data inputting errors, incorrect score calculations and
              a lack of transparency with users often inputting predictions
              after a match had already been played.
            </p>
            <p>
              As a solution, I created a custom full-stack application for FPL
              BlackBox to streamline their predictions league and to improve the
              user experience. The app has over{" "}
              <span className="bg-[#fcecf1] font-semibold px-1 rounded">
                50 users and has improved admin efficiencies by 89%. It is
                streamed weekly on FPL BlackBox's Youtube channel with 20k+
                views.
              </span>
            </p>
            <p>
              Using React, TypeScript and Tailwind CSS, I have built a
              responsive front-end, with an intuitive design that is iteratively
              improved based on user feedback. The application is hosted on
              Netlify and is fully responsive across all devices.
            </p>
            <p>
              The back-end is built using Flask and is hosted on Heroku, with
              PostgreSQL as the database management system. The tech stack
              allows for scalability and efficiencies as the workload increases
              over time.
            </p>
            <div className="flex gap-10 justify-center">
              <img
                src={results_tab}
                alt="Results tab screenshot"
                className="rounded shadow w-[45%] sm:w-[30%]"
              />
              <img
                src={leaderboard}
                alt="Leaderboard screenshot"
                className="rounded shadow w-[45%] sm:w-[30%]"
              />
            </div>

            <p>
              I am particularly proud of the Results tab, which automatically
              calculates the user's score based on their prediction accuracy
              against the match result. An API call is made to the back-end to
              display competitor results for each match, sorted by score.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
