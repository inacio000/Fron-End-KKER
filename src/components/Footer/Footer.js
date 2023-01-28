import { FaInstagram, FaMailBulk, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="social-medias">
        <a>
          <FaInstagram />
        </a>
        <a>
          <FaFacebook />
        </a>
        <a>
          <FaMailBulk />
        </a>
        <a>
          <FaWhatsapp />
        </a>
      </div>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
      </ul>

      <p>KKER @2023</p>
    </footer>
  )
}

export default Footer