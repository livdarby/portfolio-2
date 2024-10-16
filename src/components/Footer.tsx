import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <nav className="absolute w-[100%] sm:top-[200px] lg:top-[265px] top-[135px] font-body uppercase flex justify-evenly font-semibold">
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
