import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <NavLink className="navbar-brand page-scroll" to="#page-top">
            Planete Hotel
          </NavLink>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="#about" className="page-scroll">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="#restaurant-menu" className="page-scroll">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="#portfolio" className="page-scroll">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="#call-reservation" className="page-scroll">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
