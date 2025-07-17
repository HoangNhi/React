import Video from "./Video";
import React, { useRef } from "react";

function App() {
  const videoRef = useRef();

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="App">
      <Video ref={videoRef} />
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  );
}

export default App;
