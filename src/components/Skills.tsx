function Skills() {
  return (
    <>
      <section className="bg-[#f9d7df] min-h-screen p-8">
        <div>
          <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
            Liv Darby | Junior Developer
          </h2>
        </div>
        <div className="lg:h-[calc(100vh-150px)] content-center">
          <div className="min-w-[50%]">
            <h1 className="font-title lg:mb-10 text-[#357ab7] text-7xl sm:text-7xl md:text-9xl lg:text-[160px] tracking-wide text-center mb-4">
              My Skills
            </h1>
          </div>
          <div className="sm:w-96 md:w-full md:gap-6 md:justify-center md:flex md:flex-wrap mx-auto">
            <div className="md:w-64 lg:w-80 font-body bg-[#fcecf1] rounded shadow px-4 py-2 my-4">
              <h1 className="uppercase underline tracking-wide text-center font-semibold mb-2">
                Front-End
              </h1>
              <div className="flex flex-wrap gap-5 justify-center">
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>React</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Tailwind</p>
                <p>Bulma</p>
              </div>
            </div>
            <div className="md:w-64 lg:w-80 font-body bg-[#fcecf1] rounded shadow px-4 py-2 my-4">
              <h1 className="uppercase underline tracking-wide text-center font-semibold mb-2">
                Back-end
              </h1>
              <div className="flex flex-wrap gap-5 justify-center">
                <p>Python</p>
                <p>JavaScript</p>
                <p>Node.js</p>
                <p>Express</p>
                <p>Flask</p>
              </div>
            </div>
            <div className="md:w-64 lg:w-80 font-body bg-[#fcecf1] rounded shadow px-4 py-2 my-4">
              <h1 className="uppercase underline tracking-wide text-center font-semibold mb-2">
                Databases
              </h1>
              <div className="flex flex-wrap gap-5 justify-center">
                <p>SQL</p>
                <p>PostgreSQL</p>
                <p>MongoDB</p>
                <p>SQLAlchemy</p>
                <p>Mongoose</p>
              </div>
            </div>
            <div className="md:w-64 lg:w-80 font-body bg-[#fcecf1] rounded shadow px-4 py-2 my-4">
              <h1 className="uppercase underline tracking-wide text-center font-semibold mb-2">
                Deployment & Tools
              </h1>
              <div className="flex flex-wrap gap-5 justify-center">
                <p>Heroku</p>
                <p>Netlify</p>
                <p>Vercel</p>
                <p>Git</p>
                <p>GitHub</p>
                <p>Insomnia</p>
                <p>TablePlus</p>
                <p>Mongo Atlas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
