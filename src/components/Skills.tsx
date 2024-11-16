function Skills() {
  const frontEnd = [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind",
    "Bulma",
  ];

  const backEnd = ["Python", "JavaScript", "Node.js", "Express", "Flask"];

  const databases = ["SQL", "PostgreSQL", "MongoDB", "Mongoose","SQLAlchemy"];

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
      <section className="bg-[#f9d7df] h-screen p-8 md:flex md:flex-wrap md:justify-center md:gap-6">
        <div>
          <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs md:w-screen">
            Liv Darby | Junior Developer
          </h2>
          <h1 className="font-title text-[#357ab7] tracking-wider text-7xl text-center my-5 md:w-screen">
            My Skills
          </h1>
        </div>
        <div className="my-6 bg-[#fcecf1] rounded px-5 py-1 md:w-[40%]">
          <h2 className="font-title text-[#357ab7] tracking-wider text-2xl py-1">
            Front-end
          </h2>
          <div className="flex flex-wrap font-body">
            {frontEnd &&
              frontEnd.map((skill: any) => {
                return <p className="pr-5 pb-2 text-sm">{skill}</p>;
              })}
          </div>
        </div>
        <div className="my-6 bg-[#fcecf1] rounded px-5 py-1 md:w-[40%]">
          <h2 className="font-title text-[#357ab7] tracking-wider text-2xl py-1">
            Back-end
          </h2>
          <div className="flex flex-wrap font-body">
            {backEnd &&
              backEnd.map((skill: any) => {
                return <p className="pr-5 pb-2 text-sm">{skill}</p>;
              })}
          </div>
        </div>
        <div className="my-6 bg-[#fcecf1] rounded px-5 py-1 md:w-[40%]">
          <h2 className="font-title text-[#357ab7] tracking-wider text-2xl py-1">
            Databases
          </h2>
          <div className="flex flex-wrap font-body">
            {databases &&
              databases.map((skill: any) => {
                return <p className="pr-5 pb-2 text-sm">{skill}</p>;
              })}
          </div>
        </div>
        <div className="my-6 bg-[#fcecf1] rounded px-5 py-1 md:w-[40%]">
          <h2 className="font-title text-[#357ab7] tracking-wider text-2xl py-1">
            Deployment & Tools
          </h2>
          <div className="flex flex-wrap font-body">
            {tools &&
              tools.map((skill: any) => {
                return <p className="pr-5 pb-2 text-sm">{skill}</p>;
              })}
          </div>
        </div>

      </section>
    </>
  );
}

export default Skills;
