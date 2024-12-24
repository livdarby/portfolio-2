function Skills() {
  const frontEnd = [
    "JavaScript",
    "TypeScript",
    "React",
    "NextJS",
    "WordPress",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Bulma"
  ];

  const backEnd = ["Python", "JavaScript", "Node.js", "Express", "Flask"];

  const databases = ["SQL", "PostgreSQL", "MongoDB", "Mongoose", "SQLAlchemy"];

  const tools = [
    "Heroku",
    "Netlify",
    "Vercel",
    "Git",
    "GitHub",
    "Insomnia",
    "TablePlus",
    "Mongo Atlas",
  ];

  return (
    <>
      <section className="bg-[#f9d7df] h-screen p-8">
        <div className="">
          <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
            Liv Darby | Junior Developer
          </h2>
          <h1 className="font-title text-[#357ab7] tracking-wider text-7xl sm:text-8xl md:text-9xl text-center mt-5">
            My Skills
          </h1>
        </div>
        <div className="md:flex md:flex-wrap md:justify-center md:gap-8 md:my-10">
          <div className="my-6 bg-[#fcecf1] rounded px-5 py-1 md:w-[40%] md:flex md:flex-col md:items-center md:justify-center md:py-4 lg:w-[30%]">
            <h2 className="font-title text-[#357ab7] tracking-wider text-2xl py-1 lg:text-3xl">
              Front-end
            </h2>
            <div className="flex flex-wrap font-body md:flex md:justify-center">
              {frontEnd &&
                frontEnd.map((skill: any) => {
                  return (
                    <p className="text-center md:px-2 pr-6 pb-2 text-sm lg:text-base lg:mt-4 lg:mx-1">
                      {skill}
                    </p>
                  );
                })}
            </div>
          </div>
          <div className="my-6 bg-[#fcecf1] rounded px-5 py-1 md:w-[40%] md:flex md:flex-col md:items-center md:justify-center md:py-4 lg:w-[30%]">
            <h2 className="font-title text-[#357ab7] tracking-wider text-2xl py-1 lg:text-3xl">
              Back-end
            </h2>
            <div className="flex flex-wrap font-body md:flex md:justify-center">
              {backEnd &&
                backEnd.map((skill: any) => {
                  return (
                    <p className="text-center md:px-2 pr-6 pb-2 text-sm lg:text-base lg:mt-4 lg:mx-1">
                      {skill}
                    </p>
                  );
                })}
            </div>
          </div>
          <div className="my-6 bg-[#fcecf1] rounded px-5 py-1 md:w-[40%] md:flex md:flex-col md:items-center md:justify-center md:py-4 lg:w-[30%]">
            <h2 className="font-title text-[#357ab7] tracking-wider text-2xl py-1 lg:text-3xl">
              Databases
            </h2>
            <div className="flex flex-wrap font-body md:flex md:justify-center">
              {databases &&
                databases.map((skill: any) => {
                  return (
                    <p className="text-center md:px-2 pr-6 pb-2 text-sm lg:text-base lg:mt-4 lg:mx-1">
                      {skill}
                    </p>
                  );
                })}
            </div>
          </div>
          <div className="my-6 bg-[#fcecf1] rounded px-5 py-1 md:w-[40%] md:flex md:flex-col md:items-center md:justify-center md:py-4 lg:w-[30%]">
            <h2 className="font-title text-[#357ab7] tracking-wider text-2xl py-1 lg:text-3xl">
              Deployment & Tools
            </h2>
            <div className="flex flex-wrap font-body md:flex md:justify-center">
              {tools &&
                tools.map((skill: any) => {
                  return (
                    <p className="text-center pb-2 md:px-2 pr-6 text-sm lg:text-base lg:mt-4 lg:mx-1">
                      {skill}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
