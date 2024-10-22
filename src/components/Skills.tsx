function Skills() {
  return (
    <>
      <section className="bg-[#f9d7df] min-h-full p-8">
        <div>
          <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
            Liv Darby | Junior Developer
          </h2>
        </div>
        <div className="flex flex-row-reverse justify-evenly">
          <div className="min-w-[50%]">
            <h1 className="font-title text-[#357ab7] text-7xl sm:text-7xl md:text-8xl lg:text-largest tracking-wide text-center mb-4">
              My Skills
            </h1>
          </div>
          <div>
            <div className="font-body">
              <h1 className="uppercase underline tracking-wide font-semibold">
                Front-End
              </h1>
              <p>
                Front-end web development, including languages, frameworks and
                responsive design.
              </p>
              <div className="flex flex-wrap gap-4 font-bold">
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>React</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Tailwind</p>
                <p>Bulma</p>
              </div>
            </div>
            <div className="font-body">
              <h1 className="uppercase underline tracking-wide font-semibold">
                Back-End
              </h1>
              <p>Python</p>
              <p>JavaScript</p>
              <p>Node.js</p>
              <p>Express</p>
              <p>Flask</p>
            </div>
            <div className="font-body">
              <h1 className="uppercase underline tracking-wide font-semibold">
                Databases
              </h1>
              <p>SQL</p>
              <p>PostgreSQL</p>
              <p>MongoDB</p>
              <p>SQLAlchemy</p>
              <p>Mongoose</p>
            </div>
            <div className="font-body">
              <h1 className="uppercase underline tracking-wide font-semibold">
                Deployment & Tools
              </h1>
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
      </section>
    </>
  );
}

export default Skills;
