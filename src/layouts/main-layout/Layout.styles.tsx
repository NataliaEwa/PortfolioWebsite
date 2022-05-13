import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
	margin: 0;
	padding: 0;
	min-height: 100vh;
	min-width: 100vw;
	background-color: ${props => props.theme.palette.background.default};

	main {
		min-height: 100vh;
		overflow: hidden;
	}
`;

export enum LayoutClassNames {}
