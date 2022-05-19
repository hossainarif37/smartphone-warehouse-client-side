import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css'

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };


    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h1 className='fw-bold'><Link className='text-decoration-none' to="/"><span className='text-dark'>Smart</span><span className='navbar-brand-phone'>Phones</span></Link></h1>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-link">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>

                            {user && <> <li className="nav-item">
                                <Link className="nav-link" to="/manage">Manage Items</Link>
                            </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/myitems">My Items</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/additems">Add Item</Link>
                                </li></>}
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            {!user ? <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li> :
                                <li className="nav-item">
                                    <Link onClick={logout} className="nav-link text-danger" to="">Logout</Link>
                                </li>}
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;