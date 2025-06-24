'use client';
import {useState} from 'react';
import { useParams } from 'next/navigation';
import videos from '../../components/VideoCard';

export default function CoursePage() {
  const { id } = useParams();
  const[Enrolled, setEnrolled] = useState(false);

  const video = videos.find((v) => v.id === id);

  if (!video) return <p>Course not found</p>;

  return (
    <div>
      <h1 className='secondpage'>{video.title}</h1>
      <p className='des'>{video.description.split('\n').map((line, index) => (
        <span key={index}>
        {line}
        <br />
        </span>
        ))}
      </p>
      <div className="video-id">
        {!Enrolled ? (
          <img
            src={video.thumbnail}
            title={video.title}
            alt={video.title}
            className="thumbnail"
          />
        ) : (
          <iframe
            width="100%"
            height="315"
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
          <div className='video-details1'>
          <p className="d">{video.price}</p>
          <p>{video.Hours}</p>
          {!Enrolled && (
            <button className="button1" onClick={() => setEnrolled(true)}>
              Enroll Now
            </button>
          )}
        </div>
      </div>
        <div className="course-structure">
          <h1 className="secondpagee">Course Description</h1>
                <p className='des'>{video.description.split('\n').map((line, index) => (
        <span key={index}>
        {line}
        <br />
        </span>
        ))}
      </p>
        </div>
      
        </div>
  );
}
