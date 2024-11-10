import livlogo from "../../assets/livlogo.png";
import laptop from "../../assets/laptop.png";
import cpp from "../../assets/cpp.png";
import quiz from "../../assets/quiz.png";
import fpl from "../../assets/fpl.png";
import fpl2 from "../../assets/fpl2.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <section className="bg-[#f9d7df] h-screen p-8">
        <div>
          <h2 className="font-body uppercase tracking-wider text-[#333] font-semibold mb-4 text-center text-xs">
            Liv Darby | Junior Developer
          </h2>
          <div>
            <h1 className="font-title text-[#357ab7] text-7xl sm:text-8xl md:text-9xl lg:text-largest tracking-wide text-center mb-4">
              Portfolio
            </h1>
            <h3 className="text-center font-script text-white tracking-widest text-4xl md:text-5xl lg:text-6xl -rotate-[9deg] -mt-8 sm:-mt-10 lg:-m-14">
              Liv Darby
            </h3>
          </div>
        </div>

        {/* <div className="w-full mt-32 sm:mt-48 lg:mt-52 sm:w-[600px] md:w-[720px] lg:w-[900px] mx-auto">
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="px-1" // reduce padding between slides
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            customLeftArrow={
              <button className="absolute left-0 text-xl text-[#333] bg-white rounded-full p-3 shadow-lg hover:bg-[#357ab7] hover:text-white transition-all">
                ←
              </button>
            }
            customRightArrow={
              <button className="absolute right-0 text-xl text-[#333] bg-white rounded-full p-3 shadow-lg hover:bg-[#357ab7] hover:text-white transition-all">
                →
              </button>
            }
          >
            <div className="p-2 flex justify-center">
              <img
                src={fpl}
                alt="Project 4 screenshot - Premier Pics"
                className="w-64 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2 flex justify-center">
              <img
                src={cpp}
                alt="Project 1 screenshot - Minefield"
                className="w-64 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-2 flex justify-center">
              <img
                src={quiz}
                alt="Project 2 screenshot - Quiz"
                className="w-64 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2 flex justify-center">
              <img
                src={fpl2}
                alt="Project 4 screenshot - Premier Pics"
                className="w-64 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div> */}
          {/* </Carousel> */}
        {/* </div> */}
      </section>
    </>
  );
}

export default Home;
