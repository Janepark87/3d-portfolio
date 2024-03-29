import { useRef, useEffect, useState } from 'react';
import sakura from '../assets/sakura.mp3';

export default function useAudio() {
	const audioRef = useRef(new Audio(sakura));
	const [isPlayingMusic, setIsPlayingMusic] = useState(false);

	audioRef.current.volume = 0.3;
	audioRef.current.loop = true;

	useEffect(() => {
		const audio = audioRef.current;
		if (isPlayingMusic) audio.play();

		// Clean up the audio on component unmount
		return () => audio.pause();
	}, [isPlayingMusic]);

	return { isPlayingMusic, setIsPlayingMusic };
}
