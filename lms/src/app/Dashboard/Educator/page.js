'use client';
import { useState } from 'react';
import videos from '../../components/VideoCard';

export default function EducatorDashboard() {
  const educatorName = 'greatstock';

  const [myCourses, setMyCourses] = useState(
    videos.filter((v) => v.name === educatorName)
  );

  // State to control showing add course form
  const [showForm, setShowForm] = useState(false);

  // State to hold new course data inputs
  const [newCourseData, setNewCourseData] = useState({
    title: '',
    price: '',
    description: '',
    hours: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setNewCourseData({
      ...newCourseData,
      [e.target.name]: e.target.value,
    });
  };

  // Add new course on form submit
  const handleAddSubmit = (e) => {
    e.preventDefault();

    if (!newCourseData.title || !newCourseData.price) {
      alert('Please fill at least the title and price.');
      return;
    }

    const newCourse = {
      id: `course-${Date.now()}`,
      title: newCourseData.title,
      thumbnail: '/images/default.png',
      price: newCourseData.price,
      name: educatorName,
      rating: 0,
      url: '',
      description: newCourseData.description || 'No description provided.',
      Hours: newCourseData.hours || '0 hrs | 0 Lessons',
    };

    setMyCourses([newCourse, ...myCourses]);
    setShowForm(false);
    setNewCourseData({ title: '', price: '', description: '', hours: '' });
  };

  // Remove course
  const handleRemove = (id) => {
    const updated = myCourses.filter((course) => course.id !== id);
    setMyCourses(updated);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Educator Dashboard</h1>

      <button
        style={{
          background: '#0070f3',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '1rem',
          cursor: 'pointer',
        }}
        onClick={() => setShowForm(true)}
      >
        ➕ Add New Course
      </button>

      {/* Show add course form */}
      {showForm && (
        <form
          onSubmit={handleAddSubmit}
          style={{
            marginBottom: '2rem',
            padding: '1rem',
            border: '1px solid #0070f3',
            borderRadius: '10px',
            maxWidth: '400px',
          }}
        >
          <h2>Add New Course</h2>

          <label>
            Title*:
            <input
              type="text"
              name="title"
              value={newCourseData.title}
              onChange={handleChange}
              placeholder="Course title"
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
              required
            />
          </label>

          <label>
            Price*:
            <input
              type="text"
              name="price"
              value={newCourseData.price}
              onChange={handleChange}
              placeholder="e.g. 49.99$"
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
              required
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              value={newCourseData.description}
              onChange={handleChange}
              placeholder="Course description"
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
            />
          </label>

          <label>
            Hours & Lessons:
            <input
              type="text"
              name="hours"
              value={newCourseData.hours}
              onChange={handleChange}
              placeholder="e.g. 5 hrs | 10 Lessons"
              style={{ width: '100%', padding: '0.5rem', marginBottom: '0.5rem' }}
            />
          </label>

          <button
            type="submit"
            style={{
              background: '#0070f3',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '1rem',
            }}
          >
            Add Course
          </button>

          <button
            type="button"
            onClick={() => setShowForm(false)}
            style={{
              background: '#ccc',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </form>
      )}

      {/* List of courses */}
      {myCourses.map((course) => (
        <div
          key={course.id}
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '10px',
          }}
        >
          <h2>{course.title}</h2>
          <p>Price: {course.price}</p>
          <p>Status: Published</p>
          <button
            onClick={() => handleRemove(course.id)}
            style={{
              background: '#e63946',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '5px',
              marginTop: '0.5rem',
              cursor: 'pointer',
            }}
          >
            ❌ Remove
          </button>
        </div>
      ))}
    </div>
  );
}
