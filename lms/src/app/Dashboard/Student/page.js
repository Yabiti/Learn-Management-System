import React, { useState } from 'react';
import videos from '../../components/VideoCard';

const availableCourses = [
  { id: 'c1', title: 'React Basics' },
  { id: 'c2', title: 'Advanced JavaScript' },
  { id: 'c3', title: 'Next.js for Beginners' },
];

export default function StudentEnrollment() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [message, setMessage] = useState('');

  const toggleCourse = (id) => {
    if (selectedCourses.includes(id)) {
      setSelectedCourses(selectedCourses.filter((cid) => cid !== id));
    } else {
      setSelectedCourses([...selectedCourses, id]);
    }
  };

  const handleEnroll = () => {
    if (selectedCourses.length === 0) {
      setMessage('Please select at least one course to enroll.');
      return;
    }

    setMessage(`You have enrolled in ${selectedCourses.length} course(s): ${selectedCourses.join(', ')}`);
    // Clear selection after enrolling (optional)
    setSelectedCourses([]);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
      <h2>Available Courses</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {availableCourses.map((course) => (
          <li key={course.id} style={{ marginBottom: '0.5rem' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedCourses.includes(course.id)}
                onChange={() => toggleCourse(course.id)}
              />{' '}
              {course.title}
            </label>
          </li>
        ))}
      </ul>

      <button
        onClick={handleEnroll}
        style={{
          background: '#0070f3',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Enroll
      </button>

      {message && <p style={{ marginTop: '1rem', color: 'green' }}>{message}</p>}
    </div>
  );
}
