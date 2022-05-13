import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
	margin: 0;
	padding: 0;
	min-height: 100vh;
	width: 100vw;
	background-color: ${props => props.theme.palette.background.default};

	main {
		// psuje rozdzielczosc - patrz na widnows
		min-height: 100vh;
		overflow: hidden;
		overflow-y: 'scroll';
	}
`;

export enum LayoutClassNames {}
