import { videos } from "../components/videocard.jsx";

export default function Home() {
  return (
    <div className="video-editor">
      {videos.map((video) => (
        <div key={video.id}>
          <iframe
            width="560"
            height="315"
            src={video.url}
            title={video.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <h3>{video.title}</h3>
          <p>{video.price}</p>
        </div>
      ))}
    </div>
  );
}
