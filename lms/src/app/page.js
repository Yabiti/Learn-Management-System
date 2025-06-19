

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
                <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/paypal.png" alt="PayPal" className="payment-images" />
                </a>
                <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/paypal.png" alt="PayPal" className="payment-images" />
                </a>
                <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/paypal.png" alt="PayPal" className="payment-images" />
                </a>
                <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/paypal.png" alt="PayPal" className="payment-images" />
                </a>
                <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/paypal.png" alt="PayPal" className="payment-images" />
                </a>
            </div>
        </div>
    );
}