import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const SkyContainer = styled.div`
	width: 100%;
	height: 100vh;
	overflow: hidden;
	position: fixed;
	background: black;
	background: radial-gradient(circle, black 0%, ${props => props.theme.palette.skyBackground.main} 100%);

	.stars-sky {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}
`;

export enum SkyClassNames {
	StarsSky = 'stars-sky'
}

export interface StarProps {
	time: number;
	angle: number;
	fadeStart: number;
	fadeEnd: number;
	starSize: number;
}

export const Star = styled.span<StarProps>`
	opacity: 0;
	transform-origin: 0, 0;
	position: absolute;
	background: white;
	box-shadow: 0px 0px 20px 0px white;
	border-radius: 100%;
	animation-timing-function: linear, linear !important;
	animation-iteration-count: infinite, infinite !important;
	animation-delay: -30s, -30s !important;

	width: ${props => props.starSize}px;
	height: ${props => props.starSize}px;

	top: 50vh;
	left: 50vw;

	animation: ${props => Animation(props.angle)} ${props => props.time}ms,
		${props => Fade(props.fadeStart, props.fadeEnd)} ${props => props.time}ms;
`;

const sin = (angle: number): number => {
	return Math.sin(angle);
};

const cos = (angle: number): number => {
	return Math.cos(angle);
};

export const reminder = (origin: number, mod: number): number => {
	const q = origin / mod > 0 ? Math.floor(origin / mod) : Math.ceil(origin / mod);

	return origin - mod * q;
};

const Animation = (angle: number) => keyframes`
	100% {
		transform: translate(${cos(angle) * 80}vw, ${sin(angle) * 80}vh);
	}
`;

const Fade = (fadeStart: number, fadeEnd: number) => keyframes`
	${fadeStart}% {
		opacity: 0;
	}
	${fadeEnd}% {
		opacity: 1;
	}
	100% {
		opacity: 1;
	}

`;
