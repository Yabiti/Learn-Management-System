'use client'
import { useState } from 'react';
import { useParams } from 'next/navigation';
import {videos} from './components/videocard.jsx';

export default function VideoDetail() {
  const { id } = useParams();
  const [enrolled, setEnrolled] = useState(false);

  const video = videos.find((v) => v.id === id);

  if (!video) return <p>Video not found</p>;

  return (
    <div className="video-detail">
      <h1>{video.title}</h1>
      <p>Instructor: {video.name}</p>
      <p>Price: {video.price}</p>
      <p>Rating: {'★'.repeat(video.rating) + '☆'.repeat(5 - video.rating)}</p>

      {!enrolled ? (
        <button onClick={() => setEnrolled(true)}>Enroll</button>
      ) : (
        <div className="video-frame">
          <iframe
            src={video.url}
            width="100%"
            height="400"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
