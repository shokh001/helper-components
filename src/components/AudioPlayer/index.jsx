import { useEffect, useRef, useState } from "react";
import styles from "./audio.module.scss";
import { Pause, Play, Volume } from "../Icons";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const AudioPlayer = ({ tracks, className }) => {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.4);
  const [input, setInput] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    setCurrentTrack(0);
  }, [tracks]);

  const handlePlay = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    setVolume(e);
    audioRef.current.volume = e;
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e;
  };

  const a = (duration) => {
    var min = Math.floor(duration / 60);
    var sec = Math.floor(duration % 60);
    return min + ":" + (sec < 10 ? "0" + sec : sec);
  };

  return (
    <div className={styles.audioPlayer + " " + className}>
      <audio
        ref={audioRef}
        src={tracks[currentTrack]?.src}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className={styles.controls}>
        {playing && Math.floor(currentTime) !== Math.floor(duration) ? (
          <Pause onClick={handlePause} />
        ) : (
          <Play onClick={handlePlay} />
        )}
      </div>
      <div className={styles.progress_bar}>
        <div>{a(currentTime)}</div>

        <Slider
          className={styles.bar}
          min={0}
          max={Math.floor(duration)}
          step={1}
          onChange={(nextValues) => {
            handleSeek(nextValues);
          }}
          value={Math.floor(currentTime)}
        />
        <div>{a(duration)}</div>
      </div>

      <div className={styles.volume}>
        <Volume onClick={() => setInput(!input)} />
        {input && (
          <div className={styles.range}>
            <Slider
              vertical
              min={0}
              max={1}
              step={0.01}
              onChange={(nextValues) => {
                handleVolumeChange(nextValues);
              }}
              value={volume}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
