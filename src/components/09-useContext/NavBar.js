import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          UseContext
        </NavLink>

        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <NavLink exact to="/" activeClassName="active" className="nav-link">
              Home
            </NavLink>

            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-link"
            >
              About
            </NavLink>

            <NavLink
              exact
              to="/login"
              activeClassName="active"
              className="nav-link"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
