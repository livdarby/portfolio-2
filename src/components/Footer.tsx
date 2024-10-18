import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <nav className="absolute w-[100%] sm:top-[240px] md:top-[280px] lg:top-[350px] top-[200px] font-body uppercase flex justify-evenly font-semibold text-sm sm:text-base">
        <Link to="/">Home</Link>
        <Link to="welcome">Welcome</Link>
        <Link to="welcome">Skills</Link>
        <Link to="welcome">Projects</Link>
        <Link to="welcome">Contact</Link>
      </nav>
    </>
  );
}

export default Footer;
