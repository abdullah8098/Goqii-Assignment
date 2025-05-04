import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './../Layout.css';

const LeftNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(prevState => !prevState);
    };

    return (
        <div>
            <button
                className="btn btn-primary d-md-none"
                onClick={toggleNav}
                style={{ position: 'absolute', top: '20px', left: '20px' }}
            >
                ☰
            </button>

            <nav className={`left-nav bg-light p-3 ${isNavOpen ? 'closed' : 'closed'}`}>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active bg-primary text-white' : 'text-dark'}`
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/user"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? 'active bg-primary text-white' : 'text-dark'}`
                            }
                        >
                            User
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default LeftNav;
