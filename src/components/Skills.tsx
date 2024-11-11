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

  const databases = ["SQL", "PostgreSQL", "MongoDB", "SQLAlchemy", "Mongoose"];

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
      <section className="bg-[#f9d7df] min-h-screen p-8">
        <div>
          <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
            Liv Darby | Junior Developer
          </h2>
          <h1 className="font-title text-[#357ab7] tracking-wider text-7xl text-center my-5">
            My Skills
          </h1>
        </div>
        <div className="my-6">
          <h2 className="font-title text-white tracking-wider text-3xl pl-10">
            Front-end
          </h2>
          <div className="bg-[#357ab7] flex flex-wrap font-body font-medium text-white rounded-full px-6 py-1 justify-center">
            {frontEnd &&
              frontEnd.map((skill: any) => {
                return <p className="px-3">{skill}</p>;
              })}
          </div>
        </div>

        <div className="my-6">
          <h2 className="font-title text-white tracking-wider text-3xl pl-14">
            Back-end
          </h2>
          <div className="bg-[#357ab7] flex flex-wrap font-body font-medium text-white rounded-full px-6 py-1 justify-center">
            {backEnd &&
              backEnd.map((skill: any) => {
                return <p className="px-3">{skill}</p>;
              })}
          </div>
        </div>

        <div className="my-6">
          <h2 className="font-title text-white tracking-wider text-3xl pl-20">
            Databases
          </h2>
          <div className="bg-[#357ab7] flex flex-wrap font-body font-medium text-white rounded-full px-6 py-1 justify-center">
            {databases &&
              databases.map((skill: any) => {
                return <p className="px-3">{skill}</p>;
              })}
          </div>
        </div>

        <div className="my-6">
          <h2 className="font-title text-white tracking-wider text-3xl pl-28">
            Deployment & Tools
          </h2>
          <div className="bg-[#357ab7] flex flex-wrap font-body font-medium text-white rounded-full px-6 py-1 justify-center">
            {tools &&
              tools.map((skill: any) => {
                return <p className="px-3">{skill}</p>;
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
