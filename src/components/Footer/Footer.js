import { FaInstagram, FaMailBulk, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="social-medias">
        <NavLink to={`/`}>
          <FaInstagram />
        </NavLink>
        <NavLink to={`/`}>
          <FaFacebook />
        </NavLink>
        <NavLink to={`/`}>
          <FaMailBulk />
        </NavLink>
        <NavLink to={`/`}>
          <FaWhatsapp />
        </NavLink>
      </div>

      <ul>
        <li>
          <NavLink to={`/`}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`/`}>Países</NavLink>
        </li>
        <li>
          <NavLink to={`/`}>Sobre</NavLink>
        </li>
        <li>
          <NavLink to={`/`}>Candidaturas</NavLink>
        </li>
      </ul>

      <p>&copy; KKER 2023</p>
      
    </footer>
  )
}

export default Footer