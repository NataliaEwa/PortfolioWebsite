import styled from '@emotion/styled';
import { footerDesktopHeight } from '../footer/Footer.styles';

export const IconsPanelWidth = '3rem';

export const IconsPanelContainer = styled.div`
	display: flex;
	align-items: center;
	z-index: 999;
	color: white;

	${props => props.theme.breakpoints.up('md')} {
		width: ${IconsPanelWidth};
		bottom: calc(${footerDesktopHeight} + 1rem);

		left: 0;
		position: fixed;
		flex-direction: column;
		row-gap: 1rem;
		justify-content: flex-end;
	}

	${props => props.theme.breakpoints.down('md')} {
		column-gap: 1rem;
		position: relative;
	}

	a {
		color: white;
		opacity: 0.8;
		transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transition-duration: 400ms;
		transform: scale(1.1, 1.1) translate3d(0, 0, 0);

		:hover {
			opacity: 1;
			transform: scale(1.5, 1.5);
		}
	}
`;

export enum IconsPanelClassNames {}
