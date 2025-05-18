import React, { useRef, useState } from 'react';
import suara from '../assets/audio/suara.mp3';
import soundOn from '../assets/images/sound-on.png';
import soundMute from '../assets/images/sound-mute.png';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';


function CustomAudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={suara} />
        <button onClick={togglePlay}>
            {isPlaying ? <FaVolumeUp size={32} color="white" /> : <FaVolumeMute size={32} color="#466733"/>}
        </button>
    </div>
  );
}

export default CustomAudioPlayer;
