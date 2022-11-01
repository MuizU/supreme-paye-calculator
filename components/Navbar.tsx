import Image from "next/image";
import Logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-5">
      <a href="#" className="navbar-brand mb-0 ms-2 mt-0 ">
        <Image src={Logo} alt="logo" width={40} height={40} />
      </a>
        <span className="navbar-brand mb-0 h1 mx-auto"> Supreme PAYE Calculator</span>
    </nav>
  );
}
