import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
        <a href="#" className="navlink"><span>HOME</span></a>

        <a href="#" className="navlink"><span className="no-hover">COUNTRIES</span>
          <div className="sub-menu-1 sub1">
            <ul>
              <li className="hover-sub">
                <a href="">Rússia</a>
                <div className="sub-menu-2">
                  <ul>
                    <li><a href="">Vida na Rússia</a></li>
                    <li><a href="">Estudos na Rússia</a></li>
                  </ul>
                </div>
              </li>

              <li className="hover-sub">
                <a href="">Polônia</a>
                <div className="sub-menu-2">
                  <ul>
                    <li><a href="">Vida na Polônia</a></li>
                    <li><a href="">Estudos na Polônia</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </a>

        <a href="#" className="navlink"><span className="no-hover">ABOUT US</span>
          <div className="sub-menu-1 sub2">
            <ul>
              <li><a href="">Services</a></li>
              <li><a href="">KKER</a></li>
              <li><a href="">About Us</a></li>
            </ul>
          </div>
        </a>

        <a href="#" className="navlink"><span className="application no-hover
no-hover">CANDIDATURAS</span>
          <div className="sub-menu-1 sub3">
            <ul>
              <li><a href="">Requisitos</a></li>
              <li><a href="">Universidade</a></li>
              <li><a href="">Especialidades</a></li>
              <li><a href="">Aplicar</a></li>
            </ul>
          </div>
        </a>

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