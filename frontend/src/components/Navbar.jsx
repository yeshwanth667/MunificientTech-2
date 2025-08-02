// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Mock user info - in real apps, fetch from context/auth service
        const storedUser = JSON.parse(localStorage.getItem('user')) || {
            id: 'dummyStudent123',
            name: 'Yeshwanth Krishna'
        };
        setUser(storedUser);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <Link className="navbar-brand" to="/">Course Catalog</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto align-items-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/my-enrollments">My Enrollments</Link>
                    </li>
                    {user && (
                        <li className="nav-item ms-3 text-white">
                            👤 {user.name}
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
