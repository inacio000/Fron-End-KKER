import { useRef } from "react";
import { FaBars, FaTimes, FaInstagram } from "react-icons/fa";

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsiveNav");
  }

  return (
    <header>
      <a href="index.html" className="logo">
        <img src="../images/logotipe.png" alt="Logo image" />
      </a>
      <nav ref={navRef} className="navbar" id="navbar">
        <a href="#" className="navlink">HOME</a>

        <a href="#" className="navlink">ABOUT US</a>

        <a href="#" className="navlink">SERVICES</a>

        <a href="#" className="navlink blog">BLOGS</a>

        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn nav-close-btn faTime" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  )
}

export default NavBar;