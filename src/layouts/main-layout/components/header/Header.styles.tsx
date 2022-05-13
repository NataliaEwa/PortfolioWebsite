import styled from '@emotion/styled';

export const headerDesktopHeight = '5rem';

interface HeaderProps {
	scrollPosition: number;
}

export const HeaderContainer = styled.header<HeaderProps>`
	min-width: 100vw;
	height: ${headerDesktopHeight};

	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	z-index: 999;
	justify-content: space-between;

	background-color: ${props => (props.scrollPosition > 0 ? props.theme.palette.background.default : 'transparent')};

	opacity: ${props => (props.scrollPosition > 0 ? '0.8' : '1')};

	.container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 0 1rem 0;
	}

	.border {
		background-image: linear-gradient(
			to right,
			${props => (props.scrollPosition > 0 ? props.theme.palette.primary.light : 'white')},
			${props => (props.scrollPosition > 0 ? props.theme.palette.primary.dark : props.theme.palette.primary.main)}
		);
		height: 1px;
		min-width: 100vw;
		top: 5rem;
		position: absolute;

		-webkit-transition: all 1s ease;
		-moz-transition: all 1s ease;
		-o-transition: all 1s ease;
		-ms-transition: all 1s ease;
		transition: all 1s ease;
	}

	.logo {
		width: 3rem;
		height: 3rem;
		margin-left: 1rem;

		background: transparent;
		outline: solid 0.2rem ${props => (props.scrollPosition > 0 ? props.theme.palette.primary.dark : 'white')};

		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		text-align: center;

		transform: rotate(20deg);

		-webkit-transition: all 1s ease;
		-moz-transition: all 1s ease;
		-o-transition: all 1s ease;
		-ms-transition: all 1s ease;
		transition: all 1s ease;

		:hover {
			cursor: pointer;
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 3rem;
			width: 3rem;

			outline: solid 0.2rem ${props => (props.scrollPosition > 0 ? 'none' : 'white')};
			background: ${props => (props.scrollPosition > 0 ? props.theme.palette.primary.main : 'none')};
			background-image: ${props =>
				props.scrollPosition > 0
					? `linear-gradient(20deg, rgba(0, 0, 0, 0.05) 25%, transparent 25%, transparent), 
					linear-gradient(-20deg, rgba(0, 0, 0, 0.05) 25%, transparent 25%, transparent),
					linear-gradient(20deg, transparent 75%, rgba(0, 0, 0, 0.05) 75%),
					linear-gradient(-20deg, transparent 75%, rgba(0, 0, 0, 0.05) 75%);`
					: 'none'};

			transform: rotate(135deg);

			-webkit-transition: all 1s ease;
			-moz-transition: all 1s ease;
			-o-transition: all 1s ease;
			-ms-transition: all 1s ease;
			transition: all 1s ease;
		}

		span {
			transform: rotate(-20deg);
			font-size: 2rem;
			font-family: Arial, Helvetica, sans-serif;
			letter-spacing: -8px;
			color: white;
		}

		.nk {
			transform: rotate(-20deg);
			width: 2rem;
			padding-right: 8px;
		}
	}
`;

export enum HeaderClassNames {
	Logo = 'logo',
	NK = 'nk',
	Border = 'border',
	Container = 'container'
}
