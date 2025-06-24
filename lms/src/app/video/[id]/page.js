'use client';
import { useParams } from 'next/navigation';
import videos from '../../components/VideoCard';

export default function CoursePage() {
  const { id } = useParams();

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
         <img
            src={video.thumbnail}
            rating={video.rating}
          ></img>
          <div className='video-details1'>
          <h3 className='title'>{video.title}</h3>
          <p>{video.name}</p>
          <div className="rating">
          {'★'.repeat(video.rating) + '☆'.repeat(5 - video.rating)}
          </div>
        <p>{video.price}</p>
        </div>
        </div>
    </div>
  );
}
