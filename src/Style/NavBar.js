import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {/* <Link to="Home">Home</Link>
    <Link to="SignUp">SignUp</Link>
    <Link to="Login">Login</Link> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary " >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <Link class="navbar-brand" to="#">
            Navbar
          </Link> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="SignUp">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="Login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="ForgotPassword">
                  ForgotPassword
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="NewPassword">
                  NewPassword
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
                
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
