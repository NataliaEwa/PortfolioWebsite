import { useEffect, useState } from 'react';

export interface IWindowSize {
	width?: number;
	height?: number;
}

export default function useWindowSize() {
	const isSSR = typeof window !== 'undefined';
	const [windowSize, setWindowSize] = useState<IWindowSize>({
		width: undefined,
		height: undefined
	});

	const changeWindowSize = () => {
		setWindowSize({ width: window.innerWidth, height: window.innerHeight });
	};

	useEffect(() => {
		if (isSSR) {
			changeWindowSize();
			window.addEventListener('resize', changeWindowSize);

			return () => {
				window.removeEventListener('resize', changeWindowSize);
			};
		}
	}, []);

	return windowSize;
}
