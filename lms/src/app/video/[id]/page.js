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
            title={video.title}
            name={video.name}
            rating={video.rating}
          ></img>
          <div className='video-details1'>
        <p className="d">{video.price}</p>
        <p>{video.Hours}</p>
        <button className="button1" type="submit">Enroll Now</button>
        </div>
        </div>
        <div className="course-structure">
          <h1 className="secondpagee">Course Structure</h1>
        </div>
        
        </div>
  );
}
