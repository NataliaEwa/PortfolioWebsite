import styled from '@emotion/styled';

export const TransformSkillSize = styled.div`
	transition-duration: 400ms;

	:hover {
		transform: scale(1.1, 1.1);
	}
`;

export const SkillsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	gap: 2rem 6rem;
	padding: 1rem 10rem 1rem 10rem;
	max-width: 60rem;

	${props => props.theme.breakpoints.down('md')} {
		gap: 2rem 4rem;
		padding: 1rem 3rem 1rem 3rem;
	}

	.square-image-container {
		width: 5rem;
		height: 5rem;
		position: relative;
	}

	.react-logo-container {
		width: 16rem;
		height: 5rem;
		position: relative;
		align-items: center;
	}

	.my-sql-logo-container {
		width: 7rem;
		height: 5rem;
		position: relative;
	}

	.next-js-logo-container {
		width: 11rem;
		height: 7rem;
		align-items: center;
		position: relative;
	}

	.sql-server-logo-container {
		width: 11rem;
		height: 7rem;
		position: relative;
		//border: 0.1rem solid white;
	}

	.power-bi-container {
		width: 14rem;
		height: 5rem;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: ${props => props.theme.palette.powerBi.main};
	}
`;

export enum SkillsClassNames {
	SquareImageContainer = 'square-image-container ',
	ImagesContainer = 'images-container',
	NextJsLogoContainer = 'next-js-logo-container',
	ReactLogoContainer = 'react-logo-container',
	MySqlLogoContainer = 'my-sql-logo-container',
	SqlServerLogoContainer = 'sql-server-logo-container',
	PowerBiContainer = 'power-bi-container'
}
