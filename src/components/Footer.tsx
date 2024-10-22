import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <nav className="absolute w-[100%] sm:top-[240px] md:top-[280px] lg:top-[350px] top-[200px] font-body uppercase flex justify-evenly font-semibold text-sm sm:text-base">
        <Link className="cursor-pointer" to="/">Home</Link>
        <Link className="cursor-pointer" to="welcome">Welcome</Link>
        <Link className="cursor-pointer" to="welcome">Skills</Link>
        <Link className="cursor-pointer" to="welcome">Projects</Link>
        <Link className="cursor-pointer" to="welcome">Contact</Link>
      </nav>
    </>
  );
}

export default Footer;
