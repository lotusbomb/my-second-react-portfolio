import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/logo.svg" alt="Logoipsum" />
      </div>
      <a
        className={`nav-hamburger ${navActive ? "active" : ""}`}
        onClick={(e) => {
            e.preventDefault();
            toggleMenu();

        }}
        href=""
      >
        <span className="nav-hamburger-line"></span>
        <span className="nav-hamburger-line"></span>
        <span className="nav-hamburger-line"></span>
      </a>
      <div className={`navbar-items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar-content"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar-content"
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar-content"
            >
              About Me
            </Link>
          </li>

          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar-active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Testimonials"
              className="navbar-content"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>

      <Link
        onClick={closeMenu}
        activeClass="navbar-active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="ContactMe"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;


