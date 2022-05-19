import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mt-5">

            <footer className="text-center text-lg-start bg-dark">
                <div className="container d-flex justify-content-center py-5">
                    <h1 className="card-title text-secondary">
                        Smartphones
                    </h1>
                </div>

                <div className="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    &copy; 2022 Copyright:
                    <Link className="text-white" to='/'> smartphones</Link>
                </div>

            </footer>

        </div>
    );
};

export default Footer;