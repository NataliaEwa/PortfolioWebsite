import { useCallback } from 'react';
import useWindowSize from 'src/hooks/useWindowSize';
import { portfolioTheme } from 'src/theme/ThemeProvider';
import DesktopNavigation from '../navigation/desktop/DesktopNavigation';
import { HeaderClassNames as HeaderClassNames, HeaderContainer as HeaderContainer } from './Header.styles';

interface HeaderProps {
	scrollPosition: number;
}

export default function Header({ scrollPosition }: HeaderProps): JSX.Element {
	const { width } = useWindowSize();

	const scrollToTop = useCallback(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}, []);

	return (
		<HeaderContainer scrollPosition={scrollPosition}>
			<div className={HeaderClassNames.Container}>
				<div onClick={() => scrollToTop()} className={HeaderClassNames.Logo}>
					<div className={HeaderClassNames.NK}>
						<span>NK</span>
					</div>
				</div>
				{width && width >= portfolioTheme.breakpoints.values.md && (
					<nav>
						<DesktopNavigation />
					</nav>
				)}
			</div>
			<div className={HeaderClassNames.Border} />
		</HeaderContainer>
	);
}
