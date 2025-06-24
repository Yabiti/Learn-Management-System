'use client';
import { useState } from 'react';
import {videos} from './components/VideoCard.jsx';
import Link  from 'next/link';

export default function Home() {
    const[Count,  setVisibleCount] = useState(4);
    const Handleloadmore = () => {
         setVisibleCount(prev => prev + 4);
    };

    const visiblevideos = videos.slice(0, Count)
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
                {visiblevideos.map(video => (
                    <Link key={video.id} href={`/video/${video.id}`} className='video-card'>
                        <img
                        src={video.thumbnail}
                        title={video.title}
                        name={video.name}
                        rating={video.rating}
                        ></img>
                        <div className='video-details'>
                        <h3 className='title'>{video.title}</h3>
                        <p>{video.name}</p>
                        <div className="rating">
                            {'★'.repeat(video.rating) + '☆'.repeat(5 - video.rating)}
                        </div>
                        <p>{video.price}</p>
                    </div>
                    </Link>
                ))}
            </div>
            {Count < videos.length &&(
                <div className='loadmore'>
                    <button onClick={Handleloadmore} className='load-btn'>Load More</button>
                </div>
            )}
            <div className="category">
                <h1>Learn anything, anytime, anywhere</h1>
            </div>
            </div>
    );
}