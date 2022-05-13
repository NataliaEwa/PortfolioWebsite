import { ReactNode, useEffect, useState } from 'react';
import Sky from 'src/compositions/home/sky-background/Sky';
import useWindowSize from 'src/hooks/useWindowSize';
import { portfolioTheme } from 'src/theme/ThemeProvider';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import IconsPanel from './components/iconsPanel/IconsPanel';
import MobileNavigation from './components/navigation/mobile/MobileNavigation';
import { LayoutContainer } from './Layout.styles';

interface LayoutProps {
	children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	const { width } = useWindowSize();

	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<LayoutContainer>
			<Header scrollPosition={scrollPosition} />

			{width && width >= portfolioTheme.breakpoints.values.md && <IconsPanel />}

			<main>
				<Sky />

				{children}
			</main>

			{width && width < portfolioTheme.breakpoints.values.md && <MobileNavigation scrollPosition={scrollPosition} />}

			<Footer />
		</LayoutContainer>
	);
}
