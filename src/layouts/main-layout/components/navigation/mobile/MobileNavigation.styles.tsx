import styled from '@emotion/styled';

export const mobileNavigationHeight = '3.5rem';

interface MobileNavigationContainerProps {
	scrollPosition: number;
}

export const MobileNavigationContainer = styled.nav<MobileNavigationContainerProps>`
	min-width: 100vw;
	z-index: 999;

	position: fixed;
	bottom: 0;
	background: transparent;
	height: ${mobileNavigationHeight};

	.transparent {
		background-color: ${props => props.theme.palette.background.default};
		opacity: 0.9;
	}

	.border {
		background-image: linear-gradient(
			to right,
			${props => (props.scrollPosition > 0 ? 'white' : props.theme.palette.primary.light)},
			${props => (props.scrollPosition > 0 ? props.theme.palette.primary.main : props.theme.palette.primary.dark)}
		);
		height: 1px;
		min-width: 100vw;
		position: absolute;
		opacity: 1;

		${props => props.theme.breakpoints.up('md')} {
			display: none;
		}
	}
`;

export enum MobileNavigationClassNames {
	Transparent = 'transparent',
	Border = 'border'
}
