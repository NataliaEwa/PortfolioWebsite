import { useCallback } from 'react';
import { BrighteningButton } from 'src/shared-styles/Buttons.styles';
import { NavigationClassNames, NavigationContainer } from './DesktopNavigation.styles';

export default function DesktopNavigation(): JSX.Element {
	const scrollToId = useCallback((id: string) => {
		let el = document.getElementById(id);
		el && window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
	}, []);

	return (
		<NavigationContainer>
			<BrighteningButton
				variant='text'
				className={NavigationClassNames.Button}
				onClick={() => {
					scrollToId('about');
				}}
			>
				About
			</BrighteningButton>

			<BrighteningButton
				variant='text'
				className={NavigationClassNames.Button}
				onClick={() => {
					scrollToId('skills');
				}}
			>
				Skills
			</BrighteningButton>

			<BrighteningButton
				variant='text'
				className={NavigationClassNames.Button}
				onClick={() => {
					scrollToId('experience');
				}}
			>
				Experience
			</BrighteningButton>

			<BrighteningButton
				variant='text'
				className={NavigationClassNames.Button}
				onClick={() => {
					scrollToId('contact');
				}}
			>
				Contact
			</BrighteningButton>

			<a target='_blank' href='/NATALIA KAMIENIAK CV.pdf'>
				<BrighteningButton variant='outlined' className={NavigationClassNames.ResumeButton}>
					Resume
				</BrighteningButton>
			</a>
		</NavigationContainer>
	);
}
