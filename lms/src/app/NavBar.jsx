import link from "next/link";

export default function Navbar(){
    return(
        <nav>
            <h1>EduCore</h1>
            <link href="/">Educator Dashboard</link>
            <link href="/">Student Enrollment</link>
        </nav>
    )
}