import styled from '@emotion/styled';

export const MyWorkContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;

	max-width: 60rem;

	gap: 2rem 2rem;
	margin: 1rem 0 1rem 0;

	${props => props.theme.breakpoints.down('md')} {
		width: 100%;
		height: auto;
		flex-direction: column;
	}

	align-items: stretch;
	align-content: stretch;
`;
