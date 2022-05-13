import { Typography } from '@mui/material';
import { SectionTitle } from '../Content.styles';
import Image from 'next/image';
import aboutMe from '/public/images/aboutme.jpg';
import { AboutMeClassNames, AboutMeContainer } from './AboutMe.styles';
import { portfolioTheme } from 'src/theme/ThemeProvider';
import useWindowSize from 'src/hooks/useWindowSize';
import { Dimmed } from 'src/shared-styles/Images.styles';

export const AboutMe = () => {
	//const { width } = useWindowSize();

	return (
		<>
{/* 			{width && width >= portfolioTheme.breakpoints.values.md && (
				<SectionTitle id='about'>
					<Typography variant='h4'>About Me </Typography>
				</SectionTitle>
			)} */}

{/* 			<Dimmed id='about-me'>
				<AboutMeContainer>
					<div className={AboutMeClassNames.ImageContainer}>
						<Image src={aboutMe} alt='aboutMe' className={AboutMeClassNames.Opacity}></Image>

						{width && width < portfolioTheme.breakpoints.values.md && (
							<Typography variant='h4' className={AboutMeClassNames.CenteredText}>
								About Me
							</Typography>
						)}
					</div>

					<div className={AboutMeClassNames.Typography}>
						<Typography marginBottom={'1rem'}>
							Hello, my name is Natalia and I am a front developer. I build and design modern websites using React.js, next.js
							and TypeScript.
						</Typography>

						<Typography>
							At the beginning I worked in finances as a sales analyst. In 2020, I took part in an internal project in the
							company I worked for and this is how my adventure with programming began. I really liked how, using the basic
							elements of the programming language and logic, I can create an infinite number of visually and functionally
							different websites.
						</Typography>

						<Typography>
							In my spare time I play squash, hang out with friends and craft things such as candles and handbags. I also like
							good wine, cooking, traveling and snorkeling.
						</Typography>
					</div>
				</AboutMeContainer>
			</Dimmed> */}
		</>
	);
};
