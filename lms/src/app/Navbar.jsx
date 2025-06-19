import Link from "next/link";
import "./globals.css";

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">
                <h1>EduCore</h1>
            </div>
            <div className="nav-links">
                <Link href="/">Educator Dashboard</Link>
                <Link href="/">Student Enrollment</Link>
            </div>
        </nav>
    )
}