import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="navbar navbar-expand navbar-dark bg-dark mb-5 ">
            <div className="container">
                <Link to={"/"} className={"navbar-brand"}>
                    Stagiares
                </Link>
                <div className="collapse navbar-collapse d-flex justify-content-end">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Liste des Stagiaires
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addStagiare" className="nav-link">
                                Ajouter Stagiaire
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
