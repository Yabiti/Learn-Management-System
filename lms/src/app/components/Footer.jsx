import Link from "next/link";
import "../globals.css";

export default function Footer(){
    return(
        <div>
            <footer className="navbar">
                <div className="logo">
                    <h1>EduCore</h1>
                <   p className="pa">Learn anytime, anywhere. EduCore helps you grow your <br/>skills and reach your goals — one lesson at a time.</p>
                </div>
                <div className="company">
                    <h3 className="c">Company</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About Us</Link></li>
                        <li><Link href="/">Contact Us</Link></li>
                        <li><Link href="/">Privacy & Policy</Link></li>
                    </ul>
                </div>
                <div className="subscrib">
                    <h3>Subscribe To Our Newsletter</h3>
                </div>
            </footer>
            </div>
    );
}