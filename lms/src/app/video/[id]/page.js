'use client';
import {useState} from 'react';
import { useParams } from 'next/navigation';
import videos from '../../components/VideoCard';

export default function CoursePage() {
  const { id } = useParams();
  const[Enrolled, setEnrolled] = useState(false);

  const video = videos.find((v) => v.id === id);

  if (!video) return <p>Course not found</p>;