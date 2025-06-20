import Link from "next/link";
import "../globals.css";

export default function Footer(){
    return(
        <div>
            <footer className="footer">
                <div className="loggo">
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
                <div className="subscribe">
                    <h3>Subscribe for fresh lessons, helpful tips, and course updates.</h3>
                    <p>Subscribe to get the latest courses, exclusive discounts,<br/> and expert learning tips directly in your inbox.</p>
                </div>
            </footer>
            </div>
    );
}