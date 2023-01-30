import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <header>

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
            <NavLink to={`/home`}> Países + </NavLink>

            {/* Sub-Menu */}
            <ul>
              <li className="sub">
                <NavLink to={`/home`}> Rússia + </NavLink>
                <ul>
                  <li>
                    <NavLink to={`/home`}> Vida na Rússia </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/home`}> Estudos na Rússia </NavLink>
                  </li>
                </ul>
              </li>

              <li className="sub">
                <NavLink to={`/home`}> Polônia + </NavLink>

                {/* Sub-Menu 2 */}
                <ul>
                  <li>
                    <NavLink to={`/home`}> Vida na Polônia </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/home`}>Estudos na Polônia</NavLink>
                  </li>
                </ul>

              </li>
            </ul>

          </li>

          <li>
            <NavLink to={`/About`}> Sobre + </NavLink>
            <ul>
              <li>
                <NavLink to={`/home`}> Serviços </NavLink>
              </li>
              <li>
                <NavLink to={`/home`}>KKER</NavLink>
              </li>
              <li>
                <NavLink to={`/home`}>Sobre Nós</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink className="special" to={`/home`}> Candidaturas + </NavLink>

            {/* Sub-Menu */}
            <ul>
              <li>
                <NavLink to={`/req`}> Requisitos </NavLink>
              </li>
              <li>
                <NavLink to={`/universidades`}> Universidades </NavLink>
              </li>
              <li>
                <NavLink to={`/espcialidades`}> Especialidades </NavLink>
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