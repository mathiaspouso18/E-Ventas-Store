import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            E-Ventas
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Electronica
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hogar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link float-right" href="#">
                    <CartWidget/>
                </a>
              </li>
            </ul>
          </div>
          <div>
          </div>
        </nav>
      );
}

export default NavBar;