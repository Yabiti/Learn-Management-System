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
                <div className="compay">
                    <h3>Company</h3>
                    <link href="/">Home</link>
                    <link href="/">About Us</link>
                    <link href="/">Contact Us</link>
                    <link href="/">Privacy & policy</link>
                </div>
            </footer>
            </div>
    );
}