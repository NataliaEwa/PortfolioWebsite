import { useEffect, useState } from 'react';
import { reminder, SkyClassNames, SkyContainer, Star, StarProps } from './Sky.styles';

export default function Sky(): JSX.Element {
	const [starsProps, setStarsProps] = useState<StarProps[]>([]);

	useEffect(() => {
		const starsCollection = [];

		for (let i = 0; i < 720; i++) {
			const time = Math.random() * 20000 + 5000;
			const angle = i - reminder(i, 4);
			const fadeStart = Math.random() * 200;
			const fadeEnd = fadeStart + 10;
			const starSize = Math.random() * 1.5 + 0.5;

			const star = { time: time, angle: angle, fadeStart: fadeStart, fadeEnd: fadeEnd, starSize: starSize } as StarProps;

			starsCollection.push(star);
		}

		setStarsProps(starsCollection);
	}, []);

	return (
		<SkyContainer>
			<div className={SkyClassNames.StarsSky}>
				{starsProps.map((props, i) => (
					<Star key={i} {...props} />
				))}
			</div>
		</SkyContainer>
	);
}
