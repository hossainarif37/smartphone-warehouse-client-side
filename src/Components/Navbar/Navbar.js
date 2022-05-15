import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/manage">Manage Items</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/myitems">My Items</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/additems">Add Item</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/blogs">Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;