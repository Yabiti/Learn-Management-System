'use client';
import {useState} from 'react';
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
        <img 
        src={video.thumbnail}
        ></img>
    </div>
  );
}
