'use client';
import { useState } from 'react';
import videos from '../../components/VideoCard';

export default function EducatorDashboard() {
  const educatorName = 'greatstock';
  const [myCourses, setMyCourses] = useState(
    videos.filter((v) => v.name === educatorName)
  );

  const [showForm, setShowForm] = useState(false);

  const [newCourseData, setNewCourseData] = useState({
    title: '',
    price: '',
    description: '',
    hours: '',
  });

  const handleChange = (e) => {
    setNewCourseData({
      ...newCourseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();

    if (!newCourseData.title || !newCourseData.price) {
      alert('Please fill at least the title and price.');
      return;
    }

    const newCourse = {
      id: `course-${Date.now()}`,
      title: newCourseData.title,
      thumbnail: '/images/html.',
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

  const handleRemove = (id) => {
    const updated = myCourses.filter((course) => course.id !== id);
    setMyCourses(updated);
  };

  return (
    <div className="educator-dashboard">
      <h1>Educator Dashboard</h1>

      <button className="add-button" onClick={() => setShowForm(true)}>
        ➕ Add New Course
      </button>

      {showForm && (
        <form onSubmit={handleAddSubmit} className="add-course-form">
          <h2>Add New Course</h2>

          <label>
            Title*:
            <input
              type="text"
              name="title"
              value={newCourseData.title}
              onChange={handleChange}
              placeholder="Course title"
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
            />
          </label>

          <button type="submit" className="submit-btn">Add Course</button>
          <button type="button" onClick={() => setShowForm(false)} className="cancel-btn">Cancel</button>
        </form>
      )}

      {myCourses.map((course) => (
        <div key={course.id} className="course-box">
          <h2>{course.title}</h2>
          <p>Price: {course.price}</p>
          <p>Status: Published</p>
          <button onClick={() => handleRemove(course.id)} className="remove-btn">
            ❌ Remove
          </button>
        </div>
      ))}
    </div>
  );
}
