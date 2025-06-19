

export default function Home() {
    return(
        <div>
        <div className="Home-page">
            <h1>Transform Your Future with EduCore — Your Trusted <br />Platform for Lifelong Learning and Professional Growth</h1>
            <p className="para">Learn smarter, grow faster. EduCore is your trusted partner for lifelong learning and professional development
                 — all in one easy-to-use platform.</p>
            
        <form className="form">
            <input className="input-type" type="text"  placeholder="search for courses" />
            <button className="btn" type="submit">Search</button>
        </form>
        </div>
            <div className="pay">
                <p>Check out & Payment</p>
                <img src="images/paypal"/>
            </div>
        </div>
    );
}