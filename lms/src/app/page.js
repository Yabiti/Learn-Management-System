import { useState } from 'react';
import {videos} from './components/videocard.jsx';

export default function Home() {
    const VisibleCount= [Count, SetvisibleCount] , useState(0)
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
            <div className="logos">
                <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/paypal.png" alt="PayPal" className="payment-images" />
                </a>
                <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/walmart.png" alt="PayPal" className="payment-images" />
                </a>
                <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/apple.png" alt="PayPal" className="payment-images" />
                </a>
                <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/microsoft.png" alt="PayPal" className="payment-images" />
                </a>
                <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/mastercard.png" alt="PayPal" className="payment-images" />
                </a>
            </div>
            </div>
            <div className="category">
                <div className="category-list">
                    <h1>Learn From The Best</h1>
                    <p className="pa">Unlock your potential through interactive lessons and real-world projects.</p>
                </div>
            </div>
            <div className='video-editor'>
                {videos.map(video => (
                    <div key={video.id} className='video-card'>
                        <iframe
                        src={video.url}
                        title={video.title}
                        name={video.name}
                        rating={video.rating}
                        ></iframe>
                        <div className='video-details'>
                        <h3 className='title'>{video.title}</h3>
                        <p>{video.name}</p>
                        <div className="rating">
                            {'★'.repeat(video.rating) + '☆'.repeat(5 - video.rating)}
                        </div>
                        <p>{video.price}</p>
                    </div>
                    </div>
                ))}
            </div>
            </div>
    );
}
