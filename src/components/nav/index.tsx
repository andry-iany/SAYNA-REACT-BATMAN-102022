import logo from "../../assets/logos/logohome.png";
import "./style.scss";

const Nav = () => {
  return (
    <section id="nav">
      <nav className="navbar navbar-expand-lg justify-content-between px-3 py-4 py-lg-5 gap-4 navbar-dark">
        <a className="navbar-brand logo px-4">
          <img src={logo} alt="Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarLinks">
          <ul className="navbar-nav text-uppercase fs-4 ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Game</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">E-shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Mon Compte</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
