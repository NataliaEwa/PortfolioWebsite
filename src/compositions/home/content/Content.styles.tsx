import styled from '@emotion/styled';

export const SectionTitle = styled.div`
	margin: 1rem 0 1rem 0;
	text-align: center;

	@media screen and (min-width: ${props => props.theme.breakpoints.values.md}px) {
		margin-top: 5rem;
	}
`;
