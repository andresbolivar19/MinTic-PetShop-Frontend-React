import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        navigate('/login');
    }

    return (   
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" data-widget="pushmenu" to={"#"} role="button"><i className="fas fa-bars" /></Link>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to={ "/admin" } className="nav-link">Home</Link>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="fas fa-search" />
                                    </button>
                                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                <li className="nav-item">
                    <button 
                        className="btn btn-sm btn-danger" 
                        onClick={logout}
                        role="button">
                        <i className="fas fa-sign-out" />
                        Cerrar Sesion
                    </button>
                </li>

            </ul>
        </nav>
    )
}
    
export default Navbar;
            