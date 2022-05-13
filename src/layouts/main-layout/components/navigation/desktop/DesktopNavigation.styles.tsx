import styled from '@emotion/styled';

export const NavigationContainer = styled.header`
	.button {
		color: white;
		margin-right: 2rem;
	}
	.resume-button {
		background: none;

		color: white;
		box-shadow: 0 0 0.05em rgba(0, 0, 0, 0.4);
	}
	padding-right: 1rem;
`;

export enum NavigationClassNames {
	Button = 'button',
	ResumeButton = 'resume-button'
}
