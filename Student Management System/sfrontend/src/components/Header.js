import React from "react";
// import {Link} from "react-router-dom";

function Header(){

    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://www.google.com/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        {/* <link to="/" className="nav-Link">Home</link> */}
                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                        {/* <link to="/add" className="nav-Link">Home</link> */}
                        <a className="nav-link" href="/add"> Create Student </a>
                        </li>
                        <li className="nav-item">
                        {/* <link to="/add" className="nav-Link">Home</link> */}
                        <a className="nav-link" href="/"> All Student </a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Header;