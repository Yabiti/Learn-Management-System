import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="navbar">
            <div>
                <h1>EduCore</h1>
            </div>
            <Link href="/">Educator Dashboard</Link>
            <Link href="/">Student Enrollment</Link>
        </nav>
    )
}