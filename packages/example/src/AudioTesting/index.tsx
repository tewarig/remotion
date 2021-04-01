import {Audio} from 'remotion';
import music from './music.mp3';

const AudioTesting: React.FC = () => {
	return (
		<div>
			<Audio
				startAt={100}
				endAt={200}
				src={music}
				volume={(f) => (Math.sin(f / 3) + 1) / 2}
			/>
		</div>
	);
};

export default AudioTesting;
