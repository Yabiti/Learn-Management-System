'use client';
import { useState } from 'react';
import videos from '../../components/VideoCard';


export default function MyEnrollments() {
  const enrolledIds = ['html-css', 'python'];
  const enrolledCourses = videos.filter(v => enrolledIds.includes(v.id));

  const [watched, setWatched] = useState({});

  const handleWatch = id => setWatched({ ...watched, [id]: true });

  return (
    <div className="styles.enrollmentWrapper">
      <h1 className="styles.enrollmentTitle">🎓 My Enrollments</h1>

      {enrolledCourses.map(course => (
        <div key={course.id} className="styles.courseCard">
          <h2>{course.title}</h2>
          {!watched[course.id] ? (
            <button
              className="styles.watchButton"
              onClick={() => handleWatch(course.id)}
            >
              ▶️ Start Watching
            </button>
          ) : (
            <div className="styles.videoContainer">
              <iframe
                src={course.url}
                title={course.title}
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
