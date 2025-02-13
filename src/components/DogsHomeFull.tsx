import BackButton from "./BackButton";

function DogsHomeFull() {
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
          <p className="font-body text-sm text-center px-8 my-5 lg:text-base">
            XXX{" "}
          </p>
        </div>
      </section>
    </>
  );
}

export default DogsHomeFull;
