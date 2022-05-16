import styled from '@emotion/styled';

export const AboutMeContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 2rem 2rem;
	margin: 1rem 0 1rem 0;
	height: 16rem;

	${props => props.theme.breakpoints.down('md')} {
		width: 100%;
		height: auto;
		flex-direction: column;
		margin-top: 1rem;
	}

	.image-container {
		position: relative;
		margin-top: 0.5rem;

		border-radius: 0.3rem;
		overflow: hidden;
		border: none;

		${props => props.theme.breakpoints.up('md')} {
			width: 24rem;
			height: 16rem;
		}

		.opacity {
			opacity: 0.8;
		}

		.centered-text {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			text-shadow: #000 0px 0px 6px, #000 0px 0px 5px, #000 0px 0px 4px, #000 0px 0px 3px, #000 0px 0px 2px, #000 0px 0px 1px;
			-webkit-font-smoothing: antialiased;
			font-size: 2.5rem;
			text-align: center;
			width: 100%;
		}
	}

	.typography {
		text-align: justify;
		opacity: 0.8;

		${props => props.theme.breakpoints.up('md')} {
			width: 32rem;
		}
		${props => props.theme.breakpoints.down('md')} {
			padding: 0 1rem 0 1rem;
		}
	}
`;

export enum AboutMeClassNames {
	ImageContainer = 'image-container',
	Typography = 'typography',
	CenteredText = 'centered-text',
	Opacity = 'opacity'
}
