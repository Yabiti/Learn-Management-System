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
    </div>
  );
}
