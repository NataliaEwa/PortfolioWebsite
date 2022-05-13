import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const PortfolioCardContainer = styled(Card)`
	background-color: transparent;
	max-width: '30rem';
	width: calc(50% - 1rem);

	${props => props.theme.breakpoints.down('md')} {
		width: 100%;
	}

	.image-container {
		max-width: '30rem';
		width: 100%;
		position: relative;

		${props => props.theme.breakpoints.down('md')} {
			width: 100%;
		}
	}

	.title {
		text-transform: uppercase;
	}
`;

export enum PortfolioCardClassNames {
	ImageContainer = 'image-container',
	Transparency = 'transparency',
	Title = 'title'
}
