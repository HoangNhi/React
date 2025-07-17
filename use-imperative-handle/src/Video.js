import sunset from "./Video/sunset.mp4";
import { useImperativeHandle, useRef, forwardRef } from "react";

function Video(props, ref) {
    const videoRef = useRef();

  useImperativeHandle(videoRef, () => ({
    play: () => {
      videoRef.current.play();
    },
    pause: () => {
      videoRef.current.pause();
    },
  }));

  return <video ref={ref} src={sunset} width={280} />;
}

export default forwardRef(Video);
