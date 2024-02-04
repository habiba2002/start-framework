import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const styling = ({ isActive }) => {
        return {
            backgroundColor: isActive ? "green" : "",
            borderRadius: isActive ? "5px" : ""
        }
    }
    return <>
        <div className='row'>
            <nav className="navbar navbar-expand-lg py-4 col-12">
                <div className="container">
                    <a className="navbar-brand text-white fw-bold" href="#">Start Framework</a>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-4">
                            <li className="nav-item px-3">
                                <NavLink className="nav-link text-white fw-bold" aria-current="page" to="Portofolio" style={styling}>Portofolio</NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link text-white fw-bold" to="About" style={styling}>About</NavLink>
                            </li>
                            <li className="nav-item px-3">
                                <NavLink className="nav-link text-white fw-bold" to="Contact" style={styling}>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
}
