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
      </section>
    </>
  );
}
export default Welcome;
