import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <nav className="pt-10 bg-[#f9d7df] font-body uppercase font-semibold text-sm sm:text-base">
        <div className="flex justify-evenly bg-[#357ab7] text-white">
          <Link className="cursor-pointer" to="/">
            Welcome
          </Link>
          <Link className="cursor-pointer" to="projects">
            Projects
          </Link>
          <Link className="cursor-pointer" to="skills">
            Skills
          </Link>
          <Link className="cursor-pointer" to="contact">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Footer;
