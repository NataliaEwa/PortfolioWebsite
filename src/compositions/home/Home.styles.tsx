import styled from '@emotion/styled';
import { footerDesktopHeight } from 'src/layouts/main-layout/components/footer/Footer.styles';
import { headerDesktopHeight } from 'src/layouts/main-layout/components/header/Header.styles';
import { mobileNavigationHeight } from 'src/layouts/main-layout/components/navigation/mobile/MobileNavigation.styles';

export const HomeContainer = styled.div`
	margin: 0;
	padding: 0;
	min-height: 100vh;
	min-width: 100vw;
	max-width: 70rem;

	padding: calc(${headerDesktopHeight} + 1rem) 1rem calc(${footerDesktopHeight} + 1rem) 1rem;

	${props => props.theme.breakpoints.down('md')} {
		padding: ${mobileNavigationHeight} 0 0 0;
		width: 100vw;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	position: relative;
`;

export enum HomeClassNames {}
