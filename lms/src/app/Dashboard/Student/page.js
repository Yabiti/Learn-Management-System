'use client';

import { useState } from 'react';
import videos from '../../components/VideoCard';

export default function MyEnrollments() {
  const enrolledIds = ['html-css', 'python'];
  const enrolledVideos = videos.filter(video => enrolledIds.includes(video.id));

  const [enrolled, setEnrolled] = useState({});

  const handleEnroll = (id) => {
    setEnrolled({ ...enrolled, [id]: true });
  };

  return (
    <div className={styles.enrollmentWrapper}>
      <h1 className={styles.enrollmentTitle}>🎓 My Enrollments</h1>

      {enrolledVideos.map((video) => (
        <div key={video.id} className={styles.courseCard}>
          <h2>{video.title}</h2>

          {!enrolled[video.id] ? (
            <>
              <img
                src={video.thumbnail}
                alt={video.title}
                className={styles.thumbnail}
              />
              <p className={styles.price}>💰 {video.price}</p>
              <button
                className={styles.enrollButton}
                onClick={() => handleEnroll(video.id)}
              >
                📚 Enroll Now
              </button>
            </>
          ) : (
            <div className={styles.videoWrapper}>
              <iframe
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
