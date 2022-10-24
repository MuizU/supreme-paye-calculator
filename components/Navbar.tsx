import Image from 'next/image';
import Logo from '../assets/logo.png';
export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark mb-5">
      <a href="#" className="navbar-brand">
      <img src={Logo} alt="logo" width={'60px'} height={'60px'} />
      </a>
    </nav>
  );
}
