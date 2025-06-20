import {videos} from "./components/videocard.jsx";

export default function Home(){
    return(
        <div className="video-editor">
            {videos.map((video) =>
            <div hey={video.id}>
                <iframe
                    src ='{video.url'
                    title = '{video.title}'
                    ></iframe>
                    <h3>{video.title}</h3>
                    <p>{video.price}</p>
            </div>

            )}
        </div>
    );
}