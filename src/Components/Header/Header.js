// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import ayzen from '../../Icons/ayzen-logo.png';

const Header = ({ toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-transparent text-black">
            <div className="container mx-auto flex justify-between items-center p-5">
                <div className="text-2xl ml-5 mt-3 flex flex-row">
                    <img className={"ayzen-img mr-2"} src={ayzen} alt={"ayzen"} />
                    <Link to="/" className={"logo-ayzen hidden lg:block"}>AYZEN</Link>
                </div>
                <button
                    className="lg:hidden flex flex-col text-black px-3 py-2 border rounded border-white"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6 lg:hidden"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
                <nav
                    className={`lg:flex lg:items-center bg-transparent lg:mr-36 lg:space-x-6 ${isOpen ? 'flex flex-col items-center' : 'hidden'}`}
                >
                    <Link to="/" className="nav-link px-3 py-2 text-sm font-medium rounded">
                        Overview
                    </Link>
                    <Link to="/" className="nav-link px-3 py-2 text-sm font-medium rounded">
                        Team
                    </Link>
                    <div className="mt-2">
                        <input
                            type="checkbox"
                            className="checkbox"
                            id="checkbox"
                            onChange={toggleTheme}
                        />
                        <label htmlFor="checkbox" className="checkbox-label">
                            <FontAwesomeIcon className={"-p-2"} icon={faMoon} />
                            <FontAwesomeIcon className={"-p-2"} icon={faSun} />
                            <span className="ball"></span>
                        </label>
                    </div>
                </nav>
            </div>
        </header>

    );
};

export default Header;
