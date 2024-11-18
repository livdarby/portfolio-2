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
              to my portfolio
            </h3>
          </div>
          <h1 className="font-title text-[#357ab7] text-center my-12 text-6xl">
            I'm Liv.
          </h1>
          <img
            className="rounded-full h-96 mx-auto md:hidden"
            src={dolomites}
            alt="Hiking in the Dolomites"
          />
          <p className="my-10 font-title text-[#357ab7] text-2xl text-center px-8 lg:text-3xl">
            I'm a Junior Developer based in Perth, Western Australia.
          </p>
        </div>
        <div className="font-body flex flex-col gap-5 px-8 my-10 md:flex-row md:flex-wrap md:justify-center">
          <img
            src={dolomites}
            alt="Hiking photo"
            className="rounded-t-full w-[230px] h-[321px] hidden md:flex my-auto"
          />
          <p className="md:w-[400px] lg:w-[700px] lg:h-max lg:my-auto">
            Over the past 8 years, I've worked in account management and
            business development in the digital marketing industry. I have had
            the privilege of working alongside incredible brands, implementing
            their influencer marketing campaigns and affiliate tracking
            technology.
            <br />
            <p className="hidden md:flex md:mt-4">
              Whilst working closely with internal and client dev teams, I
              uncovered a keen interest in web development - the team dynamic,
              challenging new concepts and logical problem solving that the work
              offers.
            </p>
            <p className="hidden md:flex md:mt-4">
              In January 2024, I decided to seriously pursue this passion,
              enrolling in a full-time Software Engineering Bootcamp with
              General Assembly. Throughout the three month course I built a
              solid foundation in front and back-end web development, which I
              have continued to advance through freelance work and personal
              projects.
            </p>
          </p>
          <p className="md:hidden">
            Whilst working closely with internal and client dev teams, I
            uncovered a keen interest in web development - the team dynamic,
            challenging new concepts and logical problem solving that the work
            offers.
          </p>
          <p className="md:hidden">
            In January 2024, I decided to seriously pursue this passion,
            enrolling in a full-time Software Engineering Bootcamp with General
            Assembly. Throughout the three month course I built a solid
            foundation in front and back-end web development, which I have
            continued to advance through freelance work and personal projects.
          </p>
        </div>
        <div className="bg-[#357ab7] text-white rounded-full my-5 py-2 px-5 mx-3 flex md:w-[60%] md:mx-auto">
          <div className="w-[75%] h-[60px] flex flex-col justify-center">
            <h1 className="font-title text-lg tracking-wider">
              Freelance web developer
            </h1>
          </div>
          <p className="font-title text-lg tracking-wider w-[30%] flex items-center justify-end">
            May - present
          </p>
        </div>
        <div className="bg-[#357ab7] text-white rounded-full my-5 py-2 px-5 mx-3 flex md:w-[60%] md:mx-auto">
          <div className="w-[75%] h-[60px] flex flex-col justify-center">
            <h1 className="font-title text-lg tracking-wider">
              General Assembly
            </h1>
            <p className="font-body text-xs lg:text-sm">
              Student, Software Engineering
            </p>
          </div>
          <p className="font-title text-lg tracking-wider w-[25%] flex items-center justify-end">
            Jan - Apr '24
          </p>
        </div>
        <div className="bg-[#357ab7] text-white rounded-full my-5 py-2 px-5 mx-3 flex md:w-[60%] md:mx-auto">
          <div className="w-[65%] h-[60px] flex flex-col justify-center">
            <h1 className="font-title text-lg tracking-wider">
              CJ, publicis media
            </h1>
            <p className="font-body text-xs lg:text-sm">Business Development Manager | London</p>
          </div>
          <p className="font-title text-lg tracking-wider w-[35%] flex items-center justify-end">
            Aug '22 - dec '24
          </p>
        </div>
        <div className="bg-[#357ab7] text-white rounded-full my-5 py-2 px-5 mx-3 flex md:w-[60%] md:mx-auto">
          <div className="w-[65%]">
            <h1 className="font-title text-lg tracking-wider">
              LTK (rewardStyle)
            </h1>
            <p className="font-body text-xs lg:text-sm">
              Business Development Manager & Account Manager | London
            </p>
          </div>
          <p className="font-title text-lg tracking-wider w-[35%] flex items-center justify-end">
            Jan '19 - jul '22
          </p>
        </div>
        <div className="md:w-[90%] md:mx-auto">
          <h1 className="font-title text-[#357ab7] text-2xl text-center px-8 my-12 lg:w-[80%] lg:mx-auto lg:text-3xl">
            I'm currently looking for Junior Developer roles in Perth or remote.
            Please get in touch if you would like to collaborate or simply have
            a chat.
          </h1>
          <p className="font-body px-8 mb-5 md:w-[80%] md:mx-auto lg:w-[95%]">
            Before stepping into web development, I was a Business Development
            Manager. I worked with retail clients on bespoke affiliate and
            influencer marketing strategies and specialised in the fashion and
            beauty space. During my time in this role, I learnt a great deal
            about relationship management, cross-functional collaboration and
            commercial negotations.
          </p>
          <p className="font-body px-8 mb-10 md:w-[80%] md:mx-auto lg:w-[95%]">
            Outside of work, I love hiking, reading and spending time in nature.
            Having recently emigrated to Australia from the UK, I've been
            enjoying exploring my new home and have a long list of adventures on
            my bucket list!
          </p>
        </div>
      </section>
    </>
  );
}
export default Welcome;
