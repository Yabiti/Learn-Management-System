'use client';

export default function EducatorDashboard() {
  const educatorName = 'greatstock';
  const myCourses = videos.filter(v => v.name === educatorName);

  return (
    <div style={{padding:'2rem'}}>
      <h1>Educator Dashboard</h1>

      {myCourses.map(course => (
        <div key={course.id} style={{border:'1px solid #ccc', padding:'1rem', margin:'1rem 0'}}>
          <h2>{course.title}</h2>
          <p>Price: {course.price}</p>
          <p>Status: Published</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
