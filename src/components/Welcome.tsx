import Footer from "./Footer";

function Welcome() {
  return (
    <>
      <section className="bg-[#f9d7df] h-screen p-8">
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
        <div className="font-body mt-48">
          My name's Liv and I'm a Junior Developer based in Perth, Western
          Australia. A little bit about me... I was born and raised in the West
          Midlands in the UK, where I developed my love of the outdoors from an
          early age, thanks to growing up on a small farm. I studied
          Environment, Law & Economics at the University of Cambridge and after
          graduating, I moved to Australia for a year on a working holiday visa.
          I did everything from travel sales to factory work to fund my year
          abroad and soaked in as much of Australia as I could, travelling from
          Adelaide up to Cairns. At the beginning of 2019, I returned to England
          and moved to London where I lived and worked for the following six
          years. Beginning my career in Account Management at an influencer
          marketing company, I had the pleasure of working with incredible
          creators and brands, including Nike, Selfridges, Charlotte Tilbury and
          Amazon Fashion. Ready for a new challenge, I stepped into Business
          Development and moved to an affiliate marketing company, where I
          worked closely with dev teams to integrate client tracking technology.
          This sparked my passion for tech, which I chose to pursue full-time at
          the beginning of 2024, by enrolling in a full-time Software
          Engineering Course with General Assembly.
        </div>
      </section>
    </>
  );
}
export default Welcome;
