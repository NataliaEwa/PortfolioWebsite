import styled from '@emotion/styled';

export const ContactMeContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-around;
	align-items: left;
	max-width: 60rem;

	gap: 1rem 2rem;
	margin: 1rem 0 1rem 0;

	${props => props.theme.breakpoints.down('md')} {
		width: 100%;
		height: auto;
		padding: 0 1rem 1rem 1rem;
		width: calc(100vw - 2rem);
	}

	a {
		color: white;
		opacity: 0.8;
		text-decoration: none;

		display: flex;
		flex-direction: row;
		gap: 1rem;

		:hover {
			opacity: 1;
		}
	}
`;
