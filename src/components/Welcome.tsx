import dolomites from "../../assets/dolomites.JPG";

function Welcome() {
  return (
    <>
      <section className="bg-[#f9d7df] min-h-full">
        <div>
          <h2 className="font-body uppercase mt-8 tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
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
          <h1 className="font-title text-[#357ab7] text-center my-10 text-6xl">
            I'm Liv.
          </h1>
          <img
            className="rounded-full h-96 mx-auto"
            src={dolomites}
            alt="Hiking in the Dolomites"
          />
          <p className="my-10 font-title text-[#357ab7] text-2xl text-center px-8">
            I'm a Junior Developer based in Perth, Western Australia.
          </p>
        </div>
        <div className="font-body flex flex-col gap-5 px-8 my-10">
          <p>
            Over the past 8 years, I've worked in account management and
            business development in the digital marketing industry. I have had
            the privilege of working alongside incredible brands, implementing
            their influencer marketing campaigns and affiliate tracking
            technology.
          </p>
          <p>
            Whilst working closely with internal and client dev teams, I
            uncovered a keen interest in web development - the team dynamic,
            challenging new concepts and logical probleming solving that I felt
            my role in business development was missing.
          </p>
          <p>
            In January 2024, I decided to seriously pursue this passion,
            enrolling in a full-time Software Engineering Bootcamp with General
            Assembly. Throughout the three month course I built a solid
            foundation in front and back-end web development, which I have
            continued to advance through freelance work and personal projects.
          </p>
        </div>
        <div className="bg-[#357ab7] text-white rounded-full my-5 py-2 px-5 mx-3 flex">
          <div className="w-[75%] h-[60px] flex flex-col justify-center">
            <h1 className="font-title text-lg tracking-wider">
              General Assembly
            </h1>
            <p className="font-body text-xs">
              Student, Software Engineering Immersive
            </p>
          </div>
          <p className="font-title text-lg tracking-wider w-[25%] flex items-center justify-end">
            Jan - Apr '24
          </p>
        </div>
        <div className="bg-[#357ab7] text-white rounded-full my-5 py-2 px-5 mx-3 flex">
          <div className="w-[65%] h-[60px] flex flex-col justify-center">
            <h1 className="font-title text-lg tracking-wider">
              CJ, publicis media
            </h1>
            <p className="font-body text-xs">Business Development Manager</p>
          </div>
          <p className="font-title text-lg tracking-wider w-[35%] flex items-center justify-end">
            Aug '22 - dec '24
          </p>
        </div>
        <div className="bg-[#357ab7] text-white rounded-full my-5 py-2 px-5 mx-3 flex">
          <div className="w-[65%]">
            <h1 className="font-title text-lg tracking-wider">
              LTK (rewardStyle)
            </h1>
            <p className="font-body text-xs">
              Business Development Manager & Account Manager
            </p>
          </div>
          <p className="font-title text-lg tracking-wider w-[35%] flex items-center justify-end">
            Jan '19 - jul '22
          </p>
        </div>
        <div>
          <h1 className="font-title text-[#357ab7] text-2xl text-center px-8 my-12">
            I'm currently looking for Junior Developer roles in Perth or remote.
            Please get in touch if you would like to collaborate or simply have
            a chat.
          </h1>
          <p className="font-body px-8 mb-5">
            Before stepping into web development, I was a Business Development
            Manager. I worked with retail clients on bespoke affiliate and
            influencer marketing strategies and specialised in the fashion and
            beauty space. During my time in this role, I learnt a great deal
            about relationship management, cross-functional collaboration and
            commercial negotations.
          </p>
          <p className="font-body px-8">
            Outside of work, I love coffee, hiking, reading fantasy and
            exploring the wonders of Western Australia, having recently
            emigrated to Perth from the UK.
          </p>
        </div>
      </section>
    </>
  );
}
export default Welcome;
