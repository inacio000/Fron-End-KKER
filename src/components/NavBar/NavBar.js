import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function NavBar() {

  useEffect(() => {
    AOS.init({duration: 3000});
  }, [])

  return (
    <header data-aos="fade-down">

      <NavLink to={`/home`} className="logo" >
        <img src="../images/logotipe.png" />
      </NavLink>

      <input type="checkbox" id="menu-bar" />
      <label htmlFor="menu-bar">Menu</label>

      <nav className="navbar">

        <ul>
          <li>
            <NavLink to={`/home`}> Home </NavLink>
          </li>

          <li className="sub">
            <NavLink to={``}> Países + </NavLink>

            {/* Sub-Menu */}
            <ul>
              <li className="sub">
                <NavLink to={``}> Rússia + </NavLink>
                <ul>
                  <li>
                    <NavLink to={`/russia_life`}> Vida na Rússia </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/russia_study`}> Estudos na Rússia </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/russian-gallery`}> Galeria </NavLink>
                  </li>
                </ul>
              </li>

              <li className="sub">
                <NavLink to={`/home`}> Polônia + </NavLink>

                {/* Sub-Menu 2 */}
                <ul>
                  <li>
                    <NavLink to={`/poland_life`}> Vida na Polônia </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/poland_study`}>Estudos na Polônia</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/poland-gallery`}> Galeria </NavLink>
                  </li>
                </ul>

              </li>
            </ul>

          </li>

          <li>
            <NavLink to={``}> Sobre + </NavLink>
            <ul>
              <li>
                <NavLink to={`/service`}> Serviços </NavLink>
              </li>
              <li>
                <NavLink to={`/kker`}>KKER</NavLink>
              </li>
              <li>
                <NavLink to={`/about`}>Sobre Nós</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink className="special" to={``}> Inscrição + </NavLink>

            {/* Sub-Menu */}
            <ul>
              <li>
                <NavLink to={`/req`}> Requisitos </NavLink>
              </li>
              <li>
                <NavLink to={`/universities`}> Universidades </NavLink>
              </li>
              <li>
                <NavLink to={`/specialties`}> Especialidades </NavLink>
              </li>
              <li>
                <NavLink to={`/apply`}> Aplicar </NavLink>
              </li>
            </ul>
          </li>

        </ul>

      </nav>

    </header>
  )
}

export default NavBar;