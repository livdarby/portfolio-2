import livlogo from "../../assets/livlogo.png";
import laptop from "../../assets/laptop.png"

function Home() {
  return (
    <>
      <section className="bg-[#f9d7df] h-screen flex flex-col justify-evenly">
          <h2 className="font-body uppercase tracking-wide font-semibold my-2 mx-4">
            Liv Darby | Junior Developer
          </h2>
        <h1 className="font-title text-[#357ab7] lg:text-largest sm:text-md text-8xl tracking-wide text-center">
          Portfolio
        </h1>
        <img src={laptop} alt="Site mockup on laptop and mobile" className="w-96 mx-auto" />
        <img
          src={livlogo}
          alt="Liv Darby logo including name and mountains on a pink background"
          className="w-52 mx-auto"
          style={{ backgroundColor: "transparent" }}
        />
      </section>
    </>
  );
}

export default Home;
