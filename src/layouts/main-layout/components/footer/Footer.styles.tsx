import styled from '@emotion/styled';
import { mobileNavigationHeight } from '../navigation/mobile/MobileNavigation.styles';

export const footerDesktopHeight = '2.5rem';

export const FooterContainer = styled.footer`
	min-width: 100vw;
	height: ${footerDesktopHeight};

	display: flex;
	flex-direction: column;
	align-items: center;

	z-index: 990;
	justify-content: space-between;

	background-color: transparent;

	${props => props.theme.breakpoints.down('md')} {
		margin-bottom: calc(${mobileNavigationHeight});
		opacity: 0.8;
	}

	.container {
		height: ${footerDesktopHeight};
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		z-index: 990;

		.typography {
			font-size: 0.9rem;
			color: ${props => props.theme.palette.text.secondary};
		}
	}

	.border {
		background-image: linear-gradient(
			to right,
			${props => props.theme.palette.primary.light},
			${props => props.theme.palette.primary.dark}
		);
		height: 1px;
		min-width: 100vw;
		position: absolute;
		opacity: 0.2;

		${props => props.theme.breakpoints.down('md')} {
			display: none;
		}
	}
`;

export enum FooterClassNames {
	Border = 'border',
	Container = 'container',
	Typography = 'typography'
}
