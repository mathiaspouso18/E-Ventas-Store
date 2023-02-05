import React from "react";
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">
          <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink to={'/'} className="nav-link float-right">
                  E-Ventas
                </NavLink>
            </li>
          </ul>
          </span>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={'/category/ropa'} className="nav-link float-right">
                    Ropa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/category/calzado'} className="nav-link float-right">
                    Calzado
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/category/carrito'} className="nav-link float-right">
                    <CartWidget/>
                </NavLink>
              </li>
            </ul>
          <div>
          </div>
        </nav>
      );
}

export default NavBar;