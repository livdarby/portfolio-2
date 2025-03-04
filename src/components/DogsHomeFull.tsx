import BackButton from "./BackButton";
import dog_home from "../../assets/dog_home.png";
import dog_profile from "../../assets/dog_profile.png";

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
          <div className="bg-white bg-opacity-40 rounded m-4 flex flex-col gap-4 p-4 font-body">
            <img src={dog_profile} alt="Project screenshot of a dog's profile" className="rounded shadow" />
            <p>
              Shenton Dogs' Refuge required an overhaul of their fostering and
              volunteering management system. Previously, the staff has managed
              everything manually, including keeping track of different carer
              capabilities, availability and placement dates.
            </p>
            <p>
              I have been working on a software solution that streamlines this
              system and allows for easy and efficient management of foster and
              volunteer care.
            </p>
            <p>
              I am working closely with the brand design team to bring
              user-friendly, intuitive designs to life using Next.js and
              Tailwind CSS.
            </p>
            <p>
              The back-end is powered by Laravel, providing robust and secure
              features and making the most of built-in authentication and
              database management.
            </p>
            <p>
              The site allows users to register and log in, view available dogs,
              add new foster placements and assign them to appropriate carers.
              The site utilises permissions to ensure only authorised users can
              access certain features based on their role.
            </p>
            <p>
              I am owning the development of this project alongside another
              intern, which has given me insight into commercial software
              development and the importance of collaboration and communication
              in web development.
            </p>
            <p>
              We are using Git for version control, GitLab for CI/CD and Figma
              for design.
            </p>
            <img
              src={dog_home}
              alt="Project screenshot"
              className="rounded shadow"
            />
            <p>
              I am particularly proud of the Edit Carer information page, where
              I've used React Hook Form to pre-populate the fields and watch for
              value changes to pass in the API request body. I used Controller
              components to manage externally controlled components, including the
              date picker field for adding children's ages.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default DogsHomeFull;
