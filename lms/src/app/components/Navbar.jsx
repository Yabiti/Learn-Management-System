'use client'
import { useState } from "react";
import Link from "next/link";
import "../globals.css";

export default function Navbar() {
    const [showForm, setShowForm] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formData.email && formData.password) {
            setIsAuthenticated(true);
            setShowForm(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h1>EduCore</h1>
            </div>
            <div className="nav-links">
                {!isAuthenticated ? (
                    <>
                        <button onClick={() => setShowForm(!showForm)} className="create-account-btn">Create Account</button>
                        {showForm && (
                            <div className="card-form">
                                <form onSubmit={handleFormSubmit}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <button className="submit" type="submit">Submit</button>
                                </form>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <Link href="/Dashboard/Educator">Educator Dashboard</Link>
                        <Link href="/Dashboard/Student">Student Enrollment</Link>
                    </>
                )}
            </div>
        </nav>
    );
}
