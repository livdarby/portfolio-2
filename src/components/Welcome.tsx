import dolomites from "../../assets/dolomites.JPG";
import lakes from "../../assets/lakes.JPG";
import defender from "../../assets/defender.JPG";
import mountains from "../../assets/mountains.JPG";
import ltk from "../../assets/ltk.jpeg";
import rewardstyle from "../../assets/rewardstyle.JPG";

function Welcome() {
  return (
    <>
      <section className="bg-[#f9d7df] min-h-full p-8">
        <div>
          <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
            Liv Darby | Junior Developer
          </h2>
          <div>
            <h1 className="font-title text-[#357ab7] text-7xl sm:text-8xl md:text-9xl lg:text-largest tracking-wide text-center mb-4">
              Welcome
            </h1>
            <h3 className="text-center font-script text-white tracking-widest text-4xl md:text-5xl lg:text-7xl -rotate-[9deg] -mt-8 sm:-mt-10 lg:-mt-20">
              about me
            </h3>
          </div>
        </div>
        <div className="md:flex md:gap-6">
          <div className="font-body mt-24 sm:mt-32 md:bg-white/[.7] md:rounded md:px-2">
            <div className="flex gap-6 my-2 items-center bg-white/[.7] rounded p-2 md:bg-transparent">
              <div>
                <p className="my-2">
                  I'm Liv, a Junior Developer based in Perth, Western Australia.
                  A little bit about me... I was born and raised in the United
                  Kingdom, where I grew up on a small farm in the West Midlands.
                  I've had a love for the outdoors from an early age and I now
                  find every opportunity to get into nature, from hiking in the
                  Lake District, to biking in the Dolomites, to living out of a
                  tentbox on a Defender 90.
                </p>
              </div>
              <img
                className="rounded shadow w-52 hidden sm:block md:hidden"
                src={dolomites}
                alt="Hiking in the Dolomites"
              />
            </div>
            <div className="flex gap-6 my-2 items-center  bg-white/[.7] rounded p-2 md:bg-transparent">
              <img
                className="rounded shadow w-52 hidden sm:block md:hidden"
                src={defender}
                alt="Camping with car and roof tent"
              />
              <div>
                <p className="my-2">
                  I studied Environment, Law & Economics at the University of
                  Cambridge and after graduating, I moved to Australia for a
                  year on a working holiday visa. As cliché as it sounds, I fell
                  in love with the country, beaches and lifestyle, and always
                  dreamed of coming back.
                </p>
                <p className="my-2">
                  After a year abroad, I moved back to England, where I started
                  working for LTK (rewardStyle), a creator monetisation platform
                  based in London, where I had the pleasure of working with
                  incredible creators and brands like Nike, Charlotte Tilbury
                  and Selfridges.
                </p>
              </div>
            </div>
            <div className="flex gap-6 my-2 items-center  bg-white/[.7] rounded p-2 md:bg-transparent">
              <div>
                <p className="my-2">
                  After a wonderful four years at LTK, where I segued from
                  Account Management to Business Development, I started working
                  at CJ, an affiliate marketing network. I worked closely with
                  client tech teams to integrate their tracking technology, and
                  was given a new insight into the world of web development. The
                  challenge of learning new concepts, logical problem-solving
                  and team dynamic piqued my interest and were elements I felt I
                  was missing in my Business Development role.
                </p>
              </div>
              <img
                className="rounded shadow w-52 hidden sm:block md:hidden"
                src={rewardstyle}
                alt="rewardstyle group photo"
              />
            </div>
            <div className="flex gap-6 my-2 items-center  bg-white/[.7] rounded p-2 md:bg-transparent">
              <img
                className="rounded shadow w-52 hidden sm:block md:hidden"
                src={ltk}
                alt="Liv and friend working at LTK"
              />
              <div>
                <p className="my-2">
                  After 18 months at CJ, I decided to pursue my interest in tech
                  and completed a 3-month Software Engineering bootcamp with
                  General Assembly. It was the best decision - I fell in love
                  with coding and built a solid foundation in front-end and
                  back-end frameworks. The course simulated a real work
                  environment with daily standups, joint and solo projects, and
                  pair programming.
                </p>
              </div>
            </div>
            <p className="my-2  bg-white/[.7] rounded p-2 md:bg-transparent">
              Since graduating from General Assembly, I've been freelancing for
              a UK Fantasy Premier League company, FPL BlackBox, developing
              their predictions site from scratch. During this time, I have also
              emigrated to Perth and am looking for full-time work as a Junior
              Developer.
            </p>
          </div>
          <div className="hidden md:block md:flex md:flex-col md:justify-center lg:grid mt-32 grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-2 lg:gap-4 place-items-center">
            <img
              className="rounded shadow w-full object-cover"
              src={dolomites}
              alt="Hiking image"
            />
            <img
              className="rounded shadow w-full object-cover"
              src={defender}
              alt="Camping with car and roof tent"
            />
            <img
              className="rounded shadow w-full object-cover"
              src={mountains}
              alt="Mountains in the Dolomites"
            />
            <img
              className="rounded shadow w-full object-cover hidden lg:block"
              src={ltk}
              alt="Liv and friend working at LTK"
            />
          </div>
          <div className="sm:flex sm:items-center sm:gap-6">
            <div className="flex justify-center gap-1 sm:w-full">
              <img
                className="rounded shadow w-44 sm:min-w-52 sm:hidden"
                src={dolomites}
                alt="Hiking image"
              />
              <img
                className="rounded shadow w-44 sm:hidden"
                src={defender}
                alt="Camping with car and roof tent"
              />
              <img
                className="rounded shadow w-44 sm:hidden"
                src={lakes}
                alt="Hiking image with dog"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Welcome;
