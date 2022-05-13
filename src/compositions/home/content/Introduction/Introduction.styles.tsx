import styled from '@emotion/styled';
import { headerDesktopHeight } from 'src/layouts/main-layout/components/header/Header.styles';

export const IntroductionContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	gap: 1rem 1rem;

	${props => props.theme.breakpoints.up('md')} {
		height: calc(100vh - ${headerDesktopHeight});

		h1 {
			font-size: 5rem;
		}
	}

	${props => props.theme.breakpoints.down('md')} {
		h1 {
			font-size: 2rem;
		}

		h6 {
			font-size: 1rem;
		}

		padding: 7rem 1rem 4rem 1rem;
	}

	.opacity {
		opacity: 0.8;
	}
`;

export enum IntroductionClassNames {
	Opacity = 'opacity'
}
