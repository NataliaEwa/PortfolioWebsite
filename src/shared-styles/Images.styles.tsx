import styled from '@emotion/styled';
import Image from 'next/image';

export const DimmedImage = styled(Image)`
	${props => props.theme.breakpoints.up('md')} {
		flex-direction: row;
		-webkit-filter: grayscale(100%);
		-moz-filter: grayscale(100%);
		-ms-filter: grayscale(100%);
		-o-filter: grayscale(100%);
		filter: grayscale(100%);
		filter: gray;

		-webkit-transition: all 1s ease;
		-moz-transition: all 1s ease;
		-o-transition: all 1s ease;
		-ms-transition: all 1s ease;
		transition: all 1s ease;

		:hover {
			-webkit-filter: none;
			-moz-filter: none;
			-ms-filter: none;
			-o-filter: none;
			filter: none;

			-webkit-transition: all 1s ease;
			-moz-transition: all 1s ease;
			-o-transition: all 1s ease;
			-ms-transition: all 1s ease;
			transition: all 1s ease;
		}
	}
`;

export const Dimmed = styled.div`
	height: 100%;
	width: 100%;

	${props => props.theme.breakpoints.up('md')} {
		flex-direction: row;
		-webkit-filter: grayscale(100%);
		-moz-filter: grayscale(100%);
		-ms-filter: grayscale(100%);
		-o-filter: grayscale(100%);
		filter: grayscale(100%);
		filter: gray;

		-webkit-transition: all 1s ease;
		-moz-transition: all 1s ease;
		-o-transition: all 1s ease;
		-ms-transition: all 1s ease;
		transition: all 1s ease;

		:hover {
			-webkit-filter: none;
			-moz-filter: none;
			-ms-filter: none;
			-o-filter: none;
			filter: none;

			-webkit-transition: all 1s ease;
			-moz-transition: all 1s ease;
			-o-transition: all 1s ease;
			-ms-transition: all 1s ease;
			transition: all 1s ease;
		}
	}
`;
